module.exports = function (mongoose) {
    return new mongoose.Schema({
        trackerId: { type: String },
        isNewPatient: { type: Boolean },
        companyId: { type: String },
        source: { type: String },
        phoneNumber: { type: String },
        date: { type: Date },
    });
};
