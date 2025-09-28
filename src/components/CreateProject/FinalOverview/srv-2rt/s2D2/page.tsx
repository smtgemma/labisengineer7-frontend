"use client"

import { useGetMeQuery } from "@/redux/features/templates/allTemplateSlice"
import { format } from "date-fns"
interface allDataProps {
    owners: any[]
    engineers: any[]
    projectDescription: string
    propertyPostalCode: string
    propertyPlace: string
    propertyAddress: string
    createdAt: string
    horizontalPropertyName: string
    municipalityCommunity: string
    propertyNumber: string
    issuingAuthority: string
    kaekProperty: string
    permitNumber: string
    lastName: string
    firstName: string
    specialty: string
}

export default function S2D2({ allData }: { allData: allDataProps }) {

    const { projectDescription, horizontalPropertyName, propertyPostalCode, municipalityCommunity,
        propertyNumber, propertyAddress, propertyPlace, issuingAuthority, kaekProperty, permitNumber, createdAt, lastName, firstName, specialty, } = allData || {}
    const owner = allData?.owners?.[0] || {}
    const engineer = allData?.engineers?.[0] || {}


    const { data: userData } = useGetMeQuery()
    const signature = userData?.data?.signature

    return (
        <div className="max-w-[794px] mx-auto p-6 bg-white leading-relaxed text-sm arial">
            <h2 className="text-center text-2xl font-bold">
                ΤΕΧΝΙΚΗ ΕΚΘΕΣΗ
            </h2>
            <p className="text-sm font-semibold text-center mb-6">
                (σύμφωνα με το άρθρο 99 του ν.4495/2017)
            </p>

            <div className="text-center space-y-4">
                <div className="flex items-center justify-center gap-12">
                    <h4 className="text-sm">Έργο</h4>
                    <p className="text-sm">{projectDescription || "N/A"} = {horizontalPropertyName || "N/A"}</p>
                </div>
                <div className="flex items-center justify-center gap-12">
                    <h4 className="text-sm">Θέση</h4>
                    <p className="text-sm">
                        {propertyAddress || "N/A"}, {propertyNumber || "N/A"}, {municipalityCommunity || "N/A"} {propertyPostalCode || "N/A"}).
                    </p>
                </div>
                <div className="flex items-center justify-center gap-12">
                    <h4 className="text-sm">Ιδιοκτήτης</h4>
                    <p className="text-sm">
                        {owner?.firstName || "N/A"} {owner?.lastName || "N/A"}
                    </p>
                </div>
            </div>
            <div className="border-b-2 mb-4 p-6">
                <p className="text-sm">
                    Πρόκειται για την {horizontalPropertyName || "N/A"}:, που βρίσκεται σε πολυκατοικία, επί της οδού {propertyAddress || "N/A"}, {propertyNumber || "N/A"}:,
                    στη περιοχή: "{propertyPlace || "N/A"}" του Δήμου {municipalityCommunity || "N/A"}: Χαλάνδρι, ΤΚ {propertyPostalCode || "N/A"}, και έχει υπαχθεί στις περί
                    οριζοντίου ιδιοκτησίας διατάξεις με την υπ΄ αριθμό "number_of_establishment_of_horizontal_ownership" πράξη σύστασης του Συμβολαιογράφου
                    "notary_place/municipality" "notary_establishment_of_horizontal_ownership", σε συνδυασμό με την με αριθμό "reviews_numbers_of_establishment_of_horizontal_ownership": πράξη τροποποίησης Σ.Ο.Ι του Συμβολαιογράφου
                    ("notary_reviews_numbers_of_establishment_of_horizontal_ownership": " ,-🡪 this data you will add it when a notary have different name from previous)
                </p>
                {/* -🡪 this data you will add it when a notary have different name from previous) */}
                <p className="mt-4">
                    Η οικοδομή έχει ανεγερθεί σύμφωνα με την υπ΄αριθμόν {permitNumber || "N/A"}: οικοδομική άδεια της {issuingAuthority || "N/A"}, και σύμφωνα με την υπ΄ αριθμόν "license_number_revision"
                    αναθεώρηση αυτής, σε οικόπεδο , "within_outside_city_plan", συνολικής επιφάνειας Ε= "plot_area":. Η ως άνω "horizontal_property_name" αποτελεί ιδιοκτησία σε ποσοστό "ownership percentage of the owner "και είδος ιδιοκτησίας, "Owner's type of ownership" κυριότητα, τον "last_name owner 1" "first_name owner 1":  και σε ποσοστό "ownership percentage of the owner "και είδος ιδιοκτησίας
                    "Owner's type of ownership" κυριότητα, την "last_name owner 2" "first_name owner 2" και έχει δηλωθεί στο κτηματολόγιο με αριθμό ΚΑΕΚ {kaekProperty || "N/A"}
                </p>
            </div>
            <div className="border-b-2 p-6">
                {/* If you extract data from Law 3843/2010, then add this text, otherwise omit it. */}
                <p className="mt-4">
                    Στην {horizontalPropertyName || "N/A"}, έχει πραγματοποιηθεί τακτοποίηση σύμφωνα με τις διατάξεις του ν. 3843/2010,
                    η οποία ολοκληρώθηκε στις "completion_declaration_date_3843_2010"με αριθμό πρωτοκόλλου "completion_declaration_3843_2010_number",
                    στην αρμόδια issuing_authority_3843_2010.Το σχετικό έγγραφο έχει αναρτηθεί στο πληροφοριακό σύστημα του ΤΕΕ,
                    στο πεδίο “Έγγραφα ρύθμισης με προηγούμενους νόμους” (Ν. 1337/83, Ν. 3843/10 κ.λπ.).
                </p>
                <p className="mt-4">
                    Σύμφωνα με την σημερινή μας αυτοψία και συγκρίνοντας τα εγκεκριμένα Πολεοδομικά σχέδια της υπ΄αριθμόν
                    {permitNumber || "N/A"} οικοδομικής αδείας και "license_number_revision": αναθεώρησης αυτής,
                    διαπιστώθηκαν οι παρακάτω πολεοδομικές παραβάσεις που τακτοποιούνται με την παρούσα δήλωση :
                </p>
                {/* sheet 1  */}
                <p className="mt-2">
                    Φ.Κ. # 1 (Descripsions valitation from Sheet 1) ….. – Category 1,2,4,5 (The category that selected from user at sheet 1) ,
                    Έτος κατασκευής: από 1/1/2004 μέχρι 28/7/2011
                    (The date that selected from user at sheet 1). Comment from Sheet 1
                </p>
                {/* sheet 2 */}
                <p className="mt-2">
                    Φ.Κ. # 2. (Descripsions valitation from Sheet 2) ….. – Category 1,2,4,5 (The category that selected from user at sheet 2) ,
                    Έτος κατασκευής: από 1/1/2004 μέχρι 28/7/2011
                    (The date that selected from user at sheet 2). Comment from Sheet 1
                </p>
                {/* sheet 3  */}
                <p className="mt-2">
                    Φ.Κ. # 3. (Descripsions valitation from Sheet 3) ….. – Category 1,2,4,5 (The category that selected from user at sheet 3) ,
                    Έτος κατασκευής: από 1/1/2004 μέχρι 28/7/2011 (The date that selected from user at sheet 3). Comment from Sheet 3.
                </p>
                <p>
                    Ο χρόνος κατασκευής των ανωτέρω αυθαίρετων κατασκευών τεκμηριώνεται από τα προσκομισθέντα στοιχεία, τα οποία επιβεβαιώνουν ότι
                    οι κατασκευές προϋπήρχαν της 28.07.2011.
                </p>
                <p>Συγκεκριμένα, χρησιμοποιήθηκαν:</p>
                <p>
                    Αεροφωτογραφίες έτους
                    {/* {{evidence.aerial_year}}, */}
                    στις οποίες διακρίνονται οι αυθαίρετες επεμβάσεις.
                </p>
                <p>
                    Υπεύθυνη Δήλωση Ιδιοκτήτη ,στην οποία δηλώνεται ο χρόνος εκτέλεσης των εργασιών.
                </p>
                <p>
                    Με βάση τα ανωτέρω, τεκμαίρεται ότι οι κατασκευές υφίστανται πριν την κρίσιμη ημερομηνία
                    της 28/07/2011, και συνεπώς είναι επιλέξιμες για υπαγωγή στις διατάξεις του Ν.4495/20
                </p>
            </div>
            <div className="p-6 border-b-2">
                {/* If category 3 is selected, add the following text: */}
                <p>Φ.Κ. # 4. Αυθαίρετες μικρές παραβάσεις της κατηγορίας 3 του άρθρου 96, του Ν.4495/17 ,Κατηγορία 3,Έτος κατασκευής: από 1/1/2004 μέχρι 28/7/2011.
                    ( (The date that selected from user at sheet 1). (Descripsions valitation from Sheet 4) . Comment from Sheet 4
                </p>
                {/* If the user checks the box with other violations, add this text */}
                <p>
                    Φ.Κ. # 5. Λοιπές Πολεοδομικές παραβάσεις του άρθρου 100 του Ν.4495/2017 - (Descripsions valitation from Sheet 5), Comment from Sheet 5 και σύμφωνα με το Παράρτημα Β
                    του Ν.4495/2017 ορίζονται ως (1) Πολεοδομική παράβαση. (επισυνάπτεται αναλυτικός προυπολογισμός).
                </p>

                {/* If on Question (1) the user selected a) add this text */}
                <p>
                    Βάσει της παραγράφου 5 του άρθρου 98 του ν. 4495/2017, όπως τροποποιήθηκε από το ν.4759/2020, είναι δυνατή η υπαγωγή των άνω αυθαιρεσιών επί κοινοχρήστων στο νόμο αυτό, χωρίς τη συναίνεση των λοιπών συνιδιοκτητών καθώς η υπέρβαση δόμησης υφίσταται από την ανέγερση-κατασκευή
                    της οικοδομής ΚΑΙ είναι μέσα στο νόμιμο όγκο του κτιρίου.
                </p>

                {/* If on Question (1) the user selected b) add this text */}
                <p>
                    Το περίγραμμα της οριζόντιας ιδιοκτησίας ταυτίζεται με αυτό της υπ΄ αριθμόν "number_of_establishment_of_horizontal_ownership" πράξη σύστασης του Συμβολαιογράφου "notary_place/municipality" "notary_establishment_of_horizontal_ownership", σε συνδυασμό με την με αριθμό "reviews_numbers_of_establishment_of_horizontal_ownership": πράξη του Συμβολαιογράφου("notary_reviews_numbers_of_establishment_of_horizontal_ownership":
                    " , this data you will add it when a notary have different name from previous)
                </p>
                {/* If on Question (1) the user selected c) add this text */}
                <p>
                    Βεβαιώνεται ότι ευρέθη απόκλιση έως 2 % σε σχέση με της επιφάνεια και το περίγραμμα της υπ΄ αριθμόν αριθμό "number_of_establishment_of_horizontal_ownership" πράξη σύστασης του Συμβολαιογράφου "notary_place/municipality" "notary_establishment_of_horizontal_ownership", σε συνδυασμό με την με αριθμό "reviews_numbers_of_establishment_of_horizontal_ownership": πράξη του Συμβολαιογράφου("notary_reviews_numbers_of_establishment_of_horizontal_ownership": " , this data you will add it when a notary have different name from previous συνεπώς συντρέχουν οι προϋποθέσεις του άρθρου 16 παράγραφος 1.β του ν.5142/2024 , και δεν απαιτείται η τροποποίηση ή διόρθωση των πράξεων σύστασης και των τίτλων κτήσης,
                    προκειμένου για τη μεταβίβαση των οριζοντίων ή καθέτων ιδιοκτησιών ή για τη σύσταση εμπραγμάτων δικαιωμάτων επί αυτών.
                </p>
                {/* If on Question (1) the user selected d)  you don't add anything */}

            </div>
            <div className="p-6 border-b-2">
                {/* If on Question (2) the user selected a) add this text  */}
                <p>
                    Σύμφωνα με την παράγραφο 1.α του άρθρου 16 του Ν.5142/2024 ο παραπάνω ιδιοκτήτης μπορεί να προβεί σε μονομερώς συμβολαιογραφική πράξη τροποποίησης της οριζόντιας ιδιοκτησίας του. Η επιφάνεια, το περίγραμμα και η χρήση της οριζόντιας ιδιοκτησίας είναι ταυτόσημη με την υπαγωγή στις διατάξεις του Ν. 4495/2017 και την πραγματική κατάσταση, έχει αποτυπωθεί στην Ηλεκτρονική ταυτότητα, δε θίγονται κοινόχρηστοι χώροι και
                    δε θίγονται υφιστάμενα συνολικά ποσοστά συνιδιοκτησίας της οριζόντιας ιδιοκτησίας επί του γεωτεμαχίου και κατανομής κοινοχρήστων δαπανών.
                </p>
                {/* If on Question (2) the user selected b) add this text  */}
                <p>
                    Βεβαιώνεται ότι ευρέθη απόκλιση έως 2 % σε σχέση με της επιφάνεια και το περίγραμμα της υπ΄ αριθμόν αριθμό "number_of_establishment_of_horizontal_ownership" πράξη σύστασης του Συμβολαιογράφου "notary_place/municipality" "notary_establishment_of_horizontal_ownership", σε συνδυασμό με την με αριθμό "reviews_numbers_of_establishment_of_horizontal_ownership": πράξη του Συμβολαιογράφου("notary_reviews_numbers_of_establishment_of_horizontal_ownership": " , this data you will add it when a notary have different name from previous συνεπώς συντρέχουν οι προϋποθέσεις του άρθρου 16 παράγραφος 1.β του ν.5142/2024 , και δεν απαιτείται η τροποποίηση ή διόρθωση των πράξεων σύστασης και
                    των τίτλων κτήσης, προκειμένου για τη μεταβίβαση των οριζοντίων ή καθέτων ιδιοκτησιών ή για τη σύσταση εμπραγμάτων δικαιωμάτων επί αυτών.
                </p>
                {/* If on Question (2) the user selected c) add this text  */}
                <p>
                    Το περίγραμμα της οριζόντιας ιδιοκτησίας ταυτίζεται με αυτό της υπ΄ αριθμόν "number_of_establishment_of_horizontal_ownership" πράξη σύστασης του Συμβολαιογράφου "notary_place/municipality" "notary_establishment_of_horizontal_ownership", σε συνδυασμό με την με αριθμό "reviews_numbers_of_establishment_of_horizontal_ownership":
                    πράξη του Συμβολαιογράφου("notary_reviews_numbers_of_establishment_of_horizontal_ownership": " , this data you will add it when a notary have different name from previous)
                </p>
                {/* If on Question (2) the user selected d)  you don't add anything  */}

            </div>
            <div className="p-6 border-b-2">
                {/* If on Question (3) the user selected a) add this text  */}
                <p>
                    Το περίγραμμα της οριζόντιας ιδιοκτησίας δεν ταυτίζεται με αυτό της υπ΄ αριθμόν "number_of_establishment_of_horizontal_ownership" πράξη σύστασης του Συμβολαιογράφου "notary_place/municipality" "notary_establishment_of_horizontal_ownership", σε συνδυασμό με την με αριθμό "reviews_numbers_of_establishment_of_horizontal_ownership": πράξη του Συμβολαιογράφου("notary_reviews_numbers_of_establishment_of_horizontal_ownership":
                    " , this data you will add it when a notary have different name from previous)
                </p>
                {/* If on Question (3) the user selected b) add this text  */}
                <p>
                    Βεβαιώνεται ότι ευρέθη απόκλιση έως 2 % σε σχέση με της επιφάνεια και το περίγραμμα της υπ΄ αριθμόν αριθμό "number_of_establishment_of_horizontal_ownership"
                    πράξη σύστασης του Συμβολαιογράφου "notary_place/municipality" "notary_establishment_of_horizontal_ownership", σε συνδυασμό με την με αριθμό "reviews_numbers_of_establishment_of_horizontal_ownership": πράξη του Συμβολαιογράφου("notary_reviews_numbers_of_establishment_of_horizontal_ownership": " , this data you will add it when a notary have different name from previous συνεπώς συντρέχουν οι προϋποθέσεις του άρθρου 16 παράγραφος 1.β του ν.5142/2024 , και δεν απαιτείται η τροποποίηση ή διόρθωση των πράξεων σύστασης και των τίτλων κτήσης, προκειμένου για τη μεταβίβαση των οριζοντίων ή καθέτων ιδιοκτησιών ή για τη σύσταση εμπραγμάτων δικαιωμάτων επί αυτών.
                </p>
                {/* If on Question (3) the user selected c) add this text  */}
                <p>
                    Το περίγραμμα της οριζόντιας ιδιοκτησίας ταυτίζεται με αυτό της υπ΄ αριθμόν "number_of_establishment_of_horizontal_ownership"
                    πράξη σύστασης του Συμβολαιογράφου "notary_place/municipality" "notary_establishment_of_horizontal_ownership", σε συνδυασμό με την με αριθμό "reviews_numbers_of_establishment_of_horizontal_ownership": πράξη του Συμβολαιογράφου("notary_reviews_numbers_of_establishment_of_horizontal_ownership": " , this data you will add it when a notary have different name from previous)
                </p>
                {/* If on Question (4) the user selected b) No add this text */}
            </div>
            <div className="p-6 border-b-2">
                {/* If on Question (4) the user selected a) Yes add this text  */}
                <p>
                    Οι ανωτέρω αυθαίρετες κατασκευές εμπίπτουν στις περιπτώσεις και τις διατάξεις των άρθρων 1 και 2 της απόφασης ΥΠΕΝ/ΔΑΟΚΑ/19409/1507(ΦΕΚ 1643 Β΄/11-5-2018), και ως εκ τούτου δεν
                    απαιτείται μελέτη στατικής επάρκειας και αντ’ αυτής υποβάλλεται τεχνική έκθεση στατικού ελέγχου.
                </p>
                {/* If on Question (4) the user selected b) Yes add this text  */}
                <p>
                    Από τις ανωτέρω αυθαίρετες κατασκευές, υπάρχουν περιπτώσεις που εμπίπτουν στις διατάξεις του άρθρου 1 της υπ’ αριθμ. ΥΠΕΝ/ΔΑΟΚΑ/19409/1507 (ΦΕΚ 1643/Β’/11-5-2018), περί υποχρέωσης εκπόνησης μελέτης
                    στατικής επάρκειας· η οποία έχει εκπονηθεί και υποβληθεί στο πληροφοριακό σύστημα του ΤΕΕ.»
                </p>
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="my-4 text-center">
                    <h2>Hμερομηνία</h2>
                    <p><p>{createdAt
                        ? format(new Date(createdAt), "dd/MM/yyyy")
                        : "N/A"}</p></p>
                    <h3>Ο Συντάξας Μηχανικός</h3>
                </div>
                <div className="text-center">
                    <h3>{engineer?.firstName || "N/A"} {engineer?.lastName || "N/A"}</h3>
                    <p>{specialty || "N/A"}</p>
                    <p>Α.Μ. ΤΕΕ: 123456</p>
                </div>
                {/* signature  */}
                <div className="flex items-center justify-end p-4">
                    <img src={signature} alt="" />
                </div>
            </div>

        </div>
    )
}
