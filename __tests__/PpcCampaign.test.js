const mongoose = require("mongoose");
const models = require("../index")(mongoose);
describe("Ppc campaign", () => {
    it("should provide defaults and throw on required fields", async () => {
        const campaign = new models.PPCCampaign();

        expect(campaign.toObject()).toEqual({
            _id: expect.any(mongoose.Types.ObjectId),
            date: expect.toBeDate(),
            isActive: true,
            goals: {
                newPatients: 0,
            },
            doesExistInGoogle: true,
            linkedCallRailTrackers: [],
        });

        try {
            await campaign.validate();
        } catch (e) {
            expect(e.errors).toContainAllKeys([
                "linkedGoogleAnalyticsUrl",
                "linkedGoogleAnalyticsViewId",
                "campaignId",
                "name",
            ]);
        }
    });
});
