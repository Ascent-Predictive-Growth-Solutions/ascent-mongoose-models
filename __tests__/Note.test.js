const mongoose = require("mongoose");
const models = require("../index")(mongoose);
describe("Note", () => {
    it("should provide defaults", async () => {
        const note = new models.Note();

        expect(note).toMatchObject(
            expect.objectContaining({
                _id: expect.any(mongoose.Types.ObjectId),
                content: expect.toBeString(),
                title: expect.toBeString(),
                date: expect.toBeDate(),
            })
        );

        try {
            await note.validate();
        } catch (e) {
            expect(e.errors).toContainAllKeys(["owner", "userId", "userName"]);
        }
    });
});
