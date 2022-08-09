module.exports = function (mongoose) {
    return new mongoose.Schema({
        firstVisit: { type: Date, required: true },
        name: { type: String, required: true },
        source: { type: String, required: true },
        veloxPatientId: { type: String, required: true },
        phoneNumber: { type: String, required: true },
        practiceId: { type: mongoose.Schema.ObjectId, required: true },
    });
};
