type Schema = typeof import("mongoose").Schema

declare function createModels(mongoose: typeof import("mongoose")): {
    Practice: Schema
    Note: Schema,
    Contact: Schema,
    DirectMailCampaign: Schema,
    User: Schema,
    KpiMonth: Schema,
    SeoMonth: Schema,
    CallRailDay: Schema,
    Lead: Schema,
    Report: Schema,
    PhoneLead: Schema,
    ClientAccount: Schema,
    ClientUser: Schema,
    Session: Schema,
    NextStrategistId: Schema,
    ProductForm: Schema,
    PracticeManagementReport: Schema,
    SeoForm: Schema,
    BrandForm: Schema,
    SocialMediaForm: Schema,
    GoogleAdsForm: Schema,
    WebsiteForm: Schema,
    DomainForm: Schema,
    SeoSummaryReport: Schema,
    CallRailCall: Schema,
    Event: Schema,
    NewPatient: Schema,
    VeloxTreatment: Schema,
    VeloxPatient: Schema,
    Invoice: Schema,
}

export default createModels