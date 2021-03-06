const mongoose = require("mongoose");
const models = require("../index")(mongoose);

describe("Google Search Console Account", () => {
    it("should provide defaults", (done) => {
        const account = new models.GoogleSearchConsoleAccount();
        expect(account._id).toBeInstanceOf(mongoose.Types.ObjectId);
        expect(account.date).toBeDate();
        expect(account.searchConsoleUrl).toBeEmptyString();
        expect(account.isActive).toBeTrue();

        console.log(account);

        expect(account.toObject()).toContainAllKeys([
            "_id",
            "date",
            "searchConsoleUrl",
            "isActive",
        ]);

        account.validate((err) => {
            expect(err).toBeNull();
            done();
        });
    });
});
