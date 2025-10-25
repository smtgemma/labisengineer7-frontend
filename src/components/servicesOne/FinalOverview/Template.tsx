"use client";

import React from "react";

export default function TemplateFile() {
  return (
    <div className="max-w-[794px] mx-auto bg-white p-6 text-black">
      <div className="text-center mb-6">
        <div className="w-16 h-16 mx-auto mb-4 bg-white border border-black rounded-full flex items-center justify-center">
          <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
            <div className="w-8 h-8 bg-white rounded-sm"></div>
          </div>
        </div>
        <h1 className="text-xl font-bold mb-2">ΥΠΕΥΘΥΝΗ ΔΗΛΩΣΗ</h1>
        <p className="text-sm">(άρθρο 8 Ν.1599/1986)</p>
      </div>

      <div className="text-center mb-6 text-sm">
        <p>
          Η ακρίβεια των στοιχείων που υποβάλλονται με αυτή τη δήλωση μπορεί να
          ελεγχθεί με βάση το αρχείο άλλων υπηρεσιών
        </p>
        <p>(άρθρο 8 παρ. 4 Ν.1599/1986)</p>
      </div>

      <div className="border border-black">
        <div className="border-b border-black bg-white">
          <div className="flex">
            <div className="w-20 p-2 border-r border-black font-bold text-sm">
              ΠΡΟΣ(1):
            </div>
            <div className="flex-1 p-2 font-bold">YDOM</div>
          </div>
        </div>

        <div className="border-b border-black">
          <div className="flex">
            <div className="w-32 p-2 border-r border-black text-sm">
              Ο-Η Όνομα
            </div>
            <div className="w-40 p-2 border-r border-black font-bold">
              Name Owner
            </div>
            <div className="w-20 p-2 border-r border-black text-sm">
              Επώνυμο
            </div>
            <div className="flex-1 p-2 font-bold">Surname Owner</div>
          </div>
        </div>

        <div className="border-b border-black">
          <div className="flex">
            <div className="w-32 p-2 border-r border-black text-sm">
              Όνομα και Επώνυμο Πατρός
            </div>
            <div className="flex-1 p-2">Fathers name and surname Owner</div>
          </div>
        </div>

        <div className="border-b border-black">
          <div className="flex">
            <div className="w-32 p-2 border-r border-black text-sm">
              Όνομα και Επώνυμο Μητρός
            </div>
            <div className="flex-1 p-2">Mothers name and surname Owner</div>
          </div>
        </div>

        <div className="border-b border-black">
          <div className="flex">
            <div className="w-32 p-2 border-r border-black text-sm">
              Ημερομηνία γέννησης(2):
            </div>
            <div className="flex-1 p-2">Born date Owner</div>
          </div>
        </div>

        <div className="border-b border-black">
          <div className="flex">
            <div className="w-32 p-2 border-r border-black text-sm">
              Τόπος Γέννησης
            </div>
            <div className="flex-1 p-2">Born Town owner</div>
          </div>
        </div>

        <div className="border-b border-black">
          <div className="flex">
            <div className="w-32 p-2 border-r border-black text-sm">
              Αριθμός Δελτίου Ταυτότητας
            </div>
            <div className="w-20 p-2 border-r border-black">ID</div>
            <div className="w-16 p-2 border-r border-black text-sm">Τηλ.:</div>
            <div className="flex-1 p-2">mobile</div>
          </div>
        </div>

        <div className="border-b border-black">
          <div className="flex">
            <div className="w-32 p-2 border-r border-black text-sm">
              Τόπος κατοικίας
            </div>
            <div className="w-20 p-2 border-r border-black">Town</div>
            <div className="w-16 p-2 border-r border-black text-sm">Οδός</div>
            <div className="w-24 p-2 border-r border-black">Address</div>
            <div className="w-16 p-2 border-r border-black text-sm">Αριθ</div>
            <div className="w-20 p-2 border-r border-black">Number</div>
            <div className="w-12 p-2 border-r border-black text-sm">ΤΚ</div>
            <div className="flex-1 p-2">postal code</div>
          </div>
        </div>

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
            <div className="w-32 p-2">email owner</div>
          </div>
        </div>

        <div className="border-b border-black">
          <div className="flex">
            <div className="w-32 p-2 border-r border-black text-sm">
              Α.Φ.Μ.:
            </div>
            <div className="flex-1 p-2">VAT owner</div>
            <div className="w-32 p-2 border-l border-black text-sm">
              Δ.Ο.Υ.:
            </div>
          </div>
        </div>

        <div className="p-4 text-sm">
          <p className="mb-4">
            Με στοιχεία μου ευθύνη και γνωρίζοντας τις κυρώσεις(3), που
            προβλέπονται από τις διατάξεις της παρ. 6 του άρθρου 22 του
            Ν.1599/1986, δηλώνω ότι:
          </p>

          <p className="mb-4">
            ως Κύριος/διοικητής του ακινήτου που βρίσκεται επί της οδού
            (Address, Number, Town, Postal code), συναινώ ρητά και ανεπιφύλακτα
            στην έκδοση Έγκρισης Εργασιών Μικρής Κλίμακας για την εκτέλεση των
            εργασιών,
          </p>

          <p className="mb-4">για το έργο με τίτλο :</p>
          <p className="font-bold">PROJECT DESCRIPTION</p>
        </div>

        <div className="p-4 text-sm border-t border-black">
          <p>
            Η παρούσα δήλωση παρέχεται αποκλειστικά για την κάλυψη των
            απαιτήσεων του άρθρου 29 του Ν.4495/2017 και των σχετικών
            κανονιστικών πράξεων.
          </p>
        </div>

        <div className="border-t border-black">
          <div className="flex justify-end p-4">
            <div className="text-right space-y-2">
              <div className="flex items-center gap-4">
                <span className="text-sm">Ημερομηνία :</span>
                <span className="text-sm font-medium">8/2/2025</span>
              </div>
              <div className="text-sm mt-8">
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
