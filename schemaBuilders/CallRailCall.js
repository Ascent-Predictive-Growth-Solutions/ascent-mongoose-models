module.exports = function (mongoose) {
    const TagSchema = new mongoose.Schema(
        {
            name: { type: String },
        },
        { _id: false, versionKey: false }
    );

    return new mongoose.Schema({
        trackerId: { type: String },
        isNewPatient: { type: Boolean },
        companyId: { type: String },
        source: { type: String },
        phoneNumber: { type: String },
        date: { type: Date },
        duration: { type: Number },
        tags: { type: [TagSchema], default: [] },
        rawNumber: { type: String },
        isAnswered: { type: Boolean },
    });
};
