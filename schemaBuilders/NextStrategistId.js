module.exports = function (mongoose) {
    return new mongoose.Schema({
        nextStrategistId: { type: mongoose.Schema.ObjectId, required: true },
    });
};
