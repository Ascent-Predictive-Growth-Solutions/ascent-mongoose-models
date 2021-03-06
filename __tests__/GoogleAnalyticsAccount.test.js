const mongoose = require("mongoose");
const models = require("../index")(mongoose);

describe("Google Analytics Account", () => {
    it("should provide defaults", async () => {
        const account = new models.GoogleAnalyticsAccount();

        expect(account).toMatchObject(
            expect.objectContaining({
                _id: expect.any(mongoose.Types.ObjectId),
                date: expect.toBeDate(),
                gaUrl: expect.toBeString(),
                name: expect.toBeString(),
                gaAccountId: expect.toBeString(),
                gaWebPropertyId: expect.toBeString(),
                isActive: expect.toBeBoolean(),
            })
        );

        try {
            await account.validate();
        } catch (e) {
            expect(e.errors).toContainAllKeys(["viewId"]);
        }
    });
});
