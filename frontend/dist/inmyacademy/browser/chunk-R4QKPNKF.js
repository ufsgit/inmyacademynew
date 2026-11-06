// src/app/data/mastery-tracks.data.ts
function getTrackSlug(title) {
  return (title || "").toLowerCase().trim().replace(/\s+/g, "-").replace(/[^a-z0-9\-]/g, "").replace(/-+/g, "-");
}

export {
  getTrackSlug
};
//# sourceMappingURL=chunk-R4QKPNKF.js.map
