module.exports = function (mongoose, { PeriodSchema }) {
    return new mongoose.Schema({
        _id: { type: mongoose.Schema.ObjectId, auto: true },
        calls: { type: Number, default: 0 },
        newPatients: { type: Number, default: 0 },
        period: { type: PeriodSchema, required: true, immutable: true },
        trackerId: { type: String, required: true, immutable: true },
    });
};
