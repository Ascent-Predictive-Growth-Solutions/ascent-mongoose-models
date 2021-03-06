const mongoose = require("mongoose");
const models = require("../index")(mongoose);

describe("Seo Month", () => {
    it("should provide defaults", async () => {
        const month = new models.SeoMonth();

        expect(month.toObject()).toEqual({
            _id: expect.any(mongoose.Types.ObjectId),
            date: expect.toBeDate(),
            competitors: [],
            rankingsFromGoogleSearches: [],
        });

        try {
            await month.validate();
        } catch (e) {
            expect(e.errors).toContainAllKeys(["owner", "period"]);
        }
    });
});
