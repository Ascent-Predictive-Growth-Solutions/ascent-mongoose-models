type Model = typeof import("mongoose").Model;

declare function createModels(
    mongoose: typeof import("mongoose")
): {
    Practice: Model;
    Note: Model;
    Contact: Model;
    DirectMailCampaign: Model;
    User: Model;
    KpiMonth: Model;
    SeoMonth: Model;
    CallRailDay: Model;
    Lead: Model;
    Report: Model;
    PhoneLead: Model;
    ClientAccount: Model;
    ClientUser: Model;
    Session: Model;
    NextStrategistId: Model;
    ProductForm: Model;
    PracticeManagementReport: Model;
    SeoForm: Model;
    BrandForm: Model;
    SocialMediaForm: Model;
    GoogleAdsForm: Model;
    WebsiteForm: Model;
    DomainForm: Model;
    SeoSummaryReport: Model;
    CallRailCall: Model;
    Event: Model;
    NewPatient: Model;
    VeloxTreatment: Model;
    VeloxPatient: Model;
    Invoice: Model;
};

export default createModels;
