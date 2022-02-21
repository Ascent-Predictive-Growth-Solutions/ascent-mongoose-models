module.exports = function (mongoose) {
    const SubCampaignSchema = new mongoose.Schema({
        customerId: { type: String, required: true },
        campaignId: { type: String, required: true },
        campaignName: { type: String, required: true },
        customerName: { type: String, required: true },
    });

    const TaskSchema = new mongoose.Schema({
        taskKey: {
            type: String,
            enum: [
                "domain",
                "website",
                "googleAds",
                "seo",
                "socialMedia",
                "brand",
                "googleMyBusiness",
            ],
            required: true,
        },
        completed: { type: Boolean, default: false, required: true },
        formId: { type: mongoose.Schema.ObjectId },
        parentProduct: { type: String, required: true },
        taskName: { type: String, required: true },
    });

    const PpcCampaignSchema = new mongoose.Schema(
        {
            customerId: { type: String, required: true },
            customerName: { type: String, required: true },
            campaignName: { type: String, required: true },
            campaignId: { type: String, required: true },
            isActive: { type: Boolean, default: true },
            goals: {
                newPatients: { type: Number, default: 0 },
            },
            linkedCallRailTrackers: { type: Array, default: [] },
            subCampaigns: { type: [SubCampaignSchema], default: [] },
            recurlyCampaignId: { type: String },
        },
        { _id: false }
    );

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

        tasks: { type: [TaskSchema], default: [] },

        placeId: { type: String, default: "" },
        googleMyBusinessAccountId: { type: String, default: "" },
        googleAnalyticsViewId: { type: String, default: "" },
        googleSearchConsoleUrl: { type: String, default: "" },
        linkedPpcCampaigns: { type: [mongoose.Schema.ObjectId] },
        linkedDirectMailCampaigns: [mongoose.Schema.ObjectId],
        ppcCampaigns: { type: [PpcCampaignSchema], default: [] },
        doctors: { type: [String], default: [] },
        recurlyAccountCode: { type: String, default: "" },
        contacts: { type: [ContactSchema], default: [] },
        callRailCompanyId: { type: String, default: "" },
        veloxPracticeId: { type: String, default: "" },
    });
};
