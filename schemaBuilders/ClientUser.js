module.exports = function (mongoose) {
    return new mongoose.Schema({
        _id: { type: mongoose.Types.ObjectId, auto: true },
        email: { type: String, required: true },
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        password: { type: String, required: true },
        clientAccountId: { type: mongoose.Types.ObjectId },
        type: {
            type: String,
            enum: ["EMPLOYEE", "CLIENT"],
            required: true,
            default: "CLIENT",
        },
        mostRecentLogin: { type: Date }
    });
};
