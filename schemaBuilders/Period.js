module.exports = function (mongoose) {
  return new mongoose.Schema(
    {
      ordinal: { type: Number, required: true, immutable: true },
      month: { type: Number, required: true, immutable: true },
      year: { type: Number, required: true, immutable: true },
      day: { type: Number, required: true, immutable: true },
    },
    { _id: false }
  );
};
