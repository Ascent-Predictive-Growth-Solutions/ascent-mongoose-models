module.exports = function (mongoose, { PeriodSchema }) {
    return new mongoose.Schema({
        _id: { type: mongoose.Schema.ObjectId, auto: true, immutable: true },
        date: { type: Date, default: new Date(), immutable: true },
        revenue: { type: Number, default: 0 },
        visits: { type: Number, default: 0 },
        newPatients: { type: Number, default: 0 },
        referrals: { type: Number, default: 0 },
        owner: { type: mongoose.Schema.ObjectId, required: true, immutable: true },
        period: { type: PeriodSchema, required: true, immutable: true },
    });
};
