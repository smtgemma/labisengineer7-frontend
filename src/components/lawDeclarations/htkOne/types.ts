
export type OwnerData = {
    firstName: string; // Όνομα
    lastName: string; // Επώνυμο
    fatherFirstLastName: string; // Όνοματεπώνυμο Πατρός
    mothersFirstLastName: string; // Όνοματεπώνυμο Μητρός
    dateOfBirth: string; // Ημερομηνία Γέννησης
    placeOfBirth: string; // Τόπος Γέννησης
    ownerAddress: string; // Διεύθυνση Ιδιοκτήτη
    addressNumber: string; // Αριθμός Διεύθυνσης Ιδιοκτήτη
    city: string; // Πόλη
    postal_code: string; // Ταχυδρομικός Κώδικας
    idNumber: string; // Α.Δ.Τ
    taxIdentificationNumber: string; // Αριθμός Φορολογικού Μητρώου (ΑΦΜ)
    email: string; // Email
    mobile: string; // Τηλέφωνο
    selected?: boolean;
};

export type ProjectData = {
    projectDescription: string;
    projectDescription2: string;
    horizontalPropertyNameTwo: string;
    horizontalPropertyName: string;
    construction: string;
    propertyPostalCode: string;
    municipalityCommunity: string;
    propertyAddress: string;
    propertyNumber: string;
    propertyPlace: string;
    propertyType: string;
    cadastralCode: string;
    kaekProperty: string;
    permitNumber: string;
    titleArea: string;
    floorProperty: string;
    numberProperty: string;
    percentageCoOwnershipParcel: string;
};

export interface LicenseLegalFormData {
    plotArea: string;
    withinOutsideCityPlan: string;
    permitNumber: string;
    dateIssueBuildingPermitRevisionTwo: string; //new
    dateOfIssuanceEemk: string; //new
    dateOfIssueBuildingPermitRevisioneemk: string; //new
    issuingAuthority: string;
    legalizationStatementNumber: string;
    engineerFullName: string;
    electronicCode: string;
    teeRegistrationNumber: string;
    specialty: string;
    inclusionDateLegalization: string;
    licenseNumberRevision: string;
    dateIssuanceBuildingPermit: string;
    detailsIssuingAuthority: string;
    dateIssueBuildingPermitRevision: string;
    completionDeclaration3843Number: string;
    descriptionValidations3843: string;
    issuingAuthority3843: string;
    dateIssueCompletionDeclaration3843: string;
    dateOfSubmission1337: string;
    declarationNumber1337: string;
    issuingAuthority1337: string;
    licenseNumberEemk: string;
    issuingAuthorityEemk: string;
    projectTitleDescriptionEemk: string;
    projectDescriptionHtkPlot: string;
    issuingAuthorityLossCertificate: string;
    protocolNumberLossCertificate: string;
    protocolDateLossCertificate: string;
}

export interface EPCFormValues {
    issueDate: string;
    epcCode: string;
    protocolNumber: string;
    energyCategory: string;
    primaryEnergy: string;
    co2Emissions: string;
    zonePrice: string;
    reviewsNumbersEstablishmentHorizontalOwnership: string;
    numberEstablishmentHorizontalOwnership: string;
    notaryEstablishmentHorizontalOwnership: string;
}

export type OtherOpation = {
    residenceType: string;
    expectationDocument: string;
    includedInFolder: boolean;
    unauthorizedConstructions: string;
};

export interface OthersValue {
    land_use: string;
    arbitrary_constructions_description: string;
    expectation_Document: string;
}

export type FormValues = ProjectData &
    LicenseLegalFormData &
    EPCFormValues &
    OtherOpation &
    OthersValue & {
        owners: any[];
    };
