"use client"

import StampComponent from "../../shared/signture/signture"

export default function F7D2() {

  return (
    <div className="max-w-[794px] mx-auto p-6 bg-white">
      {/* Title */}
      <h2 className="text-center font-semibold underline text-sm mb-2">
        ΤΕΧΝΙΚΗ ΕΚΘΕΣΗ ΕΡΓΑΣΙΩΝ - ΒΕΒΑΙΩΣΗ ΜΗΧΑΝΙΚΟΥ
      </h2>

      {/* Project Information */}
      <div className="mb-8 space-y-4">
        <div className="flex items-start justify-between max-w-[450px]">
          <span className=" min-w-[80px] text-sm">Έργο:</span>
          <h3 className=" text-sm">PROJECT DESCRIPTION</h3>
        </div>

        <div className="flex items-start justify-between gap-4 max-w-xl">
          <span className=" text-sm">Θέση:</span>
          <h3 className=" text-sm">ADDRESS, TOWN/AREA , POSTAL CODE ( FOR BUILDING)</h3>
        </div>

        <div className="flex items-start justify-between max-w-[400px] ml-[40px] text-sm">
          <span className="">Ιδιοκτήτης:</span>
          <h3 className=" text-sm">OWNER/OWNERS</h3>
        </div>
      </div>

      {/* Main Description */}
      <div className="text-sm mb-4 ml-10">
        <p>Στο ακίνητο <span className="font-semibold">Description for building/ horiontal property</span> επί της οδού <br /> <span className="font-semibold">Address,Town/Area , postal code ( FOR BUILDING),</span>
          πρόκειται να <br /> εκτελεσθούν οι παρακάτω εργασίες :</p>
      </div>

      <div className="space-y-6 ml-10">
        <div>
          <h3 className="text-sm font-bold">

            ● Καθαίρεση εσωτερικών τοιχοποιιών και απομάκρυνση μπαζών</h3>
          <p className="text-sm mb-6">
            Αποξήλωση τοιχοποιιών από τούβλο ή γυψοσανίδα, απομάκρυνση μπαζών και καθαρισμός χώρου. Περιλαμβάνει χρήση κοπτικών εργαλείων και προστασία γειτονικών κατασκευών.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-bold">●  Αποξηλώσεις υφιστάμενων εσωτερικών κουφωμάτων/πορτών, ντουλαπιών κουζίνας και ντουλαπών</h3>
          <p className="text-sm mb-6">
            Αφαίρεση με προσοχή για ελαχιστοποίηση φθορών, απομάκρυνση από τον χώρο και καθαρισμός υπολειμμάτων
          </p>
        </div>
        <div>
          <h3 className="text-sm font-bold">● Αποξηλώσεις παλαιών ειδών υγιεινής</h3>
          <p className="text-sm mb-6">
            Αποσύνδεση και απομάκρυνση λεκάνης, νιπτήρα, μπανιέρας ή καμπίνας, με ασφαλή τρόπο, χωρίς πρόκληση φθοράς σε δίκτυα ύδρευσης/αποχέτευσης
          </p>
        </div>
        <div>
          <h3 className="text-sm font-bold">● Μικρές οικοδομικές εργασίες – Σοβατίσματα – Στοκαρίσματα τοιχοποιιών</h3>
          <p className="text-sm mb-6">
            Επιδιορθώσεις τοίχων, εφαρμογή σοβά για ευθυγράμμιση επιφανειών, στοκάρισμα αρμών και ατελειών με υλικά κατάλληλα για βάψιμο ή επικάλυψη
          </p>
        </div>
        <div>
          <h3 className="text-sm font-bold">●  Ηλεκτρολογικές εργασίες</h3>
          <p className="text-sm mb-6">
            Νέες καλωδιώσεις σε υπάρχουσες ή νέες οδεύσεις, τοποθέτηση πριζών, διακοπτών, παροχών ρεύματος και πίνακα, βάσει προδιαγραφών ασφαλείας.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-bold">● Υδραυλικές εργασίες</h3>
          <p className="text-sm mb-6">
            Νέες σωληνώσεις παροχής και αποχέτευσης σε χώρο λουτρού/WC και κουζίνας, σύνδεση με υπάρχον δίκτυο, τοποθέτηση νέων ειδών υγιεινής, σιφώνια, νιπτήρες, καζανάκια κ.ά
          </p>
        </div>
        <div>
          <h3 className="text-sm font-bold">● Γεμίσματα δαπέδων</h3>
          <p className="text-sm mb-6">
            Στρώση γεμισμάτων για εξισορρόπηση υψομετρικών διαφορών ή απόκρυψη εγκαταστάσεων. Εφαρμογή με ελαφρομπετόν ή τσιμεντοκονία, επιπέδωση και φινίρισμα.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-bold">● Τρίψιμο και γυάλισμα ξύλινου παρκέ</h3>
          <p className="text-sm mb-6">
            Λείανση με ειδικά μηχανήματα, στοκάρισμα και εφαρμογή προστατευτικού βερνικιού για ανανέωση της όψης και αντοχής του ξύλινου δαπέδου.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-bold">● Τρίψιμο και γυάλισμα μαρμάρων</h3>
          <p className="text-sm mb-6">
            Λείανση, στοκάρισμα και κρυσταλλοποίηση μαρμάρινων επιφανειών για αποκατάσταση λάμψης και καθαρότητας επιφάνειας.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-bold">● Τοποθέτηση πλακιδίων σε δάπεδο και τοίχους WC/Κουζίνας</h3>
          <p className="text-sm mb-6">
            Προετοιμασία υποστρώματος, επικόλληση νέων πλακιδίων με κόλλα, αρμολόγηση και καθαρισμός.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-bold">● Κατασκευή από ξηρά δόμηση – Χώρισμα 1+1, Επένδυση 0+1 σε τοιχοποία και Οροφή από γυψοσανίδα</h3>
          <p className="text-sm mb-6">
            Κατασκευή χωρισμάτων με μεταλλικό σκελετό και γυψοσανίδα, πλήρωση με υλικά ηχομόνωσης. Οροφές με σκελετό και ανάρτηση, φινίρισμα με αρμόστοκο.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-bold">● Εσωτερικοί χρωματισμοί – προετοιμασία, στοκαρίσματα και εφαρμογή</h3>
          <p className="text-sm mb-6">
            Στοκάρισμα και τρίψιμο επιφανειών, εφαρμογή αστάρι και δύο χεριών βαφή σε τοίχους και ταβάνια με πλαστικό ή ακρυλικό χρώμα.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-bold">● Εξωτερικοί χρωματισμοί – προετοιμασία, στοκαρίσματα και εφαρμογή</h3>
          <p className="text-sm mb-6">
            Στοκάρισμα και τρίψιμο επιφανειών, εφαρμογή αστάρι και δύο χεριών βαφή σε τοίχους και ταβάνια με πλαστικό ή ακρυλικό χρώμα.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-bold">● Τοποθέτηση νέων κουφωμάτων αλουμινίου στα ίδια ανοίγματα</h3>
          <p className="text-sm mb-6">
            Αφαίρεση παλιών κουφωμάτων, τοποθέτηση νέων κουφωμάτων (παράθυρα/μπαλκονόπορτες) αλουμινίου με διπλά υαλοστάσια και θερμοδιακοπή.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-bold">● Αντικατάσταση ξύλινων επιφανειών στην κουζίνα & νέα εσωτερικά κουφώματα και ντουλάπες</h3>
          <p className="text-sm mb-6">
            Αντικατάσταση παλαιών ντουλαπιών κουζίνας με νέα, τοποθέτηση νέων εσωτερικών πορτών MDF/laminate, νέες ντουλάπες υπνοδωματίων.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-bold">● Τοποθέτηση και μετακίνηση νέων σωμάτων καλοριφέρ
          </h3>
          <p className="text-sm mb-6">
            Αποσύνδεση/τοποθέτηση νέων σωμάτων, μεταφορά σημείων βάσει μελέτης, νέα σωληνώσεις και υδραυλικές συνδέσεις, εξαερώσεις και δοκιμή.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-bold">● Θέρμανση / Ψύξη – Κλιματισμός
          </h3>
          <p className="text-sm mb-6">
            Τοποθέτηση κλιματιστικών (split unit, πολυδιαιρούμενα), προκαλωδίωση & σωληνώσεις ψυκτικού υγρού (χωνευτά), αντικατάσταση λεβητοστασίου ή μετάβαση σε αντλία θερμότητας, τοποθέτηση θερμοστατών – ζωνών θέρμανσης.
          </p>
        </div>
        <div>
          <p className="text-sm mb-6">
            <span className="text-sm font-bold">Βάσει των ισχυουσών πολεοδομικών και αστικών διατάξεων</span> για τις προβλεπόμενες εργασίες που πρόκειται να υλοποιηθούν στη συγκεκριμένη ιδιοκτησία, <span className="text-sm font-bold">δεν απαιτείται η συναίνεση των λοιπών συνιδιοκτητών της πολυκατοικίας.</span>
          </p>
          <p className="text-sm mb-6">Ο λόγος είναι ότι:</p>
          <p className="text-sm">● Το σύνολο των εργασιών πρόκειται να εκτελεστεί αποκλειστικά εντός του περιγράμματος της ιδιοκτησίας, χωρίς επέμβαση σε κοινόχρηστους ή κοινόκτητους χώρους.</p>
          <p className="text-sm">● Δεν υφίσταται επέμβαση σε στατικά, φέροντα ή κοινόχρηστα δομικά στοιχεία του κτιρίου.</p>
          <p className="text-sm">● Δεν πραγματοποιούνται επεμβάσεις σε δίκτυα ή υποδομές που εξυπηρετούν άλλες ιδιοκτησίες (όπως δίκτυα θέρμανσης, ύδρευσης ή πυρασφάλειας κοινόχρηστων χώρων).</p>
        </div>
        <div>
          <h3 className="text-sm font-bold underline mb-6">Συνεπώς, δεν απαιτείται σύγκληση ή απόφαση γενικής συνέλευσης ή άλλη μορφή συναίνεσης των υπολοίπων συνιδιοκτητών, για την εκτέλεση των εν λόγω εργασιών.</h3>
          <p className="text-sm mb-6">
            Η παρούσα δήλωση αποτελεί στοιχείο τεκμηρίωσης για τον φάκελο του έργου, σύμφωνα και με το ισχύον νομικό πλαίσιο (Ν. 4495/2017).
          </p>
        </div>
        {/* {/* Signature Section */}
        <div className="mt-6 text-right flex items-center justify-center p-5">
          <div className="max-w-[300px]">

            <div className="text-center">
              <p>Ημερομηνία :</p>
              <p>6/25/2025</p>
            </div>
            <div className="">
              <h3 className="text-center mb-4">Ο ΜΗΧΑΝΙΚΟΣ</h3>
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
    </div>
  )
}



