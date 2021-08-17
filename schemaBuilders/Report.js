module.exports = function (mongoose) {
    const SEOKeywordSchema = new mongoose.Schema(
        {
            googleSearchTerm: { type: String, required: true },
            rank: { type: Number, required: true },
        },
        { _id: false }
    );

    const SEOCompetitorsSchema = new mongoose.Schema(
        {
            practiceName: { type: String, required: true },
            averageRank: { type: Number, default: 0 },
            overallRank: { type: Number, default: 0 },
            rankingsFromGoogleSearches: { type: [SEOKeywordSchema], required: false },
            placeId: { type: String, required: true },
        },
        { _id: false }
    );

    const PPCKeywordSchema = new mongoose.Schema(
        {
            keyword: { type: String, required: true },
            cpc: { type: Number, required: true },
        },
        { _id: false }
    );

    const ReviewCompetitorSchema = new mongoose.Schema(
        {
            practiceName: { type: String, default: "" },
            rating: { type: Number, default: 0 },
            numReviews: { type: Number, default: 0 },
            placeId: { type: String, required: true },
        },
        { _id: false }
    );

    return new mongoose.Schema({
        _id: { type: mongoose.Schema.ObjectId, auto: true },
        owner: { type: mongoose.Schema.Types.ObjectId, required: true },
        date: { type: Date, default: new Date() },
        data: {
            seo: {
                competitors: { type: [SEOCompetitorsSchema], default: [] },
                averageRank: { type: Number },
                overallRank: { type: Number },
                rankingsFromGoogleSearches: { type: [SEOKeywordSchema], default: [] },
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
};
