// import StampComponent from "@/component/shared/dashed/Dashed";
"use client";

import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

export default function DesignThree() {
  const stepByStepData: any = useSelector((state: RootState) => state.aiData);
  console.log(stepByStepData);
  const dataAllFIled = stepByStepData?.aiInputData;

  console.log("dataAllFIled------------------------------>", dataAllFIled);
  const { owners } = dataAllFIled;
  const {
    address,
    afm,
    birthDate,
    birthPlace,
    city,
    email,
    fatherName,
    firstName,
    lastName,
    motherName,
    phone,
    postalCode,
  } = owners[0];
  return (
    <div className="max-w-[794px] mx-auto p-4 bg-white">
      {/* Header with coat of arms */}
      <div className="text-center mb-6">
        <div className="w-16 h-16 mx-auto mb-4  rounded-full flex items-center justify-center">
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
      <div className="border ">
        {/* ΠΡΟΣ row */}
        <div className="border-b">
          <div className="flex">
            <div className="w-20 p-2 border-r  font-bold text-sm">ΠΡΟΣ(1):</div>
            <div className="flex-1 p-2  font-bold">YDOM</div>
          </div>
        </div>

        {/* Name Engineer row */}
        <div className="border-b ">
          <div className="flex">
            <div className="w-32 p-2 border-r  text-sm">Ο-Η Όνομα</div>
            <div className="w-40 p-2 border-r   font-bold">Name Engineer</div>
            <div className="w-20 p-2 border-r  text-sm">Επώνυμο</div>
            <div className="flex-1 p-2  font-bold">Surname Engineer</div>
          </div>
        </div>

        {/* Father's name row */}
        <div className="border-b ">
          <div className="flex">
            <div className="w-50 p-2 border-r  text-sm">
              Όνομα και Επώνυμο Πατρός
            </div>
            <div className="flex-1 p-2 font-bold">
              Fathers name and surname Engineer{`${fatherName}` || "N/A"}
            </div>
          </div>
        </div>

        {/* Mother's name row */}
        <div className="border-b ">
          <div className="flex">
            <div className="w-50 p-2 border-r  text-sm">
              Όνομα και Επώνυμο Μητρός
            </div>
            <div className="flex-1 p-2 font-bold">
              Mothers name and surname Engineer{`${motherName}` || "N/A"}
            </div>
          </div>
        </div>

        {/* Birth date row */}
        <div className="border-b ">
          <div className="flex">
            <div className="w-50 p-2 border-r  text-sm">
              Ημερομηνία γέννησης(2):
            </div>
            <div className="flex-1 p-2 font-bold">
              Born date Engineer {`${birthDate}` || "N/A"}
            </div>
          </div>
        </div>

        {/* Birth town row */}
        <div className="border-b ">
          <div className="flex">
            <div className="w-50 p-2 border-r  text-sm">Τόπος Γέννησης</div>
            <div className="flex-1 p-2 font-bold">
              Born Town Engineer {`${birthPlace}` || "N/A"}
            </div>
          </div>
        </div>

        {/* ID and mobile row */}
        <div className="border-b ">
          <div className="flex">
            <div className="w-50 p-2 border-r  text-sm">
              Αριθμός Δελτίου Ταυτότητας
            </div>
            <div className="w-30 p-2 border-r  font-bold">ID</div>
            <div className="w-24 p-2 border-r  text-sm">Τηλ.:</div>
            <div className="flex-1 p-2 font-bold">
              mobile {`${phone}` || "N/A"}
            </div>
          </div>
        </div>

        {/* Address row */}
        <div className="border-b ">
          <div className="flex">
            <div className="w-29 p-1 border-r  text-sm">Τόπος κατοικίας</div>
            <div className="w-26 p-1 border-r  font-bold ">Town</div>
            <div className="p-2 border-r  text-sm">Οδός</div>
            <div className="w-28 p-1 border-r  font-bold ">Address</div>
            <div className="w-16 p-1 border-r  text-sm">Αριθ</div>
            <div className="w-22 p-1 border-r  font-bold ">Number</div>
            <div className="w-12 p-1 border-r  text-sm">ΤΚ</div>
            <div className="flex-1 p-1 font-bold">
              postal code {`${postalCode}` || "N/A"}
            </div>
          </div>
        </div>

        {/* Contact details row */}
        <div className="border-b ">
          <div className="flex">
            <div className="w-50 p-2 border-r  text-sm flex items-center">
              Αρ. Τηλεομοιότυπου (Fax):
            </div>
            <div className="w-19 ml-2 border-r  flex items-center">-</div>
            <div className="flex">
              <div className="text-sm border-r  ml-2">
                <div>Δ/νση</div>
                <div>Ηλεκτρ.</div>
                <div>Ταχυδρομ</div>
                <div>ίου (Email):</div>
              </div>
            </div>
            <div className="w-32 p-2 underline text-sm flex items-center ml-2">
              email engineer
            </div>
          </div>
        </div>

        {/* VAT row */}
        <div className="border-b ">
          <div className="flex">
            <div className="w-32 p-2 border-r  text-sm">Α.Φ.Μ.:</div>
            <div className="w-39 p-2 font-bold">VAT Engineer</div>
            <div className="w-20 p-2 border-l text-sm border-r ">Δ.Ο.Υ.:</div>
            <div className="ml-2 flex items-center">-</div>
          </div>
        </div>

        {/* Declaration text */}
        <div className="p-4 text-sm">
          <p className="mb-4">
            Με ατομική μου ευθύνη και γνωρίζοντας τις κυρώσεις(3), που
            προβλέπονται από τις διατάξεις της παρ. 6 του άρθρου 22 του
            Ν.1599/1986, δηλώνω ότι:
          </p>

          <p className="mb-4">
            ως κύριος/ιδιοκτήτης του ακινήτου που βρίσκεται επί της οδού
            ([Address, Number, Town, Postal code],
            <span className="font-bold">
              συναινώ ρητά και ανεπιφύλακτα
            </span>{" "}
            στην έκδοση Έγκρισης Εργασιών Μικρής Κλίμακας για την εκτέλεση των
            εργασιών,
          </p>

          <p className="font-bold">για το έργο με τίτλο :</p>
          <p className=" mb-6">PROJECT DESCRIPTION</p>
        </div>

        {/* Additional disclaimer text */}
        <div className="p-4 text-sm ">
          <p className="">
            Η παρούσα δήλωση παρέχεται αποκλειστικά για την κάλυψη των
            απαιτήσεων του άρθρου 29 του Ν.4495/2017 και των σχετικών
            κανονιστικών πράξεων.
          </p>
        </div>

        {/* Signature section */}
        <div className="flex items-center justify-center">
          <div className="flex justify-end p-4">
            <div className="text-right space-y-2">
              <div className="flex items-center gap-4">
                <span className="text-sm">Ημερομηνία :</span>
                <span className="text-sm font-medium">8/5/2025</span>
              </div>
              <div className="text-sm mt-8 text-center">
                <div>( Υπογραφή )</div>
                <div className="mt-4">Ο/Η Δηλώνουσα</div>
              </div>
            </div>
          </div>
        </div>
        {/* common component  */}
        {/* <div className="flex items-center justify-center mt-6">
                    <StampComponent />
                </div> */}
      </div>
    </div>
  );
}
