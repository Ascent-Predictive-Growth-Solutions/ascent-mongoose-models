const mongoose = require("mongoose");
const models = require("../index")(mongoose);

describe("Ppc Day Schema ", () => {
    it("should provide defaults", async () => {
        const day = new models.PpcDay();

        expect(day.toObject()).toEqual({
            _id: expect.any(mongoose.Types.ObjectId),
            clicks: 0,
            impressions: 0,
            adSpend: 0,
        });

        try {
            await day.validate();
        } catch (e) {
            expect(e.errors).toContainAllKeys(["period", "owner"]);
        }
    });
});
