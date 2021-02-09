// const PracticeSchema = new Schema({
//     _id: { type: Schema.ObjectId, auto: true },
//     date: { type: Date, default: new Date() },
//
//     practiceName: { type: String, default: "" },
//     active: { type: Boolean, default: false },
//     type: { type: String, default: "" },
//     perPatientValue: { type: Number, default: 650 },
//     details: { type: String, default: "" },
//
//     strategist: { type: String, default: "" },
//     startDate: { type: Date, default: new Date() },
//     schemaVersion: { type: Number, default: 3 },
//
//     primaryContact: {
//         name: { type: String, default: "" },
//         label: { type: String, default: "" },
//         phone: { type: String, default: "" },
//         email: { type: String, default: "" },
//     },
//
//     linkedAccounts: {
//         googleMyBusiness: { type: Schema.ObjectId },
//         googleAnalytics: { type: Schema.ObjectId },
//         googleSearchConsole: { type: Schema.ObjectId },
//     },
//
//     linkedPpcCampaigns: [Schema.ObjectId],
//     linkedDirectMailCampaigns: [Schema.ObjectId],
//
//     reviewsReport: {
//         dateLastUpdated: { type: Date },
//         competitors: [
//             {
//                 practiceName: { type: String },
//                 rating: { type: Number },
//                 numReviews: { type: Number },
//                 placeId: { type: String },
//             },
//         ],
//         averageRating: { type: Number },
//         numberOfReviews: { type: Number },
//         months: [
//             {
//                 reviewsGenerated: { type: Number },
//                 averageRating: { type: Number },
//                 period: { type: PeriodSchema },
//                 totalReviews: { type: Number },
//             },
//         ],
//     },
// });
