module.exports = function (mongoose) {
    const TierSchema = new mongoose.Schema({
        costPerPatient: { type: Number, required: true },
        newPatients: { type: Number, required: true },
    });

    return new mongoose.Schema({
        totalNewPatients: { type: Number, required: true },
        totalPaid: { type: Number, required: true },
        date: { type: Date, required: true },
        tiers: { type: [TierSchema], default: [] },
    });
};
