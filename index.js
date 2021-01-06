module.exports = function (mongoose) {
  const Schema = mongoose.Schema;
  const PeriodSchema = new Schema(
    {
      ordinal: { type: Number, required: true, immutable: true },
      month: { type: Number, required: true, immutable: true },
      year: { type: Number, required: true, immutable: true },
      day: { type: Number, required: true, immutable: true },
    },
    { _id: false }
  );

  const GoogleAnalyticsAccountSchema = new Schema({
    _id: { type: Schema.ObjectId, auto: true, immutable: true },
    date: { type: Date, default: new Date(), immutable: true },
    viewId: { type: String, immutable: true, required: true },
    gaUrl: { type: String, default: "" },
    name: { type: String, default: "" },
    gaAccountId: { type: String, default: "" },
    gaWebPropertyId: { type: String, default: "" },
    isActive: { type: Boolean, default: true },
  });

  const GoogleMyBusinessAccountSchema = new Schema({
    _id: { type: Schema.ObjectId, auto: true, immutable: true },
    date: { type: Date, default: new Date(), immutable: true },
    type: {
      type: String,
      enum: ["dentist", "orthodontist", "pediatricDentist"],
      default: "dentist",
    },
    gmbAccountId: { type: String, default: "" },
    name: { type: String, default: "" },
    gmbUrl: { type: String, default: "" },
    placeId: { type: String, default: "" },
    state: { type: String, default: "" },
    city: { type: String, default: "" },
    zipCode: { type: String, default: "" },
    streetAddress: { type: String, default: "" },
    isActive: { type: Boolean, default: true },
  });

  const GoogleSearchConsoleAccountSchema = new Schema({
    _id: { type: Schema.ObjectId, auto: true, immutable: true },
    date: { type: Date, default: new Date(), immutable: true },
    searchConsoleUrl: { type: String, default: "" },
    isActive: { type: Boolean, default: true },
  });

  const CallRailAccountSchema = new Schema({
    _id: { type: Schema.ObjectId, auto: true, immutable: true },
    date: { type: Date, default: new Date(), immutable: true },
    trackingId: { type: String, default: "" },
    name: { type: String, default: "" },
    isActive: { type: Boolean, default: true },
  });

  const KpiMonthSchema = new Schema({
    _id: { type: Schema.ObjectId, auto: true, immutable: true },
    date: { type: Date, default: new Date(), immutable: true },
    revenue: { type: Number, default: 0 },
    visits: { type: Number, default: 0 },
    newPatients: { type: Number, default: 0 },
    referrals: { type: Number, default: 0 },
    owner: { type: Schema.ObjectId, required: true, immutable: true },
    period: { type: PeriodSchema, required: true, immutable: true },
  });

  const OrganicSEOKeywordSchema = new Schema({
    _id: { type: Schema.ObjectId, auto: true },
    keyword: { type: String, required: true },
    rank: { type: Number, required: true },
    impressions: { type: Number, required: true },
    clicks: { type: Number, required: true },
  });

  const OrganicSeoMonthSchema = new Schema({
    _id: { type: Schema.ObjectId, auto: true, immutable: true },
    date: { type: Date, default: new Date(), immutable: true },
    keywords: { type: [OrganicSEOKeywordSchema], default: [], immutable: true },
    owner: { type: Schema.ObjectId, required: true, immutable: true },
    period: { type: PeriodSchema, required: true, immutable: true },
  });

  const GoogleAnalyticsMonthSchema = new Schema({
    _id: { type: Schema.ObjectId, auto: true, immutable: true },
    date: { type: Date, default: new Date(), immutable: true },
    owner: { type: Schema.ObjectId, required: true, immutable: true },
    period: { type: PeriodSchema, required: true, immutable: true },
    newUsers: { type: Number, default: 0 },
    totalUsers: { type: Number, default: 0 },
  });

  const GoogleMyBusinessMonthSchema = new Schema({
    _id: { type: Schema.ObjectId, auto: true, immutable: true },
    date: { type: Date, default: new Date(), immutable: true },
    owner: { type: Schema.ObjectId, required: true, immutable: true },
    period: { type: PeriodSchema, required: true, immutable: true },
    calls: { type: Number, default: 0 },
    websiteActions: { type: Number, default: 0 },
  });

  const ReviewCompetitorSchema = new Schema({
    _id: { type: Schema.ObjectId, auto: true },
    practiceName: { type: String, default: "" },
    rating: { type: Number, default: 0 },
    numReviews: { type: Number, default: 0 },
    placeId: { type: String, required: true },
  });

  const ReviewMonthSchema = new Schema({
    _id: { type: Schema.ObjectId, auto: true, immutable: true },
    date: { type: Date, default: new Date(), immutable: true },
    owner: { type: Schema.ObjectId, required: true, immutable: true },
    period: { type: PeriodSchema, required: true, immutable: true },
    rating: { type: Number, default: 0 },
    numReviews: { type: Number, default: 0 },
    competitors: { type: [ReviewCompetitorSchema], default: [] },
  });

  const RankingFromGoogleSearchSchema = new Schema({
    _id: { type: Schema.ObjectId, auto: true },
    googleSearchTerm: { type: String, required: true },
    rank: { type: Number, required: true },
  });

  const SeoCompetitorsSchema = new Schema({
    _id: { type: Schema.ObjectId, auto: true },
    practiceName: { type: String, required: true },
    averageRank: { type: Number, default: 0 },
    overallRank: { type: Number, default: 0 },
    rankingsFromGoogleSearches: {
      type: [RankingFromGoogleSearchSchema],
      required: false,
    },
    placeId: { type: String, required: true },
  });

  const SeoMonthSchema = new Schema({
    _id: { type: Schema.ObjectId, auto: true, immutable: true },
    date: { type: Date, default: new Date(), immutable: true },
    owner: { type: Schema.ObjectId, required: true, immutable: true },
    period: { type: PeriodSchema, required: true, immutable: true },
    competitors: { type: [SeoCompetitorsSchema], default: [] },
    averageRank: { type: Number },
    overallRank: { type: Number },
    rankingsFromGoogleSearches: {
      type: [RankingFromGoogleSearchSchema],
      default: [],
    },
    numCompetitors: { type: Number },
  });

  const PpcDaySchema = new Schema({
    _id: { type: Schema.ObjectId, auto: true },
    clicks: { type: Number, default: 0 },
    impressions: { type: Number, default: 0 },
    adSpend: { type: Number, default: 0 },
    period: { type: PeriodSchema, required: true, immutable: true },
    owner: { type: Schema.ObjectId, required: true, immutable: true },
  });

  const CallRailDaySchema = new Schema({
    _id: { type: Schema.ObjectId, auto: true },
    calls: { type: Number, default: 0 },
    newPatients: { type: Number, default: 0 },
    period: { type: PeriodSchema, required: true, immutable: true },
    trackerId: { type: String, required: true, immutable: true },
  });

  const CallRailMonthSchema = new Schema({
    _id: { type: Schema.ObjectId, auto: true },
    calls: { type: Number, default: 0 },
    newPatients: { type: Number, default: 0 },
    period: { type: PeriodSchema, required: true, immutable: true },
    owner: { type: Schema.ObjectId, required: true, immutable: true },
  });

  const PpcMonthSchema = new Schema({
    _id: { type: Schema.ObjectId, auto: true },
    clicks: { type: Number, default: 0 },
    impressions: { type: Number, default: 0 },
    adSpend: { type: Number, default: 0 },
    period: { type: PeriodSchema, required: true, immutable: true },
    owner: { type: Schema.ObjectId, required: true, immutable: true },
  });

  const NoteSchema = new Schema({
    _id: { type: Schema.ObjectId, auto: true, immutable: true },
    content: { type: String, default: "", immutable: true },
    title: { type: String, default: "", immutable: true },
    date: { type: Date, default: new Date(), immutable: true },
    userName: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, required: true, immutable: true },
    owner: { type: Schema.Types.ObjectId, required: true, immutable: true },
  });

  const ContactSchema = new Schema({
    _id: { type: Schema.ObjectId, auto: true, immutable: true },
    date: { type: Date, default: new Date(), immutable: true },
    contactName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    label: { type: String, default: "" },
    details: { type: String, default: "" },
    owner: { type: Schema.Types.ObjectId, required: true, immutable: true },
  });

  const PPCCampaignSchema = new Schema({
    _id: { type: Schema.ObjectId, auto: true },
    date: { type: Date, default: new Date() },
    name: { type: String, required: true },
    campaignId: { type: String, required: true },
    isActive: { type: Boolean, default: true },
    doesExistInGoogle: { type: Boolean, default: true },
    linkedGoogleAnalyticsViewId: { type: String, required: true },
    linkedGoogleAnalyticsUrl: { type: String, required: true },
    goals: {
      newPatients: { type: Number, default: 0 },
    },
    linkedCallRailTrackers: {
      type: [
        {
          name: String,
          trackerId: String,
        },
      ],
      default: [],
    },
  });

  const MailingPeriodSchema = new Schema({
    _id: { type: Schema.ObjectId, auto: true },
    startPeriod: { type: PeriodSchema, required: true },
    endPeriod: { type: PeriodSchema, required: true },

    numberOfMailers: { type: Number, default: 0 },
    budget: { type: Number, default: 0 },
  });

  const DirectMailCampaignSchema = new Schema({
    _id: { type: Schema.ObjectId, auto: true },
    date: { type: Date, default: new Date() },
    name: { type: String, required: false },
    active: { type: Boolean, default: true },

    goals: {
      newPatients: { type: Number, default: 0 },
    },
    mailingPeriods: { type: [MailingPeriodSchema], default: [] },
    linkedCallRailTrackers: [],
    owner: { type: Schema.ObjectId, required: true, immutable: true },
  });

  const PracticeSchema = new Schema({
    _id: { type: Schema.ObjectId, auto: true },
    date: { type: Date, default: new Date() },

    practiceName: { type: String, default: "" },
    active: { type: Boolean, default: false },
    type: { type: String, default: "" },
    perPatientValue: { type: Number, default: 650 },
    details: { type: String, default: "" },

    strategist: { type: String, default: "" },
    startDate: { type: Date, default: new Date() },
    schemaVersion: { type: Number, default: 3 },

    primaryContact: {
      name: { type: String, default: "" },
      label: { type: String, default: "" },
      phone: { type: String, default: "" },
      email: { type: String, default: "" },
    },

    linkedAccounts: {
      googleMyBusiness: { type: Schema.ObjectId },
      googleAnalytics: { type: Schema.ObjectId },
      googleSearchConsole: { type: Schema.ObjectId },
    },

    linkedPpcCampaigns: [Schema.ObjectId],
    linkedDirectMailCampaigns: [Schema.ObjectId],
  });

  const UserSchema = new Schema({
    _id: { type: Schema.ObjectId, auto: true },
    email: { type: String, required: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    type: {
      type: String,
      enum: ["EMPLOYEE", "ADMIN", "CLIENT"],
      required: true,
    },
    linkedPractices: { type: [Schema.ObjectId], default: [] },
  });

  const ProductSchema = new Schema({
    _id: { type: Schema.ObjectId, auto: true },
    name: { type: String, default: "" },
    price: { type: Number, default: 0 },
  });

  const LeadSchema = new Schema({
    _id: { type: Schema.ObjectId, auto: true },
    date: { type: Date, default: new Date() },
    practiceName: { type: String, default: "" },
    url: { type: String, default: "" },
    placeId: { type: String, default: "" },
    state: { type: String, default: "" },
    city: { type: String, default: "" },
    zipCode: { type: String, default: "" },
    streetAddress: { type: String, default: "" },
    practiceType: { type: String, default: "" },
    source: { type: String, default: "" },
    userName: { type: String, default: "" },
    email: { type: String, default: "" },
    online: { type: [ProductSchema], default: [] },
    growth: { type: [ProductSchema], default: [] },
    profit: { type: [ProductSchema], default: [] },
    profitPaymentType: { type: String, default: "" },
    __v: { type: Number, default: 0 },
  });

  const SEOKeywordSchema = new Schema({
    _id: { type: Schema.ObjectId, auto: true },
    __v: { type: Number, default: 0 },
    keyword: { type: String, required: true },
    rank: { type: Number, required: true },
  });

  const SEOCompetitorsSchema = new Schema({
    _id: { type: Schema.ObjectId, auto: true },
    practiceName: { type: String, required: true },
    averageRank: { type: Number, default: 0 },
    overallRank: { type: Number, default: 0 },
    keywords: { type: [SEOKeywordSchema], required: false },
    placeId: { type: String, required: true },
    __v: { type: Number, default: 0 },
  });

  const PPCKeywordSchema = new Schema({
    _id: { type: Schema.ObjectId, auto: true },
    __v: { type: Number, default: 0 },
    keyword: { type: String, required: true },
    cpc: { type: Number, required: true },
  });

  const ReportSchema = new Schema({
    _id: { type: Schema.ObjectId, auto: true },
    owner: { type: Schema.Types.ObjectId, required: true },
    date: { type: Date, default: new Date() },
    data: {
      seo: {
        competitors: { type: [SEOCompetitorsSchema], default: [] },
        averageRank: { type: Number },
        overallRank: { type: Number },
        rankings: { type: [SEOKeywordSchema], default: [] },
        numCompetitors: { type: Number },
      },
      reviews: {
        rating: { type: Number },
        numReviews: { type: Number },
        topFiveAvgRating: { type: Number },
        topFiveAvgNumReviews: { type: Number },
        competitors: { type: [ReviewCompetitorSchema], default: [] },
      },
      ppc: {
        keywords: [PPCKeywordSchema],
      },
      __v: { type: Number, default: 0 },
    },
  });

  const PhoneLeadSchema = new Schema({
    _id: { type: Schema.ObjectId, auto: true },
    owner: { type: Schema.Types.ObjectId, required: true },
    date: { type: Date, default: new Date() },
    wantsCall: Boolean,
    hasCommunicationSoftware: Boolean,
    lastWebsiteUpdate: {
      value: Number,
      label: String,
    },
    marketingBudget: {
      value: Number,
      label: String,
    },
    phoneNumber: String,
    userName: String,
    email: String,
    practiceName: String,
    zipCode: String,
  });

  const Lead = mongoose.model("Lead", LeadSchema);

  const Report = mongoose.model("LeadReport", ReportSchema);
  const PhoneLead = mongoose.model("PhoneLead", PhoneLeadSchema);

  const Practice = mongoose.model("practice-v2", PracticeSchema);
  const Note = mongoose.model("Note", NoteSchema);
  const Contact = mongoose.model("Contact", ContactSchema);
  const PPCCampaign = mongoose.model("ppc-campaign-v2", PPCCampaignSchema);
  const DirectMailCampaign = mongoose.model(
    "direct-mail-campaign-v2",
    DirectMailCampaignSchema
  );

  const User = mongoose.model("User", UserSchema);

  const GoogleAnalyticsAccount = mongoose.model(
    "google-analytics-account",
    GoogleAnalyticsAccountSchema
  );
  const OrganicSeoMonth = mongoose.model(
    "organic-seo-month",
    OrganicSeoMonthSchema
  );
  const GoogleMyBusinessAccount = mongoose.model(
    "google-my-business-account",
    GoogleMyBusinessAccountSchema
  );
  const GoogleSearchConsoleAccount = mongoose.model(
    "google-search-console-account",
    GoogleSearchConsoleAccountSchema
  );
  const CallRailAccount = mongoose.model(
    "call-rail-account",
    CallRailAccountSchema
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

  const ReviewMonth = mongoose.model("review-month", ReviewMonthSchema);
  const SeoMonth = mongoose.model("seo-month", SeoMonthSchema);
  const PpcDay = mongoose.model("ppc-day", PpcDaySchema);
  const CallRailDay = mongoose.model("call-rail-day", CallRailDaySchema);
  const CallRailMonth = mongoose.model("call-rail-months", CallRailMonthSchema);
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
    CallRailAccount,
    KpiMonth,
    OrganicSeoMonth,
    GoogleAnalyticsMonth,
    GoogleMyBusinessMonth,
    ReviewMonth,
    SeoMonth,
    PpcDay,
    CallRailDay,
    CallRailMonth,
    PpcMonth,
    Lead,
    Report,
    PhoneLead,
  };
};
