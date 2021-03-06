const mongoose = require("mongoose");
const models = require("../index")(mongoose);

describe("Google My Business Account", () => {
    it("should provide defaults", async () => {
        const account = new models.GoogleMyBusinessAccount();

        expect(account.toObject()).toMatchObject(
            expect.objectContaining({
                _id: expect.any(mongoose.Types.ObjectId),
                date: expect.toBeDate(),
                type: "dentist",
                gmbAccountId: "",
                name: "",
                gmbUrl: "",
                placeId: "",
                city: "",
                zipCode: "",
                streetAddress: "",
                isActive: true,
            })
        );

        try {
            await account.validate();
        } catch (e) {
            expect(e.errors).toContainAllKeys(["viewId"]);
        }
    });
});
