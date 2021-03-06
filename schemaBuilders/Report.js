module.exports = function (mongoose) {
    const SEOKeywordSchema = new mongoose.Schema({
        _id: { type: mongoose.Schema.ObjectId, auto: true },
        __v: { type: Number, default: 0 },
        keyword: { type: String, required: true },
        rank: { type: Number, required: true },
    });

    const SEOCompetitorsSchema = new mongoose.Schema({
        _id: { type: mongoose.Schema.ObjectId, auto: true },
        practiceName: { type: String, required: true },
        averageRank: { type: Number, default: 0 },
        overallRank: { type: Number, default: 0 },
        keywords: { type: [SEOKeywordSchema], required: false },
        placeId: { type: String, required: true },
        __v: { type: Number, default: 0 },
    });

    const PPCKeywordSchema = new mongoose.Schema({
        _id: { type: mongoose.Schema.ObjectId, auto: true },
        __v: { type: Number, default: 0 },
        keyword: { type: String, required: true },
        cpc: { type: Number, required: true },
    });

    const ReviewCompetitorSchema = new mongoose.Schema({
        _id: { type: mongoose.Schema.ObjectId, auto: true },
        practiceName: { type: String, default: "" },
        rating: { type: Number, default: 0 },
        numReviews: { type: Number, default: 0 },
        placeId: { type: String, required: true },
    });

    const ReportSchema = new mongoose.Schema({
        _id: { type: mongoose.Schema.ObjectId, auto: true },
        owner: { type: mongoose.Schema.Types.ObjectId, required: true },
        date: { type: Date, default: new Date() },
        data: {
            seo: {
                competitors: { type: [SEOCompetitorsSchema], default: [] },
                averageRank: { type: Number },
                overallRank: { type: Number },
                rankings: { type: [SEOKeywordSchema], default: [] },
                numCompetitors: { type: Number },
            },
            reviews: {
                rating: { type: Number },
                numReviews: { type: Number },
                topFiveAvgRating: { type: Number },
                topFiveAvgNumReviews: { type: Number },
                competitors: { type: [ReviewCompetitorSchema], default: [] },
            },
            ppc: {
                keywords: [PPCKeywordSchema],
            },
            __v: { type: Number, default: 0 },
        },
    });

    return ReportSchema;
};
