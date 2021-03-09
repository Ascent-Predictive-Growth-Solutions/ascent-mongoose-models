const buildPeriodSchema = require("./schemaBuilders/Period");
const buildGoogleSearchConsoleAccountSchema = require("./schemaBuilders/GoogleSearchConsoleAccount");
const buildKpiMonthSchema = require("./schemaBuilders/KpiMonth");
const buildPracticeSchema = require("./schemaBuilders/Practice");
const buildDirectMailCampaignSchema = require("./schemaBuilders/DirectMailCampaign");
const buildUserSchema = require("./schemaBuilders/User");
const buildNoteSchema = require("./schemaBuilders/Note");
const buildContactSchema = require("./schemaBuilders/Contact");
const buildGoogleAnalyticsAccountSchema = require("./schemaBuilders/GoogleAnalyticsAccount");
const buildGoogleMyBusinessAccountSchema = require("./schemaBuilders/GoogleMyBusinessAccount");
const buildOrganicSeoMonthSchema = require("./schemaBuilders/OrganicSeoMonth");
const buildGoogleAnalyticsMonth = require("./schemaBuilders/GoogleAnalyticsMonth");
const buildGoogleMyBusinessMonth = require("./schemaBuilders/GoogleMyBusinessMonth");
const buildSeoMonthSchema = require("./schemaBuilders/SeoMonth");
const buildPpdDaySchema = require("./schemaBuilders/PpcDay");
const buildCallRailDaySchema = require("./schemaBuilders/CallRailDay");
const buildPpcMonthSchema = require("./schemaBuilders/PpcMonth");
const buildPpcCampaignSchema = require("./schemaBuilders/PpcCampaign");
const buildLeadSchema = require("./schemaBuilders/Lead");
const buildReportSchema = require("./schemaBuilders/Report");
const buildPhoneLead = require("./schemaBuilders/PhoneLead");

module.exports = function (mongoose) {
    const PeriodSchema = buildPeriodSchema(mongoose);
    const GoogleAnalyticsAccountSchema = buildGoogleAnalyticsAccountSchema(mongoose);
    const GoogleMyBusinessAccountSchema = buildGoogleMyBusinessAccountSchema(mongoose);
    const GoogleSearchConsoleAccountSchema = buildGoogleSearchConsoleAccountSchema(mongoose);
    const KpiMonthSchema = buildKpiMonthSchema(mongoose, { PeriodSchema });
    const OrganicSeoMonthSchema = buildOrganicSeoMonthSchema(mongoose, { PeriodSchema });
    const GoogleAnalyticsMonthSchema = buildGoogleAnalyticsMonth(mongoose, { PeriodSchema });
    const GoogleMyBusinessMonthSchema = buildGoogleMyBusinessMonth(mongoose, { PeriodSchema });
    const SeoMonthSchema = buildSeoMonthSchema(mongoose, { PeriodSchema });
    const PpcDaySchema = buildPpdDaySchema(mongoose, { PeriodSchema });
    const CallRailDaySchema = buildCallRailDaySchema(mongoose, { PeriodSchema });
    const PpcMonthSchema = buildPpcMonthSchema(mongoose, { PeriodSchema });
    const NoteSchema = buildNoteSchema(mongoose);
    const ContactSchema = buildContactSchema(mongoose);
    const PPCCampaignSchema = buildPpcCampaignSchema(mongoose);
    const PracticeSchema = buildPracticeSchema(mongoose, { PeriodSchema });
    const DirectMailCampaignSchema = buildDirectMailCampaignSchema(mongoose, { PeriodSchema });
    const UserSchema = buildUserSchema(mongoose);
    const LeadSchema = buildLeadSchema(mongoose);
    const ReportSchema = buildReportSchema(mongoose);
    const PhoneLeadSchema = buildPhoneLead(mongoose);

    const Lead = mongoose.model("Lead", LeadSchema);
    const Report = mongoose.model("LeadReport", ReportSchema);
    const PhoneLead = mongoose.model("PhoneLead", PhoneLeadSchema);
    const Practice = mongoose.model("practice-v2", PracticeSchema);
    const Note = mongoose.model("Note", NoteSchema);
    const Contact = mongoose.model("Contact", ContactSchema);
    const PPCCampaign = mongoose.model("ppc-campaign-v2", PPCCampaignSchema);
    const DirectMailCampaign = mongoose.model("direct-mail-campaign-v2", DirectMailCampaignSchema);
    const User = mongoose.model("User", UserSchema);
    const GoogleAnalyticsAccount = mongoose.model(
        "google-analytics-account",
        GoogleAnalyticsAccountSchema
    );
    const OrganicSeoMonth = mongoose.model("organic-seo-month", OrganicSeoMonthSchema);
    const GoogleMyBusinessAccount = mongoose.model(
        "google-my-business-account",
        GoogleMyBusinessAccountSchema
    );
    const GoogleSearchConsoleAccount = mongoose.model(
        "google-search-console-account",
        GoogleSearchConsoleAccountSchema
    );
    const KpiMonth = mongoose.model("kpi-month", KpiMonthSchema);
    const GoogleAnalyticsMonth = mongoose.model(
        "google-analytics-month",
        GoogleAnalyticsMonthSchema
    );
    const GoogleMyBusinessMonth = mongoose.model(
        "google-my-business-month",
        GoogleMyBusinessMonthSchema
    );
    const SeoMonth = mongoose.model("seo-month", SeoMonthSchema);
    const PpcDay = mongoose.model("ppc-day", PpcDaySchema);
    const CallRailDay = mongoose.model("call-rail-day", CallRailDaySchema);
    const PpcMonth = mongoose.model("ppc-month", PpcMonthSchema);

    return {
        Practice,
        Note,
        Contact,
        PPCCampaign,
        DirectMailCampaign,
        User,
        GoogleAnalyticsAccount,
        GoogleMyBusinessAccount,
        GoogleSearchConsoleAccount,
        KpiMonth,
        OrganicSeoMonth,
        GoogleAnalyticsMonth,
        GoogleMyBusinessMonth,
        SeoMonth,
        PpcDay,
        CallRailDay,
        PpcMonth,
        Lead,
        Report,
        PhoneLead,
    };
};
