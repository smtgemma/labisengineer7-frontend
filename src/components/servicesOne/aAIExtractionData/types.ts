
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
};

export interface LicenseLegalFormData {
    plotArea: string;
    withinOutsideCityPlan: string;
    permitNumber: string;
    issuingAuthority: string;
    legalizationStatementNumber: string;
    engineerFullName: string;
    electronicCode: string;
    teeRegistrationNumber: string;
    specialty: string;
    inclusionDateLegalization: string;
}

export interface EPCFormValues {
    issueDate: string;
    epcCode: string;
    protocolNumber: string;
    energyCategory: string;
    primaryEnergy: string;
    co2Emissions: string;
    zonePrice: string;
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
