const mongoose = require("mongoose");
const models = require("../index")(mongoose);

describe("Call Rail Day", () => {
    it("should provide defaults", async () => {
        const day = new models.CallRailDay();

        expect(day.toObject()).toEqual({
            _id: expect.any(mongoose.Types.ObjectId),
            calls: 0,
            newPatients: 0,
        });

        try {
            await day.validate();
        } catch (e) {
            expect(e.errors).toContainAllKeys(["trackerId", "period"]);
        }
    });
});
