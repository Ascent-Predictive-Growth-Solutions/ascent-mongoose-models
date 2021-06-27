module.exports = function (mongoose, { PeriodSchema }) {
    const PpcCampaignSchema = new mongoose.Schema(
        {
            customerId: {type: String, required: true},
            customerName: {type: String, required: true},
            campaignName: { type: String, required: true },
            campaignId: { type: String, required: true },
            isActive: { type: Boolean, default: true },
            goals: {
                newPatients: { type: Number, default: 0 },
            },
            linkedCallRailTrackers: {type: Array, default: []},
        },
        { _id: false }
    );

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

        googleMyBusinessAccountId: {type: String, default: ""},
        googleAnalyticsViewId: {type: String, default: ""},
        googleSearchConsoleUrl: {type: String, default: ""},

        linkedPpcCampaigns: [mongoose.Schema.ObjectId],
        linkedDirectMailCampaigns: [mongoose.Schema.ObjectId],

        ppcCampaigns: {type: [PpcCampaignSchema], default: []},

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

