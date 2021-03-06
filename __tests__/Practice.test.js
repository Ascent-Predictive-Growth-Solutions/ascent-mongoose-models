const mongoose = require("mongoose");
const models = require("../index")(mongoose);

describe("Practice", () => {
    it("should provide defaults", (done) => {
        const practice = new models.Practice({});

        expect(practice.toObject()).toEqual({
            _id: expect.any(mongoose.Types.ObjectId),
            active: expect.toBeBoolean(),
            date: expect.toBeDate(),
            details: expect.toBeString(),
            linkedDirectMailCampaigns: [],
            linkedPpcCampaigns: [],
            perPatientValue: expect.toBeNumber(),
            practiceName: expect.toBeString(),
            primaryContact: expect.objectContaining({
                email: "",
                label: "",
                name: "",
                phone: "",
            }),
            reviewsReport: expect.objectContaining({
                averageRating: expect.toBeNumber(),
                competitors: expect.toBeArray(),
                months: expect.toBeArray(),
                numberOfReviews: expect.toBeNumber(),
            }),
            startDate: expect.toBeDate(),
            strategist: expect.toBeString(),
            type: expect.toBeString(),
        });

        practice.validate((err) => {
            expect(err).toBeNull();
            done();
        });
    });
});
