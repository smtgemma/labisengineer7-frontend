"use client";
import { div } from "framer-motion/client";
import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

type OwnerData = {
  firstName: string;
  lastName: string;
  fatherName: string;
  motherName: string;
  birthDate: string;
  birthPlace: string;
  address: string;
  postalCode: string;
  city: string;
  afm: string;
  phone: string;
  email: string;
};

type ProjectData = {
  projectDescription: string;
  cadastralCode: string;
  type: string;
  construction: string;
  area: string;
  titleArea: string;
  building: string;
  floor: string;
  address: string;
  buildingCode: string;
  neighborhood: string;
  municipal: string;
};

interface LicenseLegalFormData {
  licenseNumber: string;
  licenseRevision: string;
  ydom: string;
  propertyDesc1: string;
  propertyDesc2: string;
  reexamineNumbers: string;
  notary: string;
  lotSquare: string;
  licenseIssueNumber: string;
  issueDate: string;
  issueAuthority: string;
  region: string;
}

interface EPCFormValues {
  issueDate: string;
  epcCode: string;
  protocolNumber: string;
  energyCategory: string;
  primaryEnergy: string;
  co2Emissions: string;
  zonePrice: string;
}

type OtherOpation = {
  residenceType: string;
  expectationDocument: string;
  includedInFolder: boolean;
  unauthorizedConstructions: string;
};

type FormValues = ProjectData &
  OwnerData &
  LicenseLegalFormData &
  EPCFormValues &
  OtherOpation;

// defaultValues: {
//     firstName: "Σαϊφούρ",
//     lastName: "Ραχμάν",
//     fatherName: "Νίκος",
//     motherName: "Ελένη",
//     birthDate: "1980-05-14",
//     birthPlace: "Ντάκα",
//     address: "25 Κολοκοτρώνη Street",
//     postalCode: "10562",
//     city: "Αθήνα",
//     afm: "099876543",
//     phone: "Σαϊφούρ Ραχμάν",
//     email: "ux.saifur.info@gmail.com",
//   },

const inputStyle =
  "w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500";

