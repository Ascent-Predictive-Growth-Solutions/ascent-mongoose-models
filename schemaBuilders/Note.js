module.exports = function (mongoose) {
    return new mongoose.Schema({
        _id: { type: mongoose.Schema.ObjectId, auto: true, immutable: true },
        content: { type: String, default: "", immutable: true },
        title: { type: String, default: "", immutable: true },
        date: { type: Date, default: new Date(), immutable: true },
        userName: { type: String, required: true },
        userId: { type: mongoose.Schema.Types.ObjectId, required: true, immutable: true },
        owner: { type: mongoose.Schema.Types.ObjectId, required: true, immutable: true },
    });
};
