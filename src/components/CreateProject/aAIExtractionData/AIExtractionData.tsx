"use client";
import { div } from "framer-motion/client";
import React from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { warn } from "console";
import { toast } from "sonner";
import { usePosAiAllDataSaveMutation } from "@/redux/features/AI-intrigratoin/aiServiceSlice";
import LoadingButton from "@/components/shared/LoadingBtn/LoadingButton";
import tokenCatch from "@/lib/token";
import {
  setAiExtractCatchData,
  setAiExtreactAndInputData,
} from "@/redux/features/AI-intrigratoin/aiFileDataSlice";

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
  building_permi: string;
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

interface OthersValue {
  land_use: string;
  arbitrary_constructions_description: string;
  expectation_Document: string;
}

type FormValues = ProjectData &
  LicenseLegalFormData &
  EPCFormValues &
  OtherOpation &
  OthersValue & {
    owners: OwnerData[];
  };

const inputStyle =
  "w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500";

const AIExtractionDataInPut = () => {
  const stepByStepData: any = useSelector((state: RootState) => state.aiData);
  const { register, control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      owners: stepByStepData.ownerBaseData.map((owner: any) => ({
        firstName: owner.first_name || "",
        lastName: owner.last_name || "",
        fatherName: `${owner.father_first_name || ""} ${
          owner.father_last_name || ""
        }`,
        motherName: `${owner.mother_first_name || ""} ${
          owner.mother_last_name || ""
        }`,
        birthDate: owner.date_of_birth || "",
        birthPlace: owner.place_of_birth || "",
        address: owner.owner_address || "",
        postalCode: owner.address_code || "",
        city: owner.city || "",
        afm: owner.tax_identification_number || "",
        phone: owner.mobile || "",
        email: owner.email || "",
      })),
    },
  });

  const dispatch = useDispatch();

  const { fields } = useFieldArray({
    control,
    name: "owners",
  });

  console.log(fields);

  const allExtreactData = stepByStepData.aiDataState;
  const ownerData = stepByStepData.ownerBaseData;
  const projectData = stepByStepData.projectId;
  const subCategoryData = stepByStepData.subcategory;
  const filesData = stepByStepData.multiFiles;
  console.log(filesData);

  const [postDataAll, { isLoading }] = usePosAiAllDataSaveMutation();
  console.log(allExtreactData);

  const accessToken = tokenCatch();

  const onSubmit = async (data: any) => {
    // Here you can send data to API
    console.log("Form Data:", data);
    console.log("wnaer", fields);
    const DataPost = {
      serviceId: projectData.id,
      createdById: "68972468c6c27d509568985f",
      subCategories: subCategoryData,
      ...data,
    };

    dispatch(setAiExtreactAndInputData(DataPost));
    console.log("sever send Data:", DataPost);

    const formData = new FormData();
    filesData.forEach((file: any) => {
      formData.append("files", file);
    });
    formData.append(
      "data",
      JSON.stringify({
        serviceId: projectData.id,
        createdById: "68972468c6c27d509568985f",
        subCategories: subCategoryData,
        ...data,
      })
    );

    try {
      const res = await postDataAll({ formData, accessToken }).unwrap();
      console.log("resposive", res);
      if (res?.success) {
        toast.success(res?.message);
      }
    } catch (error: any) {
      toast.error(error.data.message);
      console.log(error);
    }
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
                  // defaultValue={dataShowExtreact?.project_description}
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
                  defaultValue={allExtreactData?.kaek_property}
                  // defaultValue={dataShowExtreact?.cadastral_code_kaek}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Τύπος</label>
                <input
                  {...register("type")}
                  className={inputStyle}
                  placeholder="Ανακαίνιση οικογενειακού διαμερίσματος"
                  // defaultValue={dataShowExtreact?.property_type}
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
                  // defaultValue={
                  //   dataShowExtreact?.arbitrary_constructions_description
                  // }
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
                  defaultValue={allExtreactData?.plot_area}
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
                  defaultValue={allExtreactData?.title_area}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Κτίριο</label>
                <input
                  {...register("building")}
                  className={inputStyle}
                  placeholder="Αριθμός Διαμερίσματος"
                  // defaultValue={dataShowExtreact?.band_value}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Όροφος</label>
                <input
                  {...register("floor")}
                  className={inputStyle}
                  placeholder="3rd Floor"
                  defaultValue={allExtreactData?.floor_property}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Κτίριο Διεύθυνσης
                </label>
                <input
                  {...register("building_permi")}
                  className={inputStyle}
                  placeholder="12 Irmou Street"
                  defaultValue={allExtreactData?.permit_number}
                  // defaultValue={dataShowExtreact?.building_permit_date}
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
                  // defaultValue={dataShowExtreact?.building_code}
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
                  // defaultValue={dataShowExtreact?.neighborhood}
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
                  defaultValue={allExtreactData?.municipality_community}
                  // defaultValue={dataShowExtreact?.municipality_community}
                />
              </div>
            </div>
          </div>
        </div>
        {/* {fields.map((field, index) => (
          <div key={field.id} className="p-6 bg-white rounded-xl mb-6">
            <h2 className="text-xl font-semibold mb-4">
              Information of Owner ({index + 1})
            </h2>

            <input
              {...register(`owners.${index}.firstName`)}
              className={inputStyle}
              placeholder="First Name"
            />
            <input
              {...register(`owners.${index}.lastName`)}
              className={inputStyle}
              placeholder="Last Name"
            />
            <input
              {...register(`owners.${index}.fatherName`)}
              className={inputStyle}
              placeholder="Father Name"
            />
            <input
              {...register(`owners.${index}.motherName`)}
              className={inputStyle}
              placeholder="Mother Name"
            />
            <input
              type="date"
              {...register(`owners.${index}.birthDate`)}
              className={inputStyle}
            />
            <input
              {...register(`owners.${index}.birthPlace`)}
              className={inputStyle}
              placeholder="Birth Place"
            />
            <input
              {...register(`owners.${index}.address`)}
              className={inputStyle}
              placeholder="Address"
            />
            <input
              {...register(`owners.${index}.postalCode`)}
              className={inputStyle}
              placeholder="Postal Code"
            />
            <input
              {...register(`owners.${index}.city`)}
              className={inputStyle}
              placeholder="City"
            />
            <input
              {...register(`owners.${index}.afm`)}
              className={inputStyle}
              placeholder="AFM"
            />
            <input
              {...register(`owners.${index}.phone`)}
              className={inputStyle}
              placeholder="Phone"
            />
            <input
              {...register(`owners.${index}.email`)}
              className={inputStyle}
              placeholder="Email"
            />
          </div>
        ))} */}
        {fields.map((field, index) => (
          <div key={field.id} className="mt-10">
            <div className="p-6 md:p-10 bg-white rounded-xl">
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
                    {...register(`owners.${index}.firstName`)}
                    defaultValue={field.firstName}
                    className={inputStyle}
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Επώνυμο
                  </label>
                  <input
                    {...register(`owners.${index}.lastName`)}
                    defaultValue={field.lastName}
                    className={inputStyle}
                  />
                </div>

                {/* Father's Name */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Όνομα Πατέρα
                  </label>
                  <input
                    {...register(`owners.${index}.fatherName`)}
                    defaultValue={field.fatherName}
                    className={inputStyle}
                  />
                </div>

                {/* Mother's Name */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Όνομα Μητέρας
                  </label>
                  <input
                    {...register(`owners.${index}.motherName`)}
                    defaultValue={field.motherName}
                    className={inputStyle}
                  />
                </div>

                {/* Date of Birth */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Ημερομηνία γέννησης
                  </label>
                  <input
                    type="date"
                    {...register(`owners.${index}.birthDate`)}
                    defaultValue={field.birthDate}
                    className={inputStyle}
                  />
                </div>

                {/* Place of Birth */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Τόπος Γέννησης
                  </label>
                  <input
                    {...register(`owners.${index}.birthPlace`)}
                    defaultValue={field.birthPlace}
                    className={inputStyle}
                  />
                </div>

                {/* Address */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Διεύθυνση
                  </label>
                  <input
                    {...register(`owners.${index}.address`)}
                    defaultValue={field.address}
                    className={inputStyle}
                  />
                </div>

                {/* Postal Code */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Κωδικός Διεύθυνσης
                  </label>
                  <input
                    {...register(`owners.${index}.postalCode`)}
                    defaultValue={field.postalCode}
                    className={inputStyle}
                  />
                </div>

                {/* City */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Διεύθυνση Δήμος/Κοινότητα
                  </label>
                  <input
                    {...register(`owners.${index}.city`)}
                    defaultValue={field.city}
                    className={inputStyle}
                  />
                </div>

                {/* AFM */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Αριθμός Φορολογικού Μητρώου (ΑΦΜ)
                  </label>
                  <input
                    {...register(`owners.${index}.afm`)}
                    defaultValue={field.afm}
                    className={inputStyle}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Κινητό
                  </label>
                  <input
                    {...register(`owners.${index}.phone`)}
                    defaultValue={field.phone}
                    className={inputStyle}
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Ηλεκτρονικό Ταχυδρομείο
                  </label>
                  <input
                    type="email"
                    {...register(`owners.${index}.email`)}
                    defaultValue={field.email}
                    className={inputStyle}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* owner part  */}

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
                <input
                  {...register("licenseNumber")}
                  className={inputStyle}
                  // defaultValue={dataShowExtreact.license_number}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Αναθεώρηση Αριθμού Άδειας
                </label>
                <input
                  {...register("licenseRevision")}
                  className={inputStyle}
                  // defaultValue={dataShowExtreact.license_number_revision}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">ΥΔΟΜ</label>
                <input
                  {...register("ydom")}
                  className={inputStyle}
                  // defaultValue={dataShowExtreact.ydom_description}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Περιγραφή Οριζόντιας Ιδιοκτησίας
                </label>
                <input
                  {...register("propertyDesc1")}
                  className={inputStyle}
                  defaultValue={allExtreactData?.issuing_authority}
                  // defaultValue={
                  //   dataShowExtreact.horizontal_property_description
                  // }
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Περιγραφή Οριζόντιας Ιδιοκτησίας
                </label>
                <input
                  {...register("propertyDesc2")}
                  className={inputStyle}
                  // defaultValue={
                  //   dataShowExtreact.horizontal_ownership_description
                  // }
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Αριθμός Ιδρύματος/Αριθμοί Επανεξέτασης
                </label>
                <input
                  {...register("reexamineNumbers")}
                  className={inputStyle}
                  // defaultValue={dataShowExtreact.address}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Συμβολαιογράφος
                </label>
                <input
                  {...register("notary")}
                  className={inputStyle}
                  // defaultValue={dataShowExtreact.notary}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Τετραγωνικά Μέτρα Οικοπέδου
                </label>
                <input
                  {...register("lotSquare")}
                  className={inputStyle}
                  // defaultValue={dataShowExtreact.land_use}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Αριθμός Άδειας
                </label>
                <input
                  {...register("licenseIssueNumber")}
                  className={inputStyle}
                  // defaultValue={dataShowExtreact.license_number}
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
                  // defaultValue={allExtreactData?.issuing_authority}
                  // defaultValue={dataShowExtreact.building_permit_date}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Λεπτομέρειες της Αρμόδιας Αρχής Έκδοσης
                </label>
                <input
                  {...register("issueAuthority")}
                  className={inputStyle}
                  defaultValue={allExtreactData?.issuing_authority}
                  // defaultValue={dataShowExtreact.issuing_authority_details}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Περιφερειακή Ενότητα
                </label>
                <input
                  {...register("region")}
                  className={inputStyle}
                  // defaultValue={dataShowExtreact.regional_unit}
                />
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
                  // defaultValue={dataShowExtreact.pea_issue_date}
                />
              </div>
              <div>
                <label className="form-label block mb-1 ">
                  Αριθμός Ασφάλειας PEA
                </label>
                <input
                  {...register("epcCode")}
                  className={inputStyle}
                  // defaultValue={dataShowExtreact.pea_security_number}
                />
              </div>

              <div>
                <label className="form-label block mb-1 ">
                  Αριθμός Πρωτοκόλλου PEA
                </label>
                <input
                  {...register("protocolNumber")}
                  className={inputStyle}
                  // defaultValue={dataShowExtreact.pea_protocol_number}
                />
              </div>
              <div>
                <label className="form-label block mb-1 ">
                  Κατηγορία Υφιστάμενης Ενέργειας PEA
                </label>
                <input
                  {...register("energyCategory")}
                  className={inputStyle}
                  // defaultValue={dataShowExtreact.pea_energy_category}
                />
              </div>

              <div>
                <label className="form-label block mb-1 ">
                  Εκτιμώμενη Ετήσια Κατανάλωση Πρωτογενούς Ενέργειας [kWh/m²]
                </label>
                <input
                  {...register("primaryEnergy")}
                  className={inputStyle}
                  // defaultValue={dataShowExtreact.pea_annual_energy_consumption}
                />
              </div>
              <div>
                <label className="form-label block mb-1 ">
                  Εκτιμώμενες Ετήσιες Εκπομπές CO₂ [kg/m²]
                </label>
                <input
                  {...register("co2Emissions")}
                  className={inputStyle}
                  // defaultValue={dataShowExtreact.pea_annual_co2_emissions}
                />
              </div>

              <div className="md:col-span-2">
                <label className="form-label block mb-1 ">Τιμή Ζώνης</label>
                <textarea
                  {...register("zonePrice")}
                  className={inputStyle}
                  rows={2}
                  //// defaultValue={dataShowExtreact.license_number}
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
                <input
                  {...register("land_use")}
                  className={inputStyle}
                  // defaultValue={dataShowExtreact.land_use}
                />
              </div>
              <div>
                <label className="form-label block mb-1 ">
                  Περιγραφή Αυθαίρετων Κατασκευών
                </label>
                <input
                  {...register("arbitrary_constructions_description")}
                  className={inputStyle}
                  // defaultValue={
                  //   dataShowExtreact.arbitrary_constructions_description
                  // }
                />
              </div>

              <div>
                <label className="form-label block mb-1 ">
                  Έγγραφο Προσδοκίας
                </label>
                <input
                  {...register("expectation_Document")}
                  className={inputStyle}
                  // defaultValue={dataShowExtreact.license_number}
                />
              </div>
            </div>
          </div>
        </div>
        <button className="bg-blue-500 py-3 px-6 rounded-md text-lg text-white relative top-18">
          {isLoading ? (
            <>
              <LoadingButton />
            </>
          ) : (
            "Save all Data"
          )}
        </button>
      </form>
    </>
  );
};

export default AIExtractionDataInPut;
