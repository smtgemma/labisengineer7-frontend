"use client";

export default function FileOneDesignEleven({ ydomName }: any) {
  const {
    owner_email,
    owner_postal_code,
    owner_address,
    owner_city,
    owner_phone,
    owner_birth_place,
    owner_birth_date,
    owner_father_name,
    owner_surname,
    ydom_name,
    owner_mother_name,
  } = ydomName || {};
  return (
    <div className="max-w-[794px] mx-auto p-4 bg-white">
      {/* Header with coat of arms */}
      <div className="text-center mb-6">
        <div className="w-16 h-16 mx-auto mb-4 bg-black rounded-full flex items-center justify-center">
          <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
            <div className="w-8 h-8 bg-white rounded-sm"></div>
          </div>
        </div>
        <h1 className="text-xl font-bold mb-2">ΥΠΕΥΘΥΝΗ ΔΗΛΩΣΗ</h1>
        <p className="text-sm">(άρθρο 8 Ν.1599/1986)</p>
      </div>

      {/* Subtitle */}
      <div className="text-center mb-6 text-sm">
        <p>
          Η ακρίβεια των στοιχείων που υποβάλλονται με αυτή τη δήλωση μπορεί να
          ελεγχθεί με βάση το αρχείο άλλων υπηρεσιών
        </p>
        <p>(άρθρο 8 παρ. 4 Ν.1599/1986)</p>
      </div>

      {/* Form table */}
      <div className="border border-black">
        {/* ΠΡΟΣ row */}
        <div className="border-b border-black bg-black">
          <div className="flex">
            <div className="w-20 p-2 border-r border-black font-bold text-sm">
              ΠΡΟΣ(1):
            </div>
            <div className="flex-1 p-2  font-bold">{ydom_name || "N/A"}</div>
          </div>
        </div>

        {/* Name Engineer row */}
        <div className="border-b border-black">
          <div className="flex">
            <div className="w-32 p-2 border-r border-black text-sm">
              Ο-Η Όνομα
            </div>
            <div className="w-40 p-2 border-r border-black  font-bold">
              {ydom_name || "N/A"}
            </div>
            <div className="w-20 p-2 border-r border-black text-sm">
              Επώνυμο
            </div>
            <div className="flex-1 p-2  font-bold">
              {owner_surname || "N/A"}
            </div>
          </div>
        </div>

        {/* Father's name row */}
        <div className="border-b border-black">
          <div className="flex">
            <div className="w-32 p-2 border-r border-black text-sm">
              Όνομα και Επώνυμο Πατρός
            </div>
            <div className="flex-1 p-2 font-bold">
              {owner_father_name || "N/A"}
            </div>
          </div>
        </div>

        {/* Mother's name row */}
        <div className="border-b border-black">
          <div className="flex">
            <div className="w-32 p-2 border-r border-black text-sm">
              Όνομα και Επώνυμο Μητρός
            </div>
            <div className="flex-1 p-2 font-bold">
              {owner_mother_name || "N/A"}
            </div>
          </div>
        </div>

        {/* Birth date row */}
        <div className="border-b border-black">
          <div className="flex">
            <div className="w-32 p-2 border-r border-black text-sm">
              Ημερομηνία γέννησης(2):
            </div>
            <div className="flex-1 p-2 font-bold">
              {owner_birth_date || "N/A"}
            </div>
          </div>
        </div>

        {/* Birth town row */}
        <div className="border-b border-black">
          <div className="flex">
            <div className="w-32 p-2 border-r border-black text-sm">
              Τόπος Γέννησης
            </div>
            <div className="flex-1 p-2 font-bold">
              {owner_birth_place || "N/A"}
            </div>
          </div>
        </div>

        {/* ID and mobile row */}
        <div className="border-b border-black">
          <div className="flex">
            <div className="w-32 p-2 border-r border-black text-sm">
              Αριθμός Δελτίου Ταυτότητας
            </div>
            <div className="w-20 p-2 border-r border-black font-bold">ID</div>
            <div className="w-16 p-2 border-r border-black text-sm">Τηλ.:</div>
            <div className="flex-1 p-2 font-bold">{owner_phone || "N/A"}</div>
          </div>
        </div>

        {/* Address row */}
        <div className="border-b border-black">
          <div className="flex">
            <div className="w-32 p-2 border-r border-black text-sm">
              Τόπος κατοικίας
            </div>
            <div className="w-20 p-2 border-r border-black font-bold ">
              {owner_city || "N/A"}
            </div>
            <div className="w-16 p-2 border-r border-black text-sm">Οδός</div>
            <div className="w-24 p-2 border-r border-black font-bold ">
              {owner_address || "N/A"}
            </div>
            <div className="w-16 p-2 border-r border-black text-sm">Αριθ</div>
            <div className="w-20 p-2 border-r border-black font-bold ">
              Number
            </div>
            <div className="w-12 p-2 border-r border-black text-sm">ΤΚ</div>
            <div className="flex-1 p-2 font-bold">{owner_postal_code}</div>
          </div>
        </div>

        {/* Contact details row */}
        <div className="border-b border-black">
          <div className="flex">
            <div className="w-32 p-2 border-r border-black text-sm">
              Αρ. Τηλεομοιότυπου (Fax):
            </div>
            <div className="flex-1 p-2">
              <div className="text-sm">
                <div>Δ/νση</div>
                <div>Ηλεκτρ.</div>
                <div>Ταχυδρομ</div>
                <div>ίου (Email):</div>
              </div>
            </div>
            <div className="p-2 underline ">{owner_email || "N/A"}</div>
          </div>
        </div>

        {/* VAT row */}
        <div className="border-b border-black">
          <div className="flex">
            <div className="w-32 p-2 border-r border-black text-sm">
              Α.Φ.Μ.:
            </div>
            <div className="flex-1 p-2 font-bold">VAT Engineer</div>
            <div className="w-32 p-2 border-l border-black text-sm">
              Δ.Ο.Υ.:
            </div>
          </div>
        </div>

        {/* Declaration text */}
        <div className="p-4 text-sm">
          <p className="mb-4">
            Με ατομική μου ευθύνη και γνωρίζοντας τις κυρώσεις(3), που
            προβλέπονται από τις διατάξεις της παρ. 6 του άρθρου 22 του
            Ν.1599/1986, δηλώνω ότι:
          </p>

          <p className="mb-4"></p>

          <p className="mb-4 font-bold">για το οικοδομικό έργο με τίτλο :</p>
          <p className=" mb-6">PROJECT DESCRIPTION</p>
        </div>

        {/* Additional disclaimer text */}
        <div className="p-4 text-sm ">
          <p>
            δεν προβλέπεται η παραγωγή αποβλήτων τύπου ΑΕΚΚ (Απόβλητα Εκσκαφών,
            Κατασκευών και Κατεδαφίσεων), καθώς οι προβλεπόμενες εργασίες δεν
            περιλαμβάνουν καθαιρέσεις, εκσκαφές ή κατασκευαστικές επεμβάσεις που
            να παράγουν απόβλητα ΑΕΚΚ.
          </p>
        </div>

        {/* Signature section */}
        <div className="flex items-center justify-end">
          <div className="flex justify-end p-4">
            <div className="text-right space-y-2">
              <div className="flex items-center gap-4">
                <span className="text-sm">Ημερομηνία :</span>
                <span className="text-sm font-medium">8/2/2025</span>
              </div>
              <div className="text-sm mt-8 text-center">
                <div>( Υπογραφή )</div>
                <div className="mt-4">Ο/Η Δηλώνουσα</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
