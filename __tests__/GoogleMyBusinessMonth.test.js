const mongoose = require("mongoose");
const models = require("../index")(mongoose);

describe("google my business month", () => {
    it("should provide defaults", async () => {
        const month = new models.GoogleMyBusinessMonth({});
        expect(month.toObject()).toEqual({
            _id: expect.any(mongoose.Types.ObjectId),
            date: expect.toBeDate(),
            calls: 0,
            websiteActions: 0,
        });

        try {
            await month.validate();
        } catch (e) {
            expect(e.errors).toContainAllKeys(["period", "owner"]);
        }
    });
});
