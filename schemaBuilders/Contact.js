module.exports = function (mongoose) {
    return new mongoose.Schema({
        _id: { type: mongoose.Schema.ObjectId, auto: true, immutable: true },
        date: { type: Date, default: new Date(), immutable: true },
        contactName: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String, required: true },
        label: { type: String, default: "" },
        details: { type: String, default: "" },
        owner: { type: mongoose.Schema.Types.ObjectId, required: true, immutable: true },
    });
};
