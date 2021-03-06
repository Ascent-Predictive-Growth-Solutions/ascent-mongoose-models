const mongoose = require("mongoose");
const models = require("../index")(mongoose);

describe("Lead", () => {
    it("should provide expected defaults", async () => {
        const lead = new models.Lead();

        expect(lead.toObject()).toEqual({
            _id: expect.any(mongoose.Types.ObjectId),
            date: expect.toBeDate(),
            practiceName: "",
            url: "",
            placeId: "",
            state: "",
            city: "",
            zipCode: "",
            streetAddress: "",
            practiceType: "",
            source: "",
            userName: "",
            email: "",
            online: [],
            growth: [],
            profit: [],
            profitPaymentType: "",
        });

        await lead.validate();
    });
});