const AIExtractionDataInPut = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const ownerData: any = useSelector(
    (state: RootState) => state.aiData.ownerBaseData
  );
  console.log(ownerData);
  // const owners = ownerData?.formatted_data?.owners ?? null;

  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
    // Here you can send data to API
  };

  return (
    <>
      <div className="mt-[-40]">
        <h2 className="text-[#333333] text-5xl font-semibold">
          AI Extraction Data
        </h2>
        <p className=" text-[#777777] mt-3">
          Here is the extracted information. Please review and confirm.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-6xl mx-auto   rounded-xl mt-13"
      >
        <div>
          <div className="max-w-6xl mx-auto bg-white shadow-md rounded-xl p-8 py-16 ">
            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-gray-800">
              Project & Ownership Information
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Περιγραφή Έργου
                </label>
                <input
                  {...register("projectDescription")}
                  className={inputStyle}
                  placeholder="Ανακαίνιση κατοικίας"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Κτηματολογικός Κωδικός (ΚΑΕΚ)
                </label>
                <input
                  {...register("cadastralCode")}
                  className={inputStyle}
                  placeholder="065-123-000-458"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Τύπος</label>
                <input
                  {...register("type")}
                  className={inputStyle}
                  placeholder="Ανακαίνιση οικογενειακού διαμερίσματος"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Κατασκευής
                </label>
                <input
                  {...register("construction")}
                  className={inputStyle}
                  placeholder="Ανακαίνιση οικογενειακού διαμερίσματος"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Επιφάνεια Περιοχής
                </label>
                <input
                  {...register("area")}
                  className={inputStyle}
                  placeholder="120 τ.μ."
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Περιοχή Τίτλου Κυριότητας
                </label>
                <input
                  {...register("titleArea")}
                  className={inputStyle}
                  placeholder="118 τ.μ."
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Κτίριο</label>
                <input
                  {...register("building")}
                  className={inputStyle}
                  placeholder="Αριθμός Διαμερίσματος"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Όροφος</label>
                <input
                  {...register("floor")}
                  className={inputStyle}
                  placeholder="3rd Floor"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Κτίριο Διεύθυνσης
                </label>
                <input
                  {...register("address")}
                  className={inputStyle}
                  placeholder="12 Irmou Street"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Κωδικός Δόμησης
                </label>
                <input
                  {...register("buildingCode")}
                  className={inputStyle}
                  placeholder="BLG-2025-011"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Κτίριο Γειτονιάς
                </label>
                <input
                  {...register("neighborhood")}
                  className={inputStyle}
                  placeholder="Νέα Σμύρνη"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Δημοτικό/Κοινοτικό Κτίριο
                </label>
                <input
                  {...register("municipal")}
                  className={inputStyle}
                  placeholder="Δήμος Αθηναίων"
                />
              </div>
            </div>
          </div>
        </div>
        {/* owner part  */}
        {ownerData.map((owner: any, index: number) => (
          <div key={index} className="mt-10 ">
            <div className="p-6 md:p-10  bg-white rounded-xl">
              <h2 className="text-2xl font-semibold mb-6">
                Information of Owner ({index + 1})
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* First Name */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Όνομα
                  </label>
                  <input
                    {...register("firstName", { required: true })}
                    defaultValue={owner.name}
                    className={inputStyle}
                  />
                  {errors.firstName && (
                    <span className="text-red-500 text-sm">Required</span>
                  )}
                </div>

                {/* Last Name */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Επώνυμο
                  </label>
                  <input
                    {...register("lastName", { required: true })}
                    className={inputStyle}
                    defaultValue={owner.last_name}
                  />
                  {errors.lastName && (
                    <span className="text-red-500 text-sm">Required</span>
                  )}
                </div>

                {/* Father's Name */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Όνομα Πατέρα
                  </label>
                  <input
                    {...register("fatherName")}
                    className={inputStyle}
                    defaultValue={owner.fathers_name}
                  />
                </div>

                {/* Mother's Name */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Όνομα Μητέρας
                  </label>
                  <input
                    {...register("motherName")}
                    className={inputStyle}
                    defaultValue={owner.mothers_name}
                  />
                </div>

                {/* Date of Birth */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Ημερομηνία γέννησης
                  </label>
                  <input
                    type="date"
                    {...register("birthDate")}
                    className={inputStyle}
                    defaultValue={owner.date_of_birth}
                  />
                </div>

                {/* Place of Birth */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Τόπος Γέννησης
                  </label>
                  <input
                    {...register("birthPlace")}
                    className={inputStyle}
                    defaultValue={owner.place_of_birth}
                  />
                </div>

                {/* Address */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Διεύθυνση
                  </label>
                  <input
                    {...register("address")}
                    className={inputStyle}
                    defaultValue={owner.address}
                  />
                </div>

                {/* Postal Code */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Κωδικός Διεύθυνσης
                  </label>
                  <input
                    {...register("postalCode")}
                    className={inputStyle}
                    defaultValue=""
                  />
                </div>

                {/* City/Community */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Διεύθυνση Δήμος/Κοινότητα
                  </label>
                  <input {...register("city")} className={inputStyle} />
                </div>

                {/* AFM */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Αριθμός Φορολογικού Μητρώου (ΑΦΜ)
                  </label>
                  <input {...register("afm")} className={inputStyle} />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Κινητό
                  </label>
                  <input
                    {...register("phone")}
                    className={inputStyle}
                    defaultValue={owner.mobile}
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Ηλεκτρονικό Ταχυδρομείο
                  </label>
                  <input
                    type="email"
                    {...register("email")}
                    className={inputStyle}
                    defaultValue={owner.email}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* License & Legal Data  */}
        <div className="mt-10">
          <div className="bg-white p-6 rounded-xl shadow-md w-full">
            <h2 className="text-2xl font-semibold mb-6">
              License & Legal Data
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Αριθμός Άδειας
                </label>
                <input {...register("licenseNumber")} className={inputStyle} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Αναθεώρηση Αριθμού Άδειας
                </label>
                <input
                  {...register("licenseRevision")}
                  className={inputStyle}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">ΥΔΟΜ</label>
                <input {...register("ydom")} className={inputStyle} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Περιγραφή Οριζόντιας Ιδιοκτησίας
                </label>
                <input {...register("propertyDesc1")} className={inputStyle} />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Περιγραφή Οριζόντιας Ιδιοκτησίας
                </label>
                <input {...register("propertyDesc2")} className={inputStyle} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Αριθμός Ιδρύματος/Αριθμοί Επανεξέτασης
                </label>
                <input
                  {...register("reexamineNumbers")}
                  className={inputStyle}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Συμβολαιογράφος
                </label>
                <input {...register("notary")} className={inputStyle} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Τετραγωνικά Μέτρα Οικοπέδου
                </label>
                <input {...register("lotSquare")} className={inputStyle} />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Αριθμός Άδειας
                </label>
                <input
                  {...register("licenseIssueNumber")}
                  className={inputStyle}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Ημερομηνία Έκδοσης Άδειας Δόμησης
                </label>
                <input
                  {...register("issueDate")}
                  type="date"
                  className={inputStyle}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Λεπτομέρειες της Αρμόδιας Αρχής Έκδοσης
                </label>
                <input {...register("issueAuthority")} className={inputStyle} />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Περιφερειακή Ενότητα
                </label>
                <input {...register("region")} className={inputStyle} />
              </div>
            </div>
          </div>
        </div>
        {/* "Energy Performance Certificate (EPC)"  */}
        <div className="mt-10">
          <div className="bg-gray-50 rounded-xl p-6 shadow-sm w-full">
            <h2 className="text-xl font-semibold mb-6">
              "Energy Performance Certificate (EPC)"
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="form-label block mb-1 ">
                  Ημερομηνία Έκδοσης PEA
                </label>
                <input
                  {...register("issueDate")}
                  type="date"
                  className={inputStyle}
                />
              </div>
              <div>
                <label className="form-label block mb-1 ">
                  Αριθμός Ασφάλειας PEA
                </label>
                <input {...register("epcCode")} className={inputStyle} />
              </div>

              <div>
                <label className="form-label block mb-1 ">
                  Αριθμός Πρωτοκόλλου PEA
                </label>
                <input {...register("protocolNumber")} className={inputStyle} />
              </div>
              <div>
                <label className="form-label block mb-1 ">
                  Κατηγορία Υφιστάμενης Ενέργειας PEA
                </label>
                <input {...register("energyCategory")} className={inputStyle} />
              </div>

              <div>
                <label className="form-label block mb-1 ">
                  Εκτιμώμενη Ετήσια Κατανάλωση Πρωτογενούς Ενέργειας [kWh/m²]
                </label>
                <input {...register("primaryEnergy")} className={inputStyle} />
              </div>
              <div>
                <label className="form-label block mb-1 ">
                  Εκτιμώμενες Ετήσιες Εκπομπές CO₂ [kg/m²]
                </label>
                <input {...register("co2Emissions")} className={inputStyle} />
              </div>

              <div className="md:col-span-2">
                <label className="form-label block mb-1 ">Τιμή Ζώνης</label>
                <textarea
                  {...register("zonePrice")}
                  className={inputStyle}
                  rows={2}
                />
              </div>
            </div>
          </div>
        </div>

        {/* "others option  */}
        <div className="mt-10">
          <div className="bg-gray-50 rounded-xl p-6 shadow-sm w-full">
            <h2 className="text-xl font-semibold mb-6">Other Information</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="form-label block mb-1 ">Χρήση Γης</label>
                <input {...register("protocolNumber")} className={inputStyle} />
              </div>
              <div>
                <label className="form-label block mb-1 ">
                  Περιγραφή Αυθαίρετων Κατασκευών
                </label>
                <input {...register("epcCode")} className={inputStyle} />
              </div>

              <div>
                <label className="form-label block mb-1 ">
                  Έγγραφο Προσδοκίας
                </label>
                <input {...register("protocolNumber")} className={inputStyle} />
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default AIExtractionDataInPut;
