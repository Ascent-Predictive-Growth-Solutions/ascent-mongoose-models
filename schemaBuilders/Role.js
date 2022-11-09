module.exports = function (mongoose) {
    return new mongoose.Schema({
        _id: { type: mongoose.Schema.ObjectId, auto: true },
        name: { type: String, required: true },
        code: { type: String, required: true },
    });
};
