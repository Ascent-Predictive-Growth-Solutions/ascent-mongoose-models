module.exports = function (mongoose) {
    return new mongoose.Schema({
        _id: { type: mongoose.Schema.ObjectId, auto: true, immutable: true },
        date: { type: Date, default: new Date(), immutable: true },
        searchConsoleUrl: { type: String, default: "" },
        isActive: { type: Boolean, default: true },
    });
};
