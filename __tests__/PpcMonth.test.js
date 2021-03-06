const mongoose = require("mongoose");
const models = require("../index")(mongoose);
describe("Ppc month", () => {
    it("should provide defaults and throw on required fields", async () => {
        const month = new models.PpcMonth();

        expect(month.toObject()).toEqual({
            _id: expect.any(mongoose.Types.ObjectId),
            date: expect.toBeDate(),
            clicks: 0,
            impressions: 0,
            adSpend: 0,
        });

        try {
            await month.validate();
        } catch (e) {
            expect(e.errors).toContainAllKeys(["owner", "period"]);
        }
    });
});
