const subDocumentModel = require("./subDocumentModel");

module.exports = function (mongoose, { PeriodSchema }) {
    return new mongoose.Schema({
        _id: { type: mongoose.Schema.ObjectId, auto: true, immutable: true },
        googleMyBusinessAccountId: { type: String, required: true },
        date: { type: Date, default: new Date() },
        period: { type: PeriodSchema, required: true },
        competitors: { type: [subDocumentModel.seoCompetitor], required: false },
        averageRank: { type: Number },
        overallRank: { type: Number },
        rankingsFromGoogleSearches: {
            type: [subDocumentModel.rankingFromGoogleSearch],
            required: false,
        },
        numCompetitors: { type: Number },
    });
};
