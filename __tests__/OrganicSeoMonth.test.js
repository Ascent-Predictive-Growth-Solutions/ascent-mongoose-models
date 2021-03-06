const mongoose = require("mongoose");
const models = require("../index")(mongoose);

describe("Organic Seo month", () => {
    it("should provide defaults", async () => {
        const month = new models.OrganicSeoMonth();

        expect(month.toObject()).toEqual(
            expect.objectContaining({
                _id: expect.any(mongoose.Types.ObjectId),
                date: expect.toBeDate(),
                keywords: [],
            })
        );

        try {
            await month.validate();
        } catch (e) {
            expect(e.errors).toContainAllKeys(["period", "owner"]);
        }
    });
});
