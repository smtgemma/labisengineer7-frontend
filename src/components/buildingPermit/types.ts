
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
    postalCode: string; // Ταχυδρομικός Κώδικας
    idNumber: string; // Α.Δ.Τ
    taxIdentificationNumber: string; // Αριθμός Φορολογικού Μητρώου (ΑΦΜ)
    email: string; // Email
    mobile: string; // Τηλέφωνο
    selected?: boolean;
    ownershipPercentageOwner: string
    ownerTypeOwnership: string
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

// model Project2 {
//   id                          String   @id @default(auto()) @map("_id") @db.ObjectId
//   serviceId                   String?  @db.ObjectId
//   createdById                 String?  @db.ObjectId
//   projectCode                 String?  @unique
//   subCategories               Json?
//   descrptionTasks             Json?
//   ydom                        String?
//   technicalDescription        String?
//   technicalDescriptionTwo     String?
//   projectDescription          String[]
//   kaekProperty                String?
//   titleArea                   String?
//   floorProperty               String?
//   propertyPlace               String?
//   propertyNumber              String?
//   propertyAddress             String?
//   municipalityCommunity       String?
//   propertyPostalCode          String?
//   horizontalPropertyName      String?
//   horizontalPropertyNameTwo   String?
//   owners                      Json?
//   engineers                   Json?
//   plotArea                    String?
//   withinOutsideCityPlan       String?
//   permitNumber                String?
//   issuingAuthority            String?
//   legalizationStatementNumber String?
//   engineerFullName            String?
//   electronicCode              String?
//   teeRegistrationNumber       String?
//   specialty                   String?
//   inclusionDateLegalization   String?
//   processedDocuments          Json?
//   processingStatus            String?

//   // ✅ Newly added fields
//   exclusiveUseProperty                           String?
//   miniDescriptionHorizontalProperty              String?
//   notaryEstablishmentHorizontalOwnership         String?
//   establishmentHorizontalOwnership               String?


//   createdAt DateTime @default(now())
//   updatedAt DateTime @updatedAt

//   createdBy     User?           @relation(fields: [createdById], references: [id])
//   service       Service?        @relation(fields: [serviceId], references: [id])
//   aiExtractions AIExtraction[]
//   aiActivities  AIActivityLog[]

//   @@map("projects2")
// }

export interface LicenseLegalFormData {
    plotArea: string;
    numberProperty: string;
    withinOutsideCityPlan: string;
    permitNumber: string;
    issuingAuthority: string;
    legalizationStatementNumber: string;
    engineerFullName: string;
    electronicCode: string;
    teeRegistrationNumber: string;
    specialty: string;
    inclusionDateLegalization: string;
    percentageCoOwnershipParcel: string;
    licenseNumberRevision: String;
    dateIssuanceBuildingPermit: String;
    detailsIssuingAuthority: String;
    dateIssueBuildingPermitRevision: String;
    projectTitleDescriptionLicense: String;
    completionDeclaration3843Number: String;
    descriptionValidations3843: String;
    issuingAuthority3843: String;
    dateIssueCompletionDeclaration3843: String;
    numberEstablishmentHorizontalOwnership: string;
    reviewsNumbersEstablishmentHorizontalOwnership: string;
    notaryEstablishmentHorizontalOwnership: string;
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
