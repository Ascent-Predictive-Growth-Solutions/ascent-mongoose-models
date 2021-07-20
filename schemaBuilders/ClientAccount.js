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
        strategist: { type: mongoose.Types.ObjectId, required: true },
        accountName: { type: String, required: true },
        websiteAddress: { type: String, default: "" },
        streetAddress: { type: String, default: "" },
        city: { type: String, default: "" },
        state: { type: String, default: "" },
        zipCode: { type: String, default: "" },
        primaryContact: { type: ContactSchema },
        contacts: { type: [ContactSchema], default: [] },
        practices: { type: [mongoose.Types.ObjectId], default: [] },
    });
};
