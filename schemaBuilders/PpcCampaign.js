module.exports = function (mongoose) {
    return new mongoose.Schema({
        _id: { type: mongoose.Schema.ObjectId, auto: true },
        date: { type: Date, default: new Date() },
        name: { type: String, required: true },
        campaignId: { type: String, required: true },
        isActive: { type: Boolean, default: true },
        doesExistInGoogle: { type: Boolean, default: true },
        linkedGoogleAnalyticsViewId: { type: String, required: true },
        linkedGoogleAnalyticsUrl: { type: String, required: true },
        goals: {
            newPatients: { type: Number, default: 0 },
        },
        linkedCallRailTrackers: [],
    });
};
