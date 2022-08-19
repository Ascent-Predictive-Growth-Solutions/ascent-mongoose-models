module.exports = function (mongoose) {
    return new mongoose.Schema({ id: { type: Number, required: true } }, { strict: false });
};
