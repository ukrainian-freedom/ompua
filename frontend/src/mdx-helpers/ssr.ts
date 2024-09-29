import React from "react";
import mdx from "@mdx-js/mdx";
import { MDXProvider, mdx as mdxReact } from "@mdx-js/react";
import { transformAsync } from "@babel/core";
import presetEnv from "@babel/preset-env";
import presetReact from "@babel/preset-react";
import { renderToString as reactRenderToString } from "react-dom/server";

import { readLocaleContent } from "src/utils/content";

import { MDX_COMPONENTS } from "./components";
import { MarkdownContent, MarkdownRenderConfig } from "./types";
import pluginBrowser from "./babel-plugin-mdx-browser";

// Renders markdown content on the server for the given locale. Uses
// readLocaleContent under the hood which handles fallbacks/extensions.
export const markdownSSR = async (
  locale: string,
  file: string
): Promise<MarkdownContent> => {
  const { source } = await readLocaleContent(file, locale);
  return await renderToString(source, {
    components: MDX_COMPONENTS,
  });
};

// Stolen from Hashicorp's next-mdx-remote!
export const renderToString = async (
  source: Buffer | string,
  { components, mdxOptions, scope = {} }: MarkdownRenderConfig
): Promise<MarkdownContent> => {
  // transform it into react
  const code = await mdx(source, { ...mdxOptions, skipExport: true });

  // mdx gives us back es6 code, we then need to transform into two formats:
  // - first a version we can render to string right now as a "serialized" result
  // - next a version that is fully browser-compatible that we can eval to rehydrate

  // this one is for immediate evaluation so we can renderToString below
  const now = await transformAsync(code, {
    presets: [presetReact, presetEnv],
    configFile: false,
  });

  // this one is for the browser to eval and rehydrate, later
  const later = await transformAsync(code, {
    presets: [presetReact, presetEnv],
    plugins: [pluginBrowser],
    configFile: false,
  });

  // evaluate the code
  // NOTES:
  // - relative imports can't be expected to work with remote files, we'd need
  //   an extra babel transform to be able to import specific file paths
  const fn = new Function(
    "React",
    "MDXProvider",
    "mdx",
    "components",
    ...Object.keys(scope),
    `${now?.code}
  return React.createElement(MDXProvider, { components },
    React.createElement(MDXContent, {})
  );`
  );

  const component = fn(
    React,
    MDXProvider,
    mdxReact,
    components,
    ...Object.values(scope)
  );

  // react: render to string
  const renderedOutput = reactRenderToString(component);

  return {
    compiledSource: later?.code || "",
    renderedOutput,
    scope,
  };
};
