const buildPeriodSchema = require("./schemaBuilders/Period");
const buildKpiMonthSchema = require("./schemaBuilders/KpiMonth");
const buildPracticeSchema = require("./schemaBuilders/Practice");
const buildDirectMailCampaignSchema = require("./schemaBuilders/DirectMailCampaign");
const buildUserSchema = require("./schemaBuilders/User");
const buildNoteSchema = require("./schemaBuilders/Note");
const buildContactSchema = require("./schemaBuilders/Contact");
const buildSeoMonthSchema = require("./schemaBuilders/SeoMonth");
const buildCallRailDaySchema = require("./schemaBuilders/CallRailDay");
const buildLeadSchema = require("./schemaBuilders/Lead");
const buildReportSchema = require("./schemaBuilders/Report");
const buildPhoneLead = require("./schemaBuilders/PhoneLead");
const buildClientAccount = require("./schemaBuilders/ClientAccount");
const buildClientUser = require("./schemaBuilders/ClientUser");
const buildSessionSchema = require("./schemaBuilders/Session");
const buildNextStrategistIdSchema = require("./schemaBuilders/NextStrategistId");
const buildProductFormSchema = require("./schemaBuilders/ProductForm");

module.exports = function (mongoose) {
    const PeriodSchema = buildPeriodSchema(mongoose);
    const KpiMonthSchema = buildKpiMonthSchema(mongoose, { PeriodSchema });
    const SeoMonthSchema = buildSeoMonthSchema(mongoose, { PeriodSchema });
    const CallRailDaySchema = buildCallRailDaySchema(mongoose, { PeriodSchema });
    const NoteSchema = buildNoteSchema(mongoose);
    const ContactSchema = buildContactSchema(mongoose);
    const PracticeSchema = buildPracticeSchema(mongoose, { PeriodSchema });
    const DirectMailCampaignSchema = buildDirectMailCampaignSchema(mongoose, { PeriodSchema });
    const UserSchema = buildUserSchema(mongoose);
    const LeadSchema = buildLeadSchema(mongoose);
    const ReportSchema = buildReportSchema(mongoose);
    const PhoneLeadSchema = buildPhoneLead(mongoose);
    const ClientAccountSchema = buildClientAccount(mongoose);
    const ClientUserSchema = buildClientUser(mongoose);
    const SessionSchema = buildSessionSchema(mongoose);
    const NextStrategistIdSchema = buildNextStrategistIdSchema(mongoose);
    const ProductFormSchema = buildProductFormSchema(mongoose);

    const Lead = mongoose.model("Lead", LeadSchema);
    const Report = mongoose.model("LeadReport", ReportSchema);
    const PhoneLead = mongoose.model("PhoneLead", PhoneLeadSchema);
    const Practice = mongoose.model("practice-v2", PracticeSchema);
    const Note = mongoose.model("Note", NoteSchema);
    const Contact = mongoose.model("Contact", ContactSchema);
    const DirectMailCampaign = mongoose.model("direct-mail-campaign-v2", DirectMailCampaignSchema);
    const User = mongoose.model("User", UserSchema);
    const KpiMonth = mongoose.model("kpi-month", KpiMonthSchema);
    const SeoMonth = mongoose.model("seo-month", SeoMonthSchema);
    const CallRailDay = mongoose.model("call-rail-day", CallRailDaySchema);
    const ClientAccount = mongoose.model("client-account", ClientAccountSchema);
    const ClientUser = mongoose.model("client-user", ClientUserSchema);
    const Session = mongoose.model("Session", SessionSchema);
    const NextStrategistId = mongoose.model("NextStrategistId", NextStrategistIdSchema);
    const ProductForm = mongoose.model("product-form", ProductFormSchema);

    return {
        Practice,
        Note,
        Contact,
        DirectMailCampaign,
        User,
        KpiMonth,
        SeoMonth,
        CallRailDay,
        Lead,
        Report,
        PhoneLead,
        ClientAccount,
        ClientUser,
        Session,
        NextStrategistId,
        ProductForm,
    };
};
