const mongoose = require("mongoose");
const Period = require("../schemaBuilders/Period")(mongoose);
const Model = mongoose.model("period", Period);

describe("Period", () => {
    it("should fail validation when lacking required fields", (done) => {
        const period = new Model();

        period.validate((err) => {
            expect(err.errors.day).toBeInstanceOf(mongoose.Error.ValidatorError);
            expect(err.errors.year).toBeInstanceOf(mongoose.Error.ValidatorError);
            expect(err.errors.ordinal).toBeInstanceOf(mongoose.Error.ValidatorError);
            expect(err.errors.month).toBeInstanceOf(mongoose.Error.ValidatorError);
            done();
        });
    });

    it("should pass validation when containing fields", (done) => {
        const period = new Model({
            day: 0,
            month: 0,
            year: 2020,
            ordinal: 20200000,
        });
        period.validate((errors) => {
            expect(errors).toBeNull();
            done();
        });
    });
});
