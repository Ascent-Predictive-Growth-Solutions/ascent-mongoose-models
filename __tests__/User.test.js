const buildModels = require("../index");
const mongoose = require("mongoose");

const models = buildModels(mongoose);

describe("User", () => {
    it("should throw errors", async () => {
        const user = new models.User({});

        try {
            await user.validate();
        } catch (e) {
            expect(e.errors).toContainAllKeys(["email", "name", "password"]);
        }
    });

    it("should validate User", async () => {
        const user = new models.User({
            email: "jon@ascentpgs.com",
            name: "jon doe",
            password: "12345",
            positions: ["STRATEGIST", "ADMIN"],
        });
        await user.validate();
    });

    it("should add defaults", () => {
        const user = new models.User({});

        expect(user.toObject()).toEqual({
            _id: expect.any(mongoose.Types.ObjectId),
            calendlyLink: "",
            imageUrl: "",
            positions: [],
        });
    });
});
