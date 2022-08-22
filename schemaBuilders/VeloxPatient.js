module.exports = function (mongoose) {
    return new mongoose.Schema(
        {
            id: { type: Number, required: true },
            ascentPracticeId: { type: mongoose.Schema.ObjectId, required: true },
        },
        { strict: false }
    );
};
