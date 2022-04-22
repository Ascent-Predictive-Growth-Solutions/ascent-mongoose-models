module.exports = function (mongoose) {
    return new mongoose.Schema(
        {
            date: { type: Date, default: new Date() },
        },
        { strict: false }
    );
};
