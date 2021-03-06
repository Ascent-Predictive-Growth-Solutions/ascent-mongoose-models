module.exports = function (mongoose, { PeriodSchema }) {
    return new mongoose.Schema({
        _id: { type: mongoose.Schema.ObjectId, auto: true },
        clicks: { type: Number, default: 0 },
        impressions: { type: Number, default: 0 },
        adSpend: { type: Number, default: 0 },
        period: { type: PeriodSchema, required: true, immutable: true },
        owner: { type: mongoose.Schema.ObjectId, required: true, immutable: true },
    });
};
