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
        date: { type: Date, required: true },
        rank: { type: Number, required: true },
    });
};
