module.exports = function (mongoose, { PeriodSchema }) {
    return new mongoose.Schema({
        _id: { type: mongoose.Schema.ObjectId, auto: true, immutable: true },
        date: { type: Date, default: new Date(), immutable: true },
        owner: { type: mongoose.Schema.ObjectId, required: true, immutable: true },
        period: { type: PeriodSchema, required: true, immutable: true },
        calls: { type: Number, default: 0 },
        websiteActions: { type: Number, default: 0 },
    });
};
