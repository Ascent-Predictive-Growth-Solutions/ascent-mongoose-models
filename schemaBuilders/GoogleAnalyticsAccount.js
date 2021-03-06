module.exports = function (mongoose) {
    return new mongoose.Schema({
        _id: { type: mongoose.Schema.ObjectId, auto: true, immutable: true },
        date: { type: Date, default: new Date(), immutable: true },
        viewId: { type: String, immutable: true, required: true },
        gaUrl: { type: String, default: "" },
        name: { type: String, default: "" },
        gaAccountId: { type: String, default: "" },
        gaWebPropertyId: { type: String, default: "" },
        isActive: { type: Boolean, default: true },
    });
};
