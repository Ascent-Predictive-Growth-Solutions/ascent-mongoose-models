const buildModels = require("../index");
const mongoose = require("mongoose");

const models = buildModels(mongoose);

describe("User", () => {
    it("should throw errors", async () => {
        const user = new models.User({});

        try {
            await user.validate();
        } catch (e) {
            expect(e.errors).toContainAllKeys(["email", "name", "password", "type"]);
        }
    });

    it("should validate User", async () => {
        const user = new models.User({
            email: "jon@ascentpgs.com",
            name: "jon doe",
            password: "12345",
            type: "EMPLOYEE",
        });
        await user.validate();
    });
});
