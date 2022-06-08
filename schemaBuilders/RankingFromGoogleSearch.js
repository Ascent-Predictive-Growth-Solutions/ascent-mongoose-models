module.exports = function (mongoose) {
    return new mongoose.Schema({
        _id: { type: mongoose.Schema.ObjectId, auto: true },
        googleSearchTerm: { type: String, required: true },
        rank: { type: Number, required: true },
    });
};
