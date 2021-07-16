module.exports = function (mongoose, { PeriodSchema }) {
    const RankingFromGoogleSearchSchema = new mongoose.Schema({
        _id: { type: mongoose.Schema.ObjectId, auto: true },
        googleSearchTerm: { type: String, required: true },
        rank: { type: Number, required: true },
    });

    const SeoCompetitorsSchema = new mongoose.Schema({
        _id: { type: mongoose.Schema.ObjectId, auto: true },
        practiceName: { type: String, required: true },
        averageRank: { type: Number, default: 0 },
        overallRank: { type: Number, default: 0 },
        rankingsFromGoogleSearches: {
            type: [RankingFromGoogleSearchSchema],
            required: false,
        },
        placeId: { type: String, required: true },
    });

    const SeoMonthSchema = new mongoose.Schema({
        _id: { type: mongoose.Schema.ObjectId, auto: true, immutable: true },
        googleMyBusinessAccountId: {type: String, required: true},
        date: { type: Date, default: new Date(), immutable: true },
        period: { type: PeriodSchema, required: true, immutable: true },
        competitors: { type: [SeoCompetitorsSchema], default: [] },
        averageRank: { type: Number },
        overallRank: { type: Number },
        rankingsFromGoogleSearches: {
            type: [RankingFromGoogleSearchSchema],
            default: [],
        },
        numCompetitors: { type: Number },
    });
    return SeoMonthSchema;
};
