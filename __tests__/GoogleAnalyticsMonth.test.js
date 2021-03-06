const mongoose = require("mongoose");
const models = require("../index")(mongoose);

describe("Google Analytics Month", () => {
    it("should provide expected defaults", async () => {
        const month = new models.GoogleAnalyticsMonth();
        expect(month.toObject()).toEqual({
            _id: expect.any(mongoose.Types.ObjectId),
            date: expect.toBeDate(),
            newUsers: 0,
            totalUsers: 0,
        });

        try {
            await month.validate();
        } catch (e) {
            expect(e.errors).toContainAllKeys(["period", "owner"]);
        }
    });
});
