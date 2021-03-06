module.exports = function (mongoose, { PeriodSchema }) {
    const OrganicSEOKeywordSchema = new mongoose.Schema({
        _id: { type: mongoose.Schema.ObjectId, auto: true },
        keyword: { type: String, required: true },
        rank: { type: Number, required: true },
        impressions: { type: Number, required: true },
        clicks: { type: Number, required: true },
    });
    return new mongoose.Schema({
        _id: { type: mongoose.Schema.ObjectId, auto: true, immutable: true },
        date: { type: Date, default: new Date(), immutable: true },
        keywords: { type: [OrganicSEOKeywordSchema], default: [], immutable: true },
        owner: { type: mongoose.Schema.ObjectId, required: true, immutable: true },
        period: { type: PeriodSchema, required: true, immutable: true },
    });
};
