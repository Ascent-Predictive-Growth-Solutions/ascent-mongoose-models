module.exports = function (mongoose) {
    const ContactSchema = new mongoose.Schema(
        {
            phone: { type: String, default: "" },
            email: { type: String, default: "" },
            name: { type: String, default: "" },
            label: { type: String, default: "" },
        },
        { _id: false }
    );

    return new mongoose.Schema({
        _id: { type: mongoose.Types.ObjectId, auto: true },
        date: { type: Date, required: true },
        strategist: { type: mongoose.Types.ObjectId },
        accountName: { type: String, required: true },
        websiteAddress: { type: String, default: "" },
        streetAddress: { type: String, default: "" },
        city: { type: String, default: "" },
        state: { type: String, default: "" },
        zipCode: { type: String, default: "" },
        primaryContact: { type: ContactSchema },
        contacts: { type: [ContactSchema], default: [] },
        practices: { type: [mongoose.Types.ObjectId], default: [] },
        mostRecentLogin: {
            timestamp: { type: Date },
            userId: { type: mongoose.Types.ObjectId },
        },
    });
};
