---
title: Crash Addresses
---

下表列出了一些常见的崩溃地址，您可以使用这些地址来帮助跟踪问题并防止今后再次发生。在大多数情况下，客户端崩溃是由于脚本中的问题造成的。不过值得一提的是，如今 SA:MP 已经相当稳定了.

## 客户端崩溃地址

| 频率 | 地址                  | 原因                                                                                                                                                                                                                      | 解决方案                                                                                                                                                                                                                                                                             |
| --------- | ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 罕见      | 0x00000000               | SA:MP 未初始化.                                                                                                                                                                                                 | 重新安装游戏，确保单人游戏能正常运行 如果安装了任何mod，请将其移除                                                                                                                                                                                           |
| 罕见      | 0x006E3D17               | 与皮肤有关。通常发生在更换处于车辆中或刚进入/离开车辆的玩家的皮肤时.                                                                                                     | 确保玩家在更换皮肤前是步行状态.                                                                                                                                                                                                                           |
| 罕见      | 0x0058370A               | 难以追踪. 似乎与车辆/摄像机有关. 当脚本试图将玩家放入车辆时发生. 玩家被传送到的车辆尚不可用和/或未在世界中渲染 | 等待几百毫秒，然后再将玩家传送到新创建的车辆中. 另一种可能的解决方案是，在将摄像机传送到车辆之前使用 SetCameraBehindPlayer.                                                                                 |
| 罕见      | 0x0040F64C               | Windows 7 / Vista 中与权限有关的问题. SA:MP 客户端使用的安装程序版本存在问题                                                                                                            | 更新至 SA:MP 0.3.7。如果仍出现这种情况，请重命名 GTASA 目录.                                                                                                                                                                                                                |
| 罕见      | 0x0059F8B4               | 当客户端无法加载 SA:MP 对象时出现。通常是一个重要文件 samp.img 丢失的问题.                                                                                                  | 重新安装客户端。如果使用 Windows Vista / 7，尝试以管理员身份运行安装程序.                                                                                                                                                                                        |
| 罕见      | 0x00746929 或 0x0081214A | 客户端设置配置不当.                                                                                                                                                                                      | 使用任务管理器终止 "gta_sa.exe"                                                                                                                                                                                                                                                                                |
| 频繁  | 0x007F0BF7               | 与车辆组件有关。通常是服务器尝试在车辆上安装无效组件（如摩托车上的氮气或扰流板）时造成的。其他的原因可能是客户端车辆 mod 兼容性差.                         | 论坛上发布的各种脚本中都具有错误检查功能.                                                                                                                                                                                      |
| 频繁  | 0x00544BC8               | 与对象有关。通常发生在客户端显示的对象过多时，即超过了客户端的处理能力.                                                                                                      | 一个实用的解决方案可能是使用对象处理程序/streamer。这些论坛上的许多streamer都带有配置设置，可在任何给定时间内减少显示给玩家的可视对象的最大数量                                                            |
| 频繁  | 0x00415D47 或 0x00536DF4 | 与对象有关。通常在客户端加载了太多对象纹理时发生.                                                                                                                                  | 难以追踪和修复的低级问题。我认为它与碰撞有一定的关系。尝试移除一组物体，用排除法确定是哪些物体导致了这种情况，并将它们从游戏模式中移除. |
| 罕见 | 0x593C6F | 当盗窃物品 (入室盗窃时拾取的物品) 的数量太多时. | 减少盗窃物品的数量 |

## 聊天框警告代码

| 信息                          | 原因                                                                                                                                                                                                                                                                                                                                                                                                                                               | 解决方案                                         |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| Exception 0xC0000005 at 0x5E5815 | 难以追踪. 这个地址指向的方法执行了很多操作。它基于行人所站立的表面处理动画混合，然后处理音频，并且是在一个给你提供武器的函数之后被调用的……可能发生的情况是，当你进入车辆时，某些脚本触发的事件正好发生了（例如接收武器、传送或类似的事情）. | -                                                |
| Exception 0x0000005 at 0x534134  | Windows 7 / Vista 访问级别的问题                                                                                                                                                                                                                                                                                                                                                                                                          | 以管理员身份运行 SA:MP 似乎可以解决这个问题. |
| Exception 0xC0000005 at 0x544BC8 | 请查阅 0x00544BC8                                                                                                                                                                                                                                                                                                                                                                                                                                      | 请查阅 0x00544BC8                                   |
| Exception 0xC0000005 at 0x536DF4 | 请查阅 0x00544BC8                                                                                                                                                                                                                                                                                                                                                                                                                                      | 请查阅 0x00544BC8                                   |
| Exception 0xC0000005 at 0x7F120E | 应用了无效的车辆升级                                                                                                                                                                                                                                                                                                                                                                                                                     | 你安装了车辆修改（如操控和车辆设置），因为SAMP不会加载你的Handling.cfg和Vehicles.ide文件。如果你调整这些设置，你可能会比其他人驾驶得更快，这样就不公平了，所以这些设置会从管理员的SAMP源加载。简而言之，SAMP不会加载你修改过的车辆设置.               | 
| Exception At Address: 0x0040FB80 | 在 Windows 7 x64 计算机上常见崩溃。在 Windows 2000、Windows XP 或 Windows Vista（任何 Service Pack）的兼容模式下运行时发生.                                                                                                                | 通过禁用兼容性并以管理员身份运行 gta_sa.exe 修复此问题.                                                                                   | 
| Exception At Address:0x0071A708 | 未知                                                                                              | 在 "选项" > "显示选项"中禁用图例.                                                                                                                       | 
| Exception at Address: 0x004DFE92 | 损坏的设置                                                                                                                | 删除 "我的文档/GTA San Andreas User Files" 文件夹中的 gta_sa.set 文件.                                                                                              | 