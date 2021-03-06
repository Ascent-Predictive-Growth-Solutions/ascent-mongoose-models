module.exports = function (mongoose) {
    return new mongoose.Schema({
        _id: { type: mongoose.Schema.ObjectId, auto: true },
        owner: { type: mongoose.Schema.Types.ObjectId, required: true },
        date: { type: Date, default: new Date() },
        wantsCall: Boolean,
        hasCommunicationSoftware: Boolean,
        lastWebsiteUpdate: {
            value: Number,
            label: String,
        },
        marketingBudget: {
            value: Number,
            label: String,
        },
        phoneNumber: String,
        userName: String,
        email: String,
        practiceName: String,
        zipCode: String,
    });
};
