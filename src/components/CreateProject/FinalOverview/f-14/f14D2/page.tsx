
"use client"

import StampComponent from "../../shared/signture/signture"

interface allDataProps {
  owner_address: string;
  owner_city: string;
  owner_name: string;
  owner_postal_code: string;
  project_description?: string;
}


export default function F14D2({ allData }: { allData: allDataProps }) {
  
  const {
    owner_address,
    owner_city,
    owner_name,
    owner_postal_code,
    project_description,
  } = allData;

  return (
    <div className="max-w-[794px] mx-auto p-6 bg-white">
      {/* Title */}
      <h2 className="text-center font-semibold underline text-sm mb-2">
        ΤΕΧΝΙΚΗ ΕΚΘΕΣΗ ΕΡΓΑΣΙΩΝ - ΒΕΒΑΙΩΣΗ ΜΗΧΑΝΙΚΟΥ
      </h2>

      {/* Project Information */}
      <div className="mb-8 space-y-4">
        <div className="flex items-start justify-between">
          <span className=" min-w-[80px] text-sm">Έργο:</span>
          <h3 className=" text-sm">{project_description || "N/A"}</h3>
        </div>

        <div className="flex items-start justify-between gap-4 max-w-xl">
          <span className=" text-sm">Θέση:</span>
          <h3 className=" text-sm">{owner_address || "N/a"}, {owner_city || "N/A"} , {owner_postal_code || "N/A"} ( FOR BUILDING)</h3>
        </div>

        <div className="flex items-start justify-between max-w-[400px] ml-[40px] text-sm">
          <span className="">Ιδιοκτήτης:</span>
          <h3 className=" text-sm">{owner_name || "N/A"}</h3>
        </div>
      </div>

      {/* Main Description */}
      <div className="text-sm mb-4 ml-10">
        <p>Στο ακίνητο <span className="font-semibold">Description for building/ horiontal property</span> επί της οδού <br /> <span className="font-semibold">Address,Town/Area , postal code ( FOR BUILDING),</span>
          πρόκειται να <br /> εκτελεσθούν οι παρακάτω εργασίες :</p>
      </div>

      <div className="space-y-6 ml-10">
        {/* one  */}
        <div>
          <h3 className="font-bold text-sm">
            ● Τοποθέτηση ικριωμάτων επί των όψεων του κτιρίου</h3>
          <p className="text-sm">
            Περιλαμβάνεται η εγκατάσταση μεταλλικών ικριωμάτων κατά μήκος των όψεων του κτιρίου, σύμφωνα με την
            ισχύουσα νομοθεσία περί μέτρων ασφαλείας. Η τοποθέτηση διασφαλίζει ασφαλή και πλήρη πρόσβαση στα σημεία
            επέμβασης για τις εργασίες αποκατάστασης και χρωματισμού των εξωτερικών επιφανειών.
          </p>
        </div>
        {/* two */}
        <div>
          <h3 className="font-bold text-sm">
            ● Έλεγχος & Αποκατάσταση Φθαρμένων Υλικών:
          </h3>
          <p className="text-sm">
            Έλεγχος της στέγης για ανίχνευση φθαρμένων ή αποσαθρωμένων στοιχείων (κεραμίδια, επικάλυψη, υδρορροές,
            μεταλλικά στηρίγματα κ.λπ.). Αντικατάσταση ή επισκευή των φθαρμένων υλικών.
          </p>
        </div>
        {/* three */}
        <div>
          <h3 className="font-bold text-sm">
            ● Αποξήλωση παλαιών, φθαρμένων ή σαθρών κεραμιδιών ή άλλου τύπου επικάλυψης στεγών.</h3>
          <p className="text-sm">
            Αφαίρεση υποστρώσεων (π.χ. παλιά ελαφρομπετά, φύλλα ασφαλτικών μεμβρανών κ.λπ.) όπου απαιτείται.
            Αποξήλωση φθαρμένων υδρορροών και λοιπών στοιχείων απορροής ομβρίων.
          </p>
        </div>
        {/* four  */}
        <div>
          <h3 className="font-bold text-sm">
            ● Επισκευή Φέροντος Ξύλινου Σκελετού
          </h3>
          <p className="text-sm">
            Αντικατάσταση σάπιων ή φθαρμένων τμημάτων του φέροντος ξύλινου σκελετού της στέγης (π.χ. ζευκτών,
            τεγίδων, δοκαριών), χωρίς αλλαγή στη γεωμετρία και χωρίς τροποποίηση της στατικής δομής.
            Εφαρμογή αντισηπτικών και προστατευτικών υλικών στα νέα και στα υπάρχοντα ξύλινα στοιχεία.
          </p>
        </div>
        {/* five */}
        <div>
          <h3 className="font-bold text-sm">
            ● Στεγανοποίηση – Υδατοστεγανότητα
          </h3>
          <p className="text-sm">
            Εφαρμογή νέων ασφαλτικών μεμβρανών ή άλλων σύγχρονων υλικών στεγανοποίησης.
            Προσθήκη ή αντικατάσταση υδρορροών, καναλιών απορροής και τελικών στοιχείων απορροής υδάτων.
            Στεγανοποίηση αρμών και κρίσιμων σημείων διέλευσης (π.χ. καμινάδες, φωταγωγοί).
          </p>
        </div>
        {/* six */}
        <div>
          <h3 className="font-bold text-sm">
            ● Καθαρισμός Υδρορροών & Συστήματος Απορροής</h3>
          <p className="text-sm">
            Απομάκρυνση φερτών υλικών, φύλλων, και ξένων σωμάτων από υδρορροές,
            υδροσυλλέκτες και κατακόρυφες στήλες αποχέτευσης ομβρίων.
          </p>
        </div>
        {/* seven  */}
        <div>
          <h3 className="font-bold text-sm">● Τοποθέτηση Νέας Επικάλυψης Στέγης</h3>
          <p className="text-sm">
            Τοποθέτηση νέων κεραμιδιών ή άλλης εγκεκριμένης επικάλυψης (π.χ. κεραμίδια βυζαντινού ή ρωμαϊκού τύπου ή άλλο κατάλληλο υλικό).
            Εξασφάλιση σωστής πρόσδεσης και στερέωσης για αντοχή σε ανεμοπιέσεις.
            Εφαρμογή αναπνεόμενης μεμβράνης όπου απαιτείται από τη μελέτη.

          </p>
        </div>
        {/* eight  */}
        <div>
          <h3 className="font-bold text-sm">
            ● Εφαρμογή προστατευτικών επιστρώσεων (όπου απαιτείται):</h3>
          <p className="text-sm">
            Τοπική ή συνολική εφαρμογή ελαστομερούς υδατοστεγανωτικής βαφής, αν απαιτείται από τη φύση των επεμβάσεων.
          </p>
        </div>
      </div>

      {/* {/* Signature Section */}
      <div className="mt-6 text-right flex items-center justify-center p-5">
        <div className="max-w-[300px]">

          <div className="text-center mb-4">
            <p>Ημερομηνία </p>
            <p>6/25/2025</p>
          </div>
          <div className="">
            <h3 className="text-center mb-2">Ο ΣΥΝΤΑΞΑΣ</h3>
            {/* Dashed Border Box = common component*/}
            <StampComponent
              title="ΣΦΡΑΓΙΔΑ ΜΗΧΑΝΙΚΟΥ"
              instructions={[
                "Με δεξί κλικ",
                "Αλλαγή εικόνας",
                " Βάζετε την σφραγίδα σας",
              ]}
            />
          </div>
        </div>
      </div>

    </div>
  )
}



