module.exports = function (mongoose) {
    const TableRowSchema = new mongoose.Schema(
        {
            lastMonth: { type: Number, required: true },
            average: { type: Number, required: true },
            sinceActive: { type: Number, required: true },
        },
        { _id: false, versionKey: false }
    );

    const RoiTableSchema = new mongoose.Schema(
        {
            newPatients: { type: TableRowSchema, required: true },
            revenueGenerated: { type: TableRowSchema, required: true },
            roiTotals: { type: TableRowSchema, required: true },
        },
        { _id: false, versionKey: false }
    );

    const MonthSchema = new mongoose.Schema(
        {
            date: { type: Date, required: true },
            revenue: { type: Number, required: true },
            visits: { type: Number, required: true },
            newPatients: { type: Number, required: true },
        },
        { _id: false, versionKey: false }
    );

    const YearSchema = new mongoose.Schema(
        {
            yearName: { type: Number, required: true },
            totals: {
                revenue: { type: Number, required: true },
                visits: { type: Number, required: true },
                newPatients: { type: Number, required: true },
            },
            averages: {
                revenue: { type: Number, required: true },
                visits: { type: Number, required: true },
                newPatients: { type: Number, required: true },
            },
            months: { type: [MonthSchema], required: true },
        },
        { _id: false, versionKey: false }
    );

    const AverageValueYearSchema = new mongoose.Schema(
        {
            year: { type: Number, required: true },
            units: { type: Number, required: true },
            revenue: { type: Number, required: true },
            perUnitValue: { type: Number, required: true },
        },
        { _id: false, versionKey: false }
    );

    const AverageValueReportSchema = new mongoose.Schema(
        {
            current: { type: AverageValueYearSchema, required: true },
            previousFiveYears: { type: [AverageValueYearSchema], required: true },
        },
        { _id: false, versionKey: false }
    );

    const CallTrackingPatientSchema = new mongoose.Schema(
        {
            name: { type: String, required: true },
            source: { type: String, required: true },
            revenue: { type: Number, required: true },
        },
        { _id: false, versionKey: false }
    );

    const CallTrackingMonthSchema = new mongoose.Schema(
        {
            patients: { type: [CallTrackingPatientSchema], required: true },
            date: { type: Date, required: true },
            averageRevenue: { type: Number, required: true },
            totalRevenue: { type: Number, required: true },
        },
        { _id: false, versionKey: false }
    );

    const CallTrackingYearSchema = new mongoose.Schema(
        {
            yearName: { type: Number, required: true },
            totalRevenue: { type: Number, required: true },
            months: { type: [CallTrackingMonthSchema], required: true },
        },
        { _id: false, versionKey: false }
    );

    return new mongoose.Schema({
        owner: { type: mongoose.Schema.ObjectId, required: true },
        roiTable: { type: RoiTableSchema, required: true },
        years: { type: [YearSchema], required: true },
        perPatientValueReport: { type: AverageValueReportSchema, required: true },
        perVisitValueReport: { type: AverageValueReportSchema, required: true },
        callTrackingReport: { type: [CallTrackingYearSchema], required: true },
    });
};
