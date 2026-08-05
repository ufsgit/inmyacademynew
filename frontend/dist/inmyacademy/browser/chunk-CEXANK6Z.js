// src/app/data/mastery-tracks.data.ts
function getTrackSlug(title) {
  return title.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^a-z0-9\-]/g, "");
}

export {
  getTrackSlug
};
//# sourceMappingURL=chunk-CEXANK6Z.js.map
