const mongoose = require("mongoose");
const models = require("../index")(mongoose);

describe("Kpi Month", () => {
    it("should provide defaults", (done) => {
        const owner = mongoose.Types.ObjectId();
        const kpiMonth = new models.KpiMonth({
            owner,
            period: {
                day: 0,
                month: 0,
                year: 2020,
                ordinal: 20200000,
            },
        });

        expect(kpiMonth.toObject()).toEqual({
            _id: expect.any(mongoose.Types.ObjectId),
            date: expect.toBeDate(),
            revenue: 0,
            visits: 0,
            newPatients: 0,
            referrals: 0,
            period: {
                day: 0,
                month: 0,
                year: 2020,
                ordinal: 20200000,
            },
            owner,
        });

        kpiMonth.validate((err) => {
            expect(err).toBeNull();
            done();
        });
    });
});
