module.exports = function (
    mongoose,
    { PeriodSchema, RankingFromGoogleSearchSchema, SeoCompetitorSchema }
) {
    return new mongoose.Schema({
        _id: { type: mongoose.Schema.ObjectId, auto: true, immutable: true },
        googleMyBusinessAccountId: { type: String, required: true },
        date: { type: Date, default: new Date() },
        period: { type: PeriodSchema, required: true },
        competitors: { type: [SeoCompetitorSchema], default: [] },
        averageRank: { type: Number },
        overallRank: { type: Number },
        rankingsFromGoogleSearches: {
            type: [RankingFromGoogleSearchSchema],
            default: [],
        },
        numCompetitors: { type: Number },
    });
};
