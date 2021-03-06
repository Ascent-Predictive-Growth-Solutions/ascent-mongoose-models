const mongoose = require("mongoose");
const models = require("../index")(mongoose);
describe("Contact", () => {
    it("should provide defaults", async () => {
        const contact = new models.Contact();

        try {
            await contact.validate();
        } catch (e) {
            expect(e.errors).toContainAllKeys(["email", "phone", "owner", "contactName"]);
        }
    });
});
