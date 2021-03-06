module.exports = function (mongoose) {
    return new mongoose.Schema({
        _id: { type: mongoose.Schema.ObjectId, auto: true, immutable: true },
        date: { type: Date, default: new Date(), immutable: true },
        type: {
            type: String,
            enum: ["dentist", "orthodontist", "pediatricDentist"],
            default: "dentist",
        },
        gmbAccountId: { type: String, default: "" },
        name: { type: String, default: "" },
        gmbUrl: { type: String, default: "" },
        placeId: { type: String, default: "" },
        state: { type: String, default: "" },
        city: { type: String, default: "" },
        zipCode: { type: String, default: "" },
        streetAddress: { type: String, default: "" },
        isActive: { type: Boolean, default: true },
    });
};
