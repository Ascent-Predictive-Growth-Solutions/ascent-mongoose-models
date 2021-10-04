module.exports = function (mongoose) {
    return new mongoose.Schema(
        {
            ordinal: { type: Number, required: true },
            month: { type: Number, required: true },
            year: { type: Number, required: true },
            day: { type: Number, required: true },
        },
        { _id: false }
    );
};
