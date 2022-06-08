const subDocumentModel = require("./subDocumentModel");

module.exports = function (mongoose) {
    return new mongoose.Schema({
        _id: { type: mongoose.Schema.ObjectId, auto: true, immutable: true },
        googleMyBusinessAccountId: { type: String, required: true },
        searchAreaType: { type: String, enum: ["zipCode", "city"], required: true },
        keywordSetLabel: {
            type: String,
            enum: [
                "generalDentist",
                "cosmeticDentist",
                "pediatricDentist",
                "prosthodontist",
                "periodontist",
                "orthodontist",
                "oralSurgeon",
            ],
            required: true,
        },
        lastUpdate: { type: Date, required: true },
        rank: { type: Number, required: true },
        numberOfCompetitors: { type: Number, required: true },
        competitors: { type: [subDocumentModel.seoCompetitor], required: false },
        rankingsFromGoogleSearchTerms: {
            type: [subDocumentModel.rankingFromGoogleSearch],
            required: false,
        },
    });
};
