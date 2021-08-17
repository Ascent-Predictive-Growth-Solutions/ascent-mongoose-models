module.exports = function (mongoose) {
    const ProductSchema = new mongoose.Schema(
        {
            name: { type: String, default: "" },
            price: { type: Number, default: 0 },
        },
        { _id: false }
    );

    return new mongoose.Schema({
        _id: { type: mongoose.Schema.ObjectId, auto: true },
        date: { type: Date, default: new Date() },
        practiceName: { type: String, default: "" },
        url: { type: String, default: "" },
        placeId: { type: String, default: "" },
        state: { type: String, default: "" },
        city: { type: String, default: "" },
        zipCode: { type: String, default: "" },
        streetAddress: { type: String, default: "" },
        practiceType: { type: String, default: "" },
        source: { type: String, default: "" },
        userName: { type: String, default: "" },
        email: { type: String, default: "" },
        phone: { type: String, default: "" },
        sessionLink: { type: String, default: "" },
        online: { type: [ProductSchema], default: [] },
        growth: { type: [ProductSchema], default: [] },
        profit: { type: [ProductSchema], default: [] },
        profitPaymentType: { type: String, default: "" },
    });
};
