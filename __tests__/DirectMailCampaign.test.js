const mongoose = require("mongoose");
const models = require("../index")(mongoose);

describe("Direct Mail Campaign", () => {
    it("should provide defaults", (done) => {
        const campaign = new models.DirectMailCampaign({
            owner: mongoose.Types.ObjectId(),
        });

        expect(campaign.toObject()).toEqual({
            _id: expect.any(mongoose.Types.ObjectId),
            date: expect.toBeDate(),
            active: true,
            goals: expect.objectContaining({
                newPatients: 0,
            }),
            mailingPeriods: [],
            name: "",
            linkedCallRailTrackers: [],
            owner: expect.any(mongoose.Types.ObjectId),
        });

        campaign.validate((err) => {
            expect(err).toBeNull();
            done();
        });
    });
});
