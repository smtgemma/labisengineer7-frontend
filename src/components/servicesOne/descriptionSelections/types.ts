export type Owner = {
    first_name: string; // Όνομα
    last_name: string; // Επώνυμο
    father_first_name: string; // Όνοματεπώνυμο Πατρός
    mothers_first_last_name: string; // Όνοματεπώνυμο Μητρός
    date_of_birth: string; // Ημερομηνία Γέννησης
    place_of_birth: string; // Τόπος Γέννησης
    owner_address: string; // Διεύθυνση Ιδιοκτήτη
    address_number: string; // Αριθμός Διεύθυνσης Ιδιοκτήτη
    city: string; // Πόλη
    postal_code: string; // Ταχυδρομικός Κώδικας
    id_number: string; // Α.Δ.Τ
    tax_identification_number: string; // ΑΦΜ
    email: string; // Email
    mobile: string; // Τηλέφωνο
    selected?: boolean;
};

export interface AIDataState {
    formatted_data?: {
        owners?: Owner[];
    };
}

export interface OwnerSelectionProps {
    allselectedOwners: Owner[];
    onOwnersChange: (owners: Owner[]) => void;
}

export type OwnerFormInputs = {
    firstName: string;
    surname: string;
    fatherName: string;
    vatNo: string;
};

export type EditingOwnerType = {
    owner: Owner;
    index: number;
};

export type SelectedProperty = {
    index: number;
    value: string;
};
