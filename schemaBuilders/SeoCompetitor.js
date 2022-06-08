module.exports = function (mongoose, { RankingFromGoogleSearchSchema }) {
    return new mongoose.Schema({
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
};
