module.exports = function (mongoose, { PeriodSchema }) {
    return new mongoose.Schema({
        _id: { type: mongoose.Schema.ObjectId, auto: true },
        date: { type: Date, default: new Date() },

        practiceName: { type: String, default: "" },
        active: { type: Boolean, default: false },
        type: { type: String, default: "" },
        perPatientValue: { type: Number, default: 650 },
        details: { type: String, default: "" },

        strategist: { type: String, default: "" },
        startDate: { type: Date, default: new Date() },

        primaryContact: {
            name: { type: String, default: "" },
            label: { type: String, default: "" },
            phone: { type: String, default: "" },
            email: { type: String, default: "" },
        },

        linkedAccounts: {
            googleMyBusiness: { type: mongoose.Schema.ObjectId },
            googleAnalytics: { type: mongoose.Schema.ObjectId },
            googleSearchConsole: { type: mongoose.Schema.ObjectId },
        },

        linkedPpcCampaigns: [mongoose.Schema.ObjectId],
        linkedDirectMailCampaigns: [mongoose.Schema.ObjectId],

        reviewsReport: {
            dateLastUpdated: { type: Date },
            competitors: [
                {
                    practiceName: { type: String },
                    rating: { type: Number },
                    numReviews: { type: Number },
                    placeId: { type: String },
                },
            ],
            averageRating: { type: Number, default: 0 },
            numberOfReviews: { type: Number, default: 0 },
            months: [
                {
                    reviewsGenerated: { type: Number },
                    averageRating: { type: Number },
                    period: { type: PeriodSchema },
                    totalReviews: { type: Number },
                },
            ],
        },
    });
};
