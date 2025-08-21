type F1D6Props = {
  owner_address: string;
  owner_afm: string;
  owner_birth_date: string;
  owner_birth_place: string;
  owner_city: string;
  owner_email: string;
  owner_father_name: string;
  owner_mother_name: string;
  owner_name: string;
  owner_phone: string;
  owner_postal_code: string;
  owner_surname: string;
  ydom_name: string;
};

function F1D6({
  owner_address,
  owner_afm,
  owner_birth_date,
  owner_birth_place,
  owner_city,
  owner_email,
  owner_father_name,
  owner_mother_name,
  owner_name,
  owner_phone,
  owner_postal_code,
  owner_surname,
  ydom_name,
}: F1D6Props) {
  return (
    <div className="max-w-4xl mx-auto p-4 bg-white">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="w-16 h-16 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
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
          Η ακρίβεια των στοιχείων που υποβάλλονται με αυτή τη δήλωση μπορεί να ελεγχθεί με βάση το αρχείο άλλων
          υπηρεσιών
        </p>
        <p>(άρθρο 8 παρ. 4 Ν.1599/1986)</p>
      </div>

      {/* Form table */}
      <div className="border border-gray-400">
        {/* ΠΡΟΣ row */}
        <div className="border-b border-gray-400 bg-gray-50">
          <div className="flex">
            <div className="w-24 p-2 border-r border-gray-400 font-bold text-sm">ΠΡΟΣ(1):</div>
            <div className="flex-1 p-2 font-bold">{ydom_name}</div>
          </div>
        </div>

        {/* Name row */}
        <div className="border-b border-gray-400">
          <div className="flex">
            <div className="w-40 p-2 border-r border-gray-400 text-sm">Ο-Η Όνομα</div>
            <div className="w-40 p-2 border-r border-gray-400 font-bold">{owner_name}</div>
            <div className="w-32 p-2 border-r border-gray-400 text-sm">Επώνυμο</div>
            <div className="flex-1 p-2 font-bold">{owner_surname}</div>
          </div>
        </div>

        {/* Father's name row */}
        <div className="border-b border-gray-400">
          <div className="flex">
            <div className="w-40 p-2 border-r border-gray-400 text-sm">Όνομα και Επώνυμο Πατρός</div>
            <div className="flex-1 p-2 font-bold">{owner_father_name}</div>
          </div>
        </div>

        {/* Mother's name row */}
        <div className="border-b border-gray-400">
          <div className="flex">
            <div className="w-40 p-2 border-r border-gray-400 text-sm">Όνομα και Επώνυμο Μητρός</div>
            <div className="flex-1 p-2 font-bold">{owner_mother_name}</div>
          </div>
        </div>

        {/* Birth date row */}
        <div className="border-b border-gray-400">
          <div className="flex">
            <div className="w-40 p-2 border-r border-gray-400 text-sm">Ημερομηνία γέννησης(2):</div>
            <div className="flex-1 p-2 font-bold">{owner_birth_date}</div>
          </div>
        </div>

        {/* Birth place row */}
        <div className="border-b border-gray-400">
          <div className="flex">
            <div className="w-40 p-2 border-r border-gray-400 text-sm">Τόπος Γέννησης</div>
            <div className="flex-1 p-2 font-bold">{owner_birth_place}</div>
          </div>
        </div>

        {/* Address row */}
        <div className="border-b border-gray-400">
          <div className="flex">
            <div className="w-40 p-2 border-r border-gray-400 text-sm">Τόπος κατοικίας</div>
            <div className="flex-1 p-2 font-bold">{owner_address}</div>
          </div>
        </div>

        {/* Email & phone row */}
        <div className="border-b border-gray-400 flex">
          <div className="w-40 p-2 border-r border-gray-400 text-sm">Email</div>
          <div className="flex-1 p-2 font-bold">{owner_email}</div>
          <div className="w-32 p-2 border-l border-gray-400 text-sm">Τηλ.</div>
          <div className="flex-1 p-2 font-bold">{owner_phone}</div>
        </div>

        {/* VAT row */}
        <div className="border-b border-gray-400 flex">
          <div className="w-40 p-2 border-r border-gray-400 text-sm">Α.Φ.Μ.</div>
          <div className="flex-1 p-2 font-bold">{owner_afm}</div>
          <div className="w-40 p-2 border-l border-gray-400 text-sm">ΤΚ</div>
          <div className="flex-1 p-2 font-bold">{owner_postal_code}</div>
        </div>
      </div>
    </div>
  );
}

export default F1D6;
