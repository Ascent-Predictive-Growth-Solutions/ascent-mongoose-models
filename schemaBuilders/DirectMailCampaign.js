module.exports = function (mongoose, { PeriodSchema }) {
    const MailingPeriodSchema = new mongoose.Schema({
        _id: { type: mongoose.Schema.ObjectId, auto: true },
        startPeriod: { type: PeriodSchema, required: true },
        endPeriod: { type: PeriodSchema, required: true },
        numberOfMailers: { type: Number, default: 0 },
        budget: { type: Number, default: 0 },
    });

    return new mongoose.Schema({
        _id: { type: mongoose.Schema.ObjectId, auto: true },
        date: { type: Date, default: new Date() },
        name: { type: String, required: false, default: "" },
        active: { type: Boolean, default: true },

        goals: {
            newPatients: { type: Number, default: 0 },
        },
        mailingPeriods: { type: [MailingPeriodSchema], default: [] },
        linkedCallRailTrackers: [],
        owner: { type: mongoose.Schema.ObjectId, required: true, immutable: true },
        report: { type: Object, default: {} },
    });
};
