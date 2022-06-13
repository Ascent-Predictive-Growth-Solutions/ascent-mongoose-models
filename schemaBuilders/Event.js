module.exports = function(mongoose) {
    return new mongoose.Schema({
        insightReportingUserId: { type: String, required: true, immutable: true },
        userType: {type: String, required: true, immutable: true },
        timestamp: { type: Date, required: true, immutable: true },
        eventType: {type: String, required: true, immutable: true },
    });
}
