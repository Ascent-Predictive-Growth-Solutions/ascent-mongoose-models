const rankingFromGoogleSearch = require("./rankingFromGoogleSearch");

module.exports = {
    _id: false,
    practiceName: { type: String, required: true },
    averageRank: { type: Number, default: 0 },
    overallRank: { type: Number, default: 0 },
    rankingsFromGoogleSearches: {
        type: [rankingFromGoogleSearch],
        required: false,
    },
    placeId: { type: String, required: true },
};
