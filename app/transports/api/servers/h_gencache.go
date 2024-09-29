package servers

import (
	"net/http"
	"strconv"
	"time"

	"github.com/pkg/errors"

	"github.com/openmultiplayer/web/internal/web"
)

func (s *service) gencache(w http.ResponseWriter, r *http.Request) {
	queries := r.URL.Query()
	since, err := strconv.Atoi(queries.Get("activeSince"))
	if err != nil {
		since = 3
	}

	err = s.storer.GenerateCache(r.Context(), time.Duration(-since)*time.Hour)
	if err != nil {
		web.StatusInternalServerError(w, errors.Wrap(err, "failed to get list of servers"))
		return
	}

	list, err := s.storer.GetAllCached(r.Context(), time.Duration(-since)*time.Hour)
	if err != nil {
		web.StatusInternalServerError(w, errors.Wrap(err, "failed to get list of servers"))
		return
	}

	w.Header().Add("Content-Type", "application/json")
	web.Write(w, list)
}
