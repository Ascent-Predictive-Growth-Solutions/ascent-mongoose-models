module.exports = function (mongoose, { RankingFromGoogleSearchSchema, SeoCompetitorsSchema }) {
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
        competitors: [SeoCompetitorsSchema],
        rankingsFromGoogleSearchTerms: [RankingFromGoogleSearchSchema],
    });
};
