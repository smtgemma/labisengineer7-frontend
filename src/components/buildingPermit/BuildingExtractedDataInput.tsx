"use client";
import PrimaryButton from "@/components/shared/primaryButton/PrimaryButton";
import tokenCatch from "@/lib/token";
import {
    setAiExtreactAndInputData,
    setTheProjectCode
} from "@/redux/features/AI-intrigratoin/aiFileDataSlice";
import { usePosAiAllDataSaveMutation } from "@/redux/features/AI-intrigratoin/aiServiceSlice";
import { RootState } from "@/redux/store";
import { useEffect, useRef, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { FormValues } from "./types";



const inputStyle =
    "w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500";

const BuildingAIExtractionDataInPut = ({ currentStep, nextStep }: {
    currentStep: number
    nextStep: () => void
}) => {
    const [ownerInfoShow, setOwnerInfoShow] = useState<boolean>(true);
    const [ownerInfoShow2, setOwnerInfoShow2] = useState<number | null>(0);
    const [ownerInfoShow3, setOwnerInfoShow3] = useState<boolean>(true);
    const stepByStepData: any = useSelector((state: RootState) => state.aiData);
    // const user: any = useSelector((state: RootState) => state.user.userData);

    // console.log(stepByStepData)
    const { register, control, handleSubmit } = useForm<FormValues>({
        defaultValues: {
            owners: stepByStepData.ownerBaseData.map((owner: any) => ({
                first_name: owner.first_name || "", // Όνομα
                last_name: owner.last_name || "", // Επώνυμο
                father_first_last_name: `${owner.father_first_name || ""} ${owner.father_last_name || ""
                    }`, // Πατέρας
                mothers_first_last_name: `${owner.mother_first_name || ""} ${owner.mother_last_name || ""
                    }`, // Μητέρα
                date_of_birth: owner.date_of_birth || "", // Ημερομηνία Γέννησης
                place_of_birth: owner.place_of_birth || "", // Τόπος Γέννησης
                owner_address: owner.owner_address || "", // Διεύθυνση Ιδιοκτήτη
                address_number: owner.address_number || "", // Αριθμός Διεύθυνσης
                city: owner.city || "", // Πόλη
                postal_code: owner.postal_code || "", // Ταχυδρομικός Κώδικας
                id_number: owner.id_number || "", // Α.Δ.Τ
                tax_identification_number: owner.tax_identification_number || "", // ΑΦΜ
                email: owner.email || "", // Email
                mobile: owner.mobile || "", // Τηλέφωνο
            })),
        },
    });


    const dispatch = useDispatch();
    const hasSubmittedRef = useRef(false);

    const { fields } = useFieldArray({
        control,
        name: "owners",
    });

    const allExtreactData = stepByStepData.aiDataState;
    // const ownerData = stepByStepData.ownerBaseData;
    const projectData = stepByStepData.projectId;
    const subCategoryData = stepByStepData.subcategory;
    const descrptionTasks = stepByStepData.descriptionTask;
    const filesData = stepByStepData.multiFiles;
    const descriptonAndYdom = stepByStepData.description;
    const description = descriptonAndYdom?.description;
    // const ydom: string[] =
    //   descriptonAndYdom?.ydom?.map((item: { text: string }) => item.text) ?? [];

    // console.log("ydom:", ydom);
    console.log("allExtreactData:", descriptonAndYdom);

    const [postDataAll, { isLoading }] = usePosAiAllDataSaveMutation();

    const accessToken = tokenCatch();

    const onSubmitAiDataSend = async (data: any) => {
        // Here you can send data to API
        console.log("Form Data:", data);
        const DataPost = {
            serviceId: projectData?.id,
            // createdById: user?.userId,/
            subCategories: subCategoryData,
            descrptionTasks: descrptionTasks,
            ydom: descriptonAndYdom?.ydom,
            technicalDescription: allExtreactData?.technical_description,
            technicalDescriptionTwo: allExtreactData?.technical_description_two,
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
                serviceId: projectData?.id,
                // createdById: user?.userId,
                subCategories: subCategoryData,
                descrptionTasks: descrptionTasks,
                ydom: descriptonAndYdom?.ydom,
                technicalDescription: allExtreactData?.technical_description,
                technicalDescriptionTwo: allExtreactData?.technical_description_two,
                ...data,
            })
        );

        try {
            const res = await postDataAll({ formData, accessToken }).unwrap();
            console.log("resposive", res);
            if (res?.success) {
                dispatch(setTheProjectCode(res?.data));
            }
        } catch (error: any) {
            toast.error(error.data.message);
            console.log(error);
        }
    };

    useEffect(() => {
        if (currentStep === 4 && filesData?.length && !hasSubmittedRef.current) {
            hasSubmittedRef.current = true; // lock it
            // create-project 
            handleSubmit(onSubmitAiDataSend)();
        }
    }, [currentStep]);

    return (
        <div >
            <div>

            </div>
            <div className="">
                <h2 className="text-[#333333] text-5xl font-semibold">
                    AI Extraction Data
                </h2>
                <p className=" text-[#777777] mt-3">
                    Here is the extracted information. Please review and confirm.
                </p>
            </div>
            <form
                onSubmit={handleSubmit(onSubmitAiDataSend)}
                className="max-w-6xl mx-auto   rounded-xl mt-13"
            >
                <div>
                    <div className="max-w-6xl mx-auto bg-white shadow-md rounded-xl p-8  ">
                        <div className="flex justify-between items-center ">
                            <h2 className="text-xl md:text-2xl font-semibold  text-gray-800">
                                Project & Property Information( Στοιχεία Έργου & Ιδιοκτησίας)
                            </h2>
                            <div>
                                <button
                                    type="button"
                                    onClick={() => setOwnerInfoShow(!ownerInfoShow)}
                                >
                                    {" "}
                                    {!ownerInfoShow ? (
                                        <>
                                            <IoIosArrowDown className="text-2xl" />
                                        </>
                                    ) : (
                                        <>
                                            <IoIosArrowUp className="text-2xl" />
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>

                        {ownerInfoShow && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mt-5">
                                <div className="col-span-full">
                                    <label className="block text-sm font-medium mb-1">
                                        Περιγραφή Έργου (1)
                                    </label>
                                    <textarea
                                        {...register("projectDescription")}
                                        className={`${inputStyle} h-[100px] `}
                                        readOnly
                                        defaultValue={description[0]?.value || "N/A"}
                                    />
                                </div>

                                <div className="cursor-not-allowed">
                                    <label className="block text-sm font-medium mb-1">
                                        ΑΕΚ Ακινήτου
                                    </label>
                                    <input
                                        {...register("kaekProperty")}
                                        className={`${inputStyle} cursor-not-allowed`}
                                        readOnly

                                        defaultValue={allExtreactData?.kaek_property}
                                    // defaultValue={dataShowExtreact?.cadastral_code_kaek}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-1">
                                        Title_area (Εμβαδόν Ιδιοκτησίας)
                                    </label>
                                    <input
                                        {...register("titleArea")}
                                        className={inputStyle}
                                        readOnly
                                        defaultValue={allExtreactData?.title_area}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-1">
                                        Floor_property (Όροφος Ακινήτου)
                                    </label>
                                    <input
                                        {...register("floorProperty")}
                                        className={inputStyle}
                                        readOnly
                                        defaultValue={allExtreactData?.floor_property}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-1">
                                        Place_property (Αριθμός Ακινήτου)
                                    </label>
                                    <input
                                        {...register("propertyPlace")}
                                        className={inputStyle}
                                        readOnly
                                        defaultValue={allExtreactData?.property_place}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-1">
                                        property_number (Αριθμός Διεύθυνσης Ακινήτου)
                                    </label>
                                    <input
                                        {...register("propertyNumber")}
                                        className={inputStyle}
                                        readOnly
                                        defaultValue={allExtreactData?.property_number}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-1">
                                        Property_address (Διεύθυνση Ακινήτου)
                                    </label>
                                    <input
                                        {...register("propertyAddress")}
                                        className={inputStyle}
                                        readOnly
                                        defaultValue={allExtreactData?.property_address}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-1">
                                        Municipality_community (Δήμος/Κοινότητα Ακινήτου)
                                    </label>
                                    <input
                                        {...register("municipalityCommunity")}
                                        className={inputStyle}
                                        readOnly
                                        defaultValue={allExtreactData?.municipality_community}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-1">
                                        Property_postal_code (Ταχυδρομικός Κώδικας Ακινήτου)
                                    </label>
                                    <input
                                        {...register("propertyPostalCode")}
                                        className={inputStyle}
                                        readOnly
                                        defaultValue={allExtreactData?.property_postal_code}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-1">
                                        Horizontal_property_name (Οριζόντια Ιδιοκτησία 1)
                                    </label>
                                    <input
                                        {...register("horizontalPropertyName")}
                                        className={inputStyle}
                                        readOnly
                                        defaultValue={allExtreactData?.horizontal_property_name}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-1">
                                        Horizontal_property_name_two (Οριζόντια Ιδιοκτησία 2)
                                    </label>
                                    <input
                                        {...register("horizontalPropertyNameTwo")}
                                        className={inputStyle}
                                        readOnly
                                        defaultValue={allExtreactData?.horizontal_property_name_two}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {fields.map((field, index) => (
                    <div key={field.id} className="mt-10">
                        <div className="p-6 md:p-8 bg-white rounded-xl">
                            <div className="flex justify-between items-center">
                                <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
                                    Information of Owner ({index + 1})
                                </h2>
                                <div>
                                    <button
                                        type="button"
                                        // NEED TO WORK HERE
                                        // Tahsin

                                        onClick={() => setOwnerInfoShow2(index)}
                                    >
                                        {!ownerInfoShow2 ? (
                                            <IoIosArrowDown className="text-2xl" />
                                        ) : (
                                            <IoIosArrowUp className="text-2xl" />
                                        )}
                                    </button>
                                </div>
                            </div>

                            {ownerInfoShow2 === index && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
                                    {/* First Name */}
                                    <div>
                                        <label className="block text-sm font-medium mb-1">
                                            First_name (Όνομα)
                                        </label>
                                        <input
                                            {...register(`owners.${index}.firstName`)}
                                            defaultValue={field.first_name}
                                            className={`${inputStyle} `}
                                            readOnly
                                        />
                                    </div>

                                    {/* Last Name */}
                                    <div>
                                        <label className="block text-sm font-medium mb-1">
                                            Last_name (Επώνυμο)
                                        </label>
                                        <input
                                            {...register(`owners.${index}.lastName`)}
                                            defaultValue={field.last_name}
                                            className={inputStyle}
                                            readOnly
                                        />
                                    </div>

                                    {/* Father Full Name */}
                                    <div>
                                        <label className="block text-sm font-medium mb-1">
                                            Father_first_last_name (Όνοματεπώνυμο Πατρός)
                                        </label>
                                        <input
                                            {...register(`owners.${index}.fatherFirstLastName`)}
                                            defaultValue={field.father_first_last_name}
                                            className={inputStyle}
                                            readOnly
                                        />
                                    </div>

                                    {/* Mother Full Name */}
                                    <div>
                                        <label className="block text-sm font-medium mb-1">
                                            Mothers_first_last_name (Όνοματεπώνυμο Μητρός)
                                        </label>
                                        <input
                                            {...register(`owners.${index}.mothersFirstLastName`)}
                                            defaultValue={field.mothers_first_last_name}
                                            className={inputStyle}
                                            readOnly
                                        />
                                    </div>

                                    {/* Date of Birth */}
                                    <div>
                                        <label className="block text-sm font-medium mb-1">
                                            Date_of_birth (Ημερομηνία Γέννησης)
                                        </label>
                                        <input
                                            type="text"
                                            {...register(`owners.${index}.dateOfBirth`)}
                                            defaultValue={field.date_of_birth}
                                            className={inputStyle}
                                            readOnly
                                        />
                                    </div>

                                    {/* Place of Birth */}
                                    <div>
                                        <label className="block text-sm font-medium mb-1">
                                            Place_of_birth (Τόπος Γέννησης)
                                        </label>
                                        <input
                                            {...register(`owners.${index}.placeOfBirth`)}
                                            defaultValue={field.place_of_birth}
                                            className={inputStyle}
                                            readOnly
                                        />
                                    </div>

                                    {/* Owner Address */}
                                    <div>
                                        <label className="block text-sm font-medium mb-1">
                                            Owner_address (Διεύθυνση Ιδιοκτήτη)
                                        </label>
                                        <input
                                            {...register(`owners.${index}.ownerAddress`)}
                                            defaultValue={field.owner_address}
                                            className={inputStyle}
                                            readOnly
                                        />
                                    </div>

                                    {/* Address Number */}
                                    <div>
                                        <label className="block text-sm font-medium mb-1">
                                            Address_number (Αριθμός Διεύθυνσης Ιδιοκτήτη)
                                        </label>
                                        <input
                                            {...register(`owners.${index}.addressNumber`)}
                                            defaultValue={field.address_number}
                                            className={inputStyle}
                                            readOnly
                                        />
                                    </div>

                                    {/* City */}
                                    <div>
                                        <label className="block text-sm font-medium mb-1">
                                            City (Πόλη)
                                        </label>
                                        <input
                                            {...register(`owners.${index}.city`)}
                                            defaultValue={field.city}
                                            className={inputStyle}
                                            readOnly
                                        />
                                    </div>

                                    {/* Postal Code */}
                                    <div>
                                        <label className="block text-sm font-medium mb-1">
                                            Postal_code (Ταχυδρομικός Κώδικας)
                                        </label>
                                        <input
                                            {...register(`owners.${index}.postal_code`)}
                                            defaultValue={field.postal_code}
                                            className={inputStyle}
                                            readOnly
                                        />
                                    </div>

                                    {/* ID Number */}
                                    <div>
                                        <label className="block text-sm font-medium mb-1">
                                            Id_number (Α.Δ.Τ)
                                        </label>
                                        <input
                                            {...register(`owners.${index}.idNumber`)}
                                            defaultValue={field.id_number}
                                            className={inputStyle}
                                            readOnly
                                        />
                                    </div>

                                    {/* Tax Identification Number */}
                                    <div>
                                        <label className="block text-sm font-medium mb-1">
                                            Tax_identification_number (ΑΦΜ)
                                        </label>
                                        <input
                                            {...register(`owners.${index}.taxIdentificationNumber`)}
                                            defaultValue={field.tax_identification_number}
                                            className={inputStyle}
                                            readOnly
                                        />
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className="block text-sm font-medium mb-1">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            {...register(`owners.${index}.email`)}
                                            defaultValue={field.email}
                                            className={inputStyle}
                                            readOnly
                                        />
                                    </div>

                                    {/* Mobile */}
                                    <div>
                                        <label className="block text-sm font-medium mb-1">
                                            Mobile (Τηλέφωνο)
                                        </label>
                                        <input
                                            {...register(`owners.${index}.mobile`)}
                                            defaultValue={field.mobile}
                                            className={inputStyle}
                                            readOnly
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                ))}

                {/* owner part  */}

                {/* License & Legal Data  */}
                <div className="mt-10">
                    <div className="bg-white p-6 rounded-xl shadow-md w-full">
                        <div className="flex justify-between items-center ">
                            <h2 className="text-xl md:text-2xl font-semibold  text-gray-800">
                                ολεοδομικά Μεγέθη-Άδεια Οικοδομής-Νομιμοποιήσεις
                            </h2>
                            <div>
                                <button
                                    type="button"
                                    // NEED TO WORK HERE
                                    // Tahsin
                                    onClick={() => setOwnerInfoShow3(!ownerInfoShow3)}
                                >
                                    {" "}
                                    {!ownerInfoShow3 ? (
                                        <>
                                            <IoIosArrowDown className="text-2xl" />
                                        </>
                                    ) : (
                                        <>
                                            <IoIosArrowUp className="text-2xl" />
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>

                        {ownerInfoShow3 && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
                                <div>
                                    <label className="block text-sm font-medium mb-1">
                                        plot_area (Εμβαδόν Οικοπέδου)
                                    </label>
                                    <input
                                        {...register("plotArea")}
                                        className={inputStyle}
                                        readOnly
                                        defaultValue={allExtreactData.plot_area}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">
                                        withinOutsideCityPlan (Εντός/Εκτός Σχεδίου Πόλης)
                                    </label>
                                    <input
                                        {...register("withinOutsideCityPlan")}
                                        className={inputStyle}
                                        readOnly
                                        defaultValue={allExtreactData.within_outside_city_plan}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-1">
                                        permitNumber (Αριθμός Οικοδομικής Άδειας){" "}
                                    </label>
                                    <input
                                        {...register("permitNumber")}
                                        className={inputStyle}
                                        readOnly
                                        defaultValue={allExtreactData.permit_number}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-1">
                                        Issuing_authority (Εκδούσα Αρχή)
                                    </label>
                                    <input
                                        {...register("issuingAuthority")}
                                        className={inputStyle}
                                        readOnly
                                        defaultValue={allExtreactData.issuing_authority}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">
                                        Legalization_statement_number (Αριθμός Δήλωσης Νομ)
                                    </label>
                                    <input
                                        {...register("legalizationStatementNumber")}
                                        className={inputStyle}
                                        readOnly
                                        defaultValue={allExtreactData.legalization_statement_number}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-1">
                                        Engineer_full_name (Στοιχεία Μηχανικού)
                                    </label>
                                    <input
                                        {...register("engineerFullName")}
                                        className={inputStyle}
                                        readOnly
                                        defaultValue={allExtreactData.engineer_full_name}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-1">
                                        Electronic_code (Ηλεκτρονικός Κωδικός Δήλωσης)
                                    </label>
                                    <input
                                        {...register("electronicCode")}
                                        className={inputStyle}
                                        readOnly
                                        defaultValue={allExtreactData.electronic_code}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-1">
                                        Tee_registration_number (Αριθμός Μητρώου ΤΕΕ)
                                    </label>
                                    <input
                                        {...register("teeRegistrationNumber")}
                                        className={inputStyle}
                                        readOnly
                                        defaultValue={allExtreactData.tee_registration_number}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-1">
                                        Specialty (Ειδικότητα Μηχανικού)
                                    </label>
                                    <input
                                        {...register("specialty")}
                                        className={inputStyle}
                                        readOnly
                                        defaultValue={allExtreactData.specialty}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-1">
                                        Inclusion_date_legalization (Ημερομηνία Ένταξης
                                        Νομιμοποίησης)
                                    </label>
                                    <input
                                        {...register("inclusionDateLegalization")}
                                        className={inputStyle}
                                        readOnly
                                        defaultValue={allExtreactData?.inclusion_date_legalization}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </form>
            {currentStep < 6 && (
                <div className="flex justify-end mt-4 w-fit ml-auto" >
                    <PrimaryButton
                        onClick={nextStep}
                        // disabled={canProceed()}
                        label="Next"
                    />
                </div>
            )}
        </div>
    );
};

export default BuildingAIExtractionDataInPut;



// trash 

{/* "Energy Performance Certificate (EPC)"  */ }
{/* <div className="mt-10">
          <div className="bg-gray-50 rounded-xl p-6 shadow-sm w-full">
            <div className="flex justify-between items-center ">
              <h2 className="text-xl md:text-2xl font-semibold  text-gray-800">
                "Energy Performance Certificate (EPC)"
              </h2>
              <div>
                <button
                  type="button"
                  onClick={() => setOwnerInfoShow4(!ownerInfoShow4)}
                >
                  {" "}
                  {!ownerInfoShow4 ? (
                    <>
                      <IoIosArrowDown className="text-2xl" />
                    </>
                  ) : (
                    <>
                      <IoIosArrowUp className="text-2xl" />
                    </>
                  )}
                </button>
              </div>
            </div>
            {ownerInfoShow4 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
                <div>
                  <label className="form-label block mb-1 ">
                    Ημερομηνία Έκδοσης PEA
                  </label>
                  <input
                    {...register("issueDate")}
                    type="date"
                    className={inputStyle}
                    readOnly
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
                    readOnly
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
                    readOnly
                    defaultValue={allExtreactData.property_postal_code}
                  />
                </div>
                <div>
                  <label className="form-label block mb-1 ">
                    Κατηγορία Υφιστάμενης Ενέργειας PEA
                  </label>
                  <input
                    {...register("energyCategory")}
                    className={inputStyle}
                    readOnly
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
                    readOnly
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
                    readOnly
                    // defaultValue={dataShowExtreact.pea_annual_co2_emissions}
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="form-label block mb-1 ">Τιμή Ζώνης</label>
                  <textarea
                    {...register("zonePrice")}
                    className={inputStyle}
                    readOnly
                    rows={2}
                    //// defaultValue={dataShowExtreact.license_number}
                  />
                </div>
              </div>
            )}
          </div>
        </div> */}

{/* "others option  */ }
{/* <div className="mt-10">
          <div className="bg-gray-50 rounded-xl p-6 shadow-sm w-full">
            <div className="flex justify-between items-center ">
              <h2 className="text-xl md:text-2xl font-semibold  text-gray-800">
                Project & Ownership Information
              </h2>
              <div>
                <button
                  type="button"
                  onClick={() => setOwnerInfoShow5(!ownerInfoShow5)}
                >
                  {" "}
                  {!ownerInfoShow5 ? (
                    <>
                      <IoIosArrowDown className="text-2xl" />
                    </>
                  ) : (
                    <>
                      <IoIosArrowUp className="text-2xl" />
                    </>
                  )}
                </button>
              </div>
            </div>

            {ownerInfoShow5 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
                <div>
                  <label className="form-label block mb-1 ">Χρήση Γης</label>
                  <input
                    {...register("land_use")}
                    className={inputStyle}
                    readOnly
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
                    readOnly
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
                    readOnly
                    // defaultValue={dataShowExtreact.license_number}
                  />
                </div>
              </div>
            )}
          </div>
        </div> */}