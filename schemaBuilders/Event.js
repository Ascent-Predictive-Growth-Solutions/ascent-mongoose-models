module.exports = function(mongoose) {
    return new mongoose.Schema({
        accountId: { type: String, required: true, immutable: true },
        userId: { type: String, required: true, immutable: true },
        userType: { type: String, required: true, immutable: true },
        timestamp: { type: Date, required: true, immutable: true },
        eventType: { type: String, required: true, immutable: true },
        deviceType: { type: String, required: true, immutable: true },
    });
}
