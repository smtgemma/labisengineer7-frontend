"use client";
import PrimaryButton from "@/components/shared/primaryButton/PrimaryButton";
import tokenCatch from "@/lib/token";
import {
    setAiExtreactAndInputData,
    setTheProjectCode
} from "@/redux/features/AI-intrigratoin/aiFileDataSlice";
import { usePosAiAllDataForTwoToSaveMutation, usePostHtkOneMutation } from "@/redux/features/AI-intrigratoin/aiServiceSlice";
import { RootState } from "@/redux/store";
import { useEffect, useRef, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { FormValues } from "./types";


// new 
// date_issue_building_permit_revision_two          permit paper     done
// date_of_issuance_eemk                          EEMK PAPER
// date_of_issue_building_permit_revision_eemk                          EEMK PAPER
// date_of_submission_1337 1337/LAW
// declaration_number_1337 1337/LAW
// issuing_authority_1337 1337/LAW
// declaration_owner_for_4495_2017 
// issuing_authority_eemk                          EEMK PAPER
// issuing_authority_loss_certificate LOSS PAPER
// kaek_plot
// license_number_eemk                          EEMK PAPER
// license_number_revision_eemk                          EEMK PAPER
// license_number_revision_two
// notary_reviews_establishment_horizontal_ownership     NOTARY
// pea_estimated_annual_co2_emissions_kg_m2 
// pea_estimated_annual_primary_energy_consumption_kwh_m2
// pea_issue_date           n/a
// pea_protocol_number      n/a
// pea_security_number    n/a
// plot_type   n/a
// project_description_htk_plot
// project_descriptions
// project_title_description_eemk    EEMK PAPER
// protocol_date_loss_certificate    LOSS PAPER
// protocol_number_loss_certificate  LOSS PAPER


const inputStyle =
    "w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500";

const HtkTwoAIExtractionDataInPut = ({ currentStep, nextStep, uploadedFiles }: {
    currentStep: number
    nextStep: () => void,
    uploadedFiles: File[]
}) => {
    const [collapse, setCollapse] = useState(0)
    const stepByStepData = useSelector((state: RootState) => state.aiData);
    // const user: any = useSelector((state: RootState) => state.user.userData);

    const { register, control, handleSubmit } = useForm<FormValues>({
        defaultValues: {
            owners: stepByStepData?.ownerBaseData?.map((owner: any) => ({
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
                owner_type_ownership: owner?.owner_type_ownership,
                ownership_percentage_owner: owner?.ownership_percentage_owner
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
    console.log(allExtreactData)

    // const ownerData = stepByStepData.ownerBaseData;
    const projectData: any = stepByStepData.projectId;
    const subCategoryData = stepByStepData.subcategory;
    const descrptionTasks = stepByStepData.descriptionTask;
    const filesData = stepByStepData.multiFiles;
    const descriptonAndYdom: any = stepByStepData?.description;
    const description = descriptonAndYdom?.description;
    const ydom = stepByStepData?.horizontal?.ydom;
    // const ydom: string[] =
    //   descriptonAndYdom?.ydom?.map((item: { text: string }) => item.text) ?? [];

    // console.log("ydom:", ydom);
    console.log("allExtreactData?:", descriptonAndYdom);

    const [postDataAll, { isLoading }] = usePostHtkOneMutation();

    const accessToken = tokenCatch();

    const onSubmitAiDataSend = async (data: any) => {
        // Here you can send data to API
        console.log("Form Data:", data);
        const DataPost = {
            serviceId: projectData?.id,
            // createdById: user?.userId,/
            subCategories: subCategoryData,
            descrptionTasks: descrptionTasks,
            ydom: ydom,
            technicalDescription: allExtreactData?.technical_description,
            technicalDescriptionTwo: allExtreactData?.technical_description_two,
            ...data,
        };

        dispatch(setAiExtreactAndInputData(DataPost));

        console.log("sever send Data:", DataPost);

        const formData = new FormData();
        uploadedFiles?.forEach((file: any) => {
            formData.append("files", file);
        });
        formData.append(
            "data",
            JSON.stringify({
                serviceId: projectData?.id,
                ydom: descriptonAndYdom?.ydom,
                projectDescriptions: allExtreactData?.project_descriptions ?? "",
                technicalDescription: allExtreactData?.technical_description ?? "",
                technicalDescriptionTwo: allExtreactData?.technical_description_two ?? "",
                technicalDescriptionThree: allExtreactData?.technical_description_three ?? "",
                technicalDescriptionFour: allExtreactData?.technical_description_four ?? "",
                technicalDescriptionFive: allExtreactData?.technical_description_five ?? "",
                technicalDescriptionSix: allExtreactData?.technical_description_six ?? "",
                technicalDescriptionSeven: allExtreactData?.technical_description_seven ?? "",
                technicalDescriptionEight: allExtreactData?.technical_description_eight ?? "",
                technicalDescriptionNine: allExtreactData?.technical_description_nine ?? "",

                declarationOwnerFor44952017: allExtreactData?.declaration_owner_for_4495_2017 ?? "",
                kaekProperty: allExtreactData?.kaek_property ?? "",
                titleArea: allExtreactData?.title_area ?? "",
                floorProperty: allExtreactData?.floor_property ?? "",
                numberProperty: allExtreactData?.number_property ?? "",
                propertyAddress: allExtreactData?.property_address ?? "",
                propertyNumber: allExtreactData?.property_number ?? "",
                propertyPlace: allExtreactData?.property_place ?? "",
                municipalityCommunity: allExtreactData?.municipality_community ?? "",
                propertyPostalCode: allExtreactData?.property_postal_code ?? "",
                horizontalPropertyName: allExtreactData?.horizontal_property_name ?? "",
                horizontalPropertyNameTwo: allExtreactData?.horizontal_property_name_two ?? "",
                owners: allExtreactData?.owners ?? "",
                plotArea: allExtreactData?.plot_area ?? "",
                withinOutsideCityPlan: allExtreactData?.within_outside_city_plan ?? "",
                permitNumber: allExtreactData?.permit_number ?? "",
                issuingAuthority: allExtreactData?.issuing_authority ?? "",
                legalizationStatementNumber: allExtreactData?.legalization_statement_number ?? "",
                electronicCode: allExtreactData?.electronic_code ?? "",
                engineerFullName: allExtreactData?.engineer_full_name ?? "",
                teeRegistrationNumber: allExtreactData?.tee_registration_number ?? "",
                specialty: allExtreactData?.specialty ?? "",
                inclusionDateLegalization: allExtreactData?.inclusion_date_legalization ?? "",
                ydomMunicipality: allExtreactData?.ydom_municipality ?? "",
                ydomError: allExtreactData?.ydom_error ?? "",
                processedDocuments: allExtreactData?.processed_documents ?? "",
                processingStatus: allExtreactData?.processing_status ?? "",

                percentageCoOwnershipParcel: allExtreactData?.percentage_co_ownership_parcel ?? "",
                exclusiveUseProperty: allExtreactData?.exclusive_use_property ?? "",
                miniDescriptionHorizontalProperty: allExtreactData?.mini_description_horizontal_property ?? "",
                numberEstablishmentHorizontalOwnership: allExtreactData?.number_establishment_horizontal_ownership ?? "",
                reviewsNumbersEstablishmentHorizontalOwnership: allExtreactData?.reviews_numbers_establishment_horizontal_ownership ?? "",
                notaryReviewsEstablishmentHorizontalOwnership: allExtreactData?.notary_reviews_establishment_horizontal_ownership ?? "",
                licenseNumberRevision: allExtreactData?.license_number_revision ?? "",
                licenseNumberRevisionTwo: allExtreactData?.license_number_revision_two ?? "",
                dateIssuanceBuildingPermit: allExtreactData?.date_issuance_building_permit ?? "",
                detailsIssuingAuthority: allExtreactData?.details_issuing_authority ?? "",
                dateIssueBuildingPermitRevision: allExtreactData?.date_issue_building_permit_revision ?? "",
                dateIssueBuildingPermitRevisionTwo: allExtreactData?.date_issue_building_permit_revision_two ?? "",
                projectTitleDescriptionLicense: allExtreactData?.project_title_description_license ?? "",
                completionDeclaration3843Number: allExtreactData?.completion_declaration_3843_number ?? "",
                descriptionValidations3843: allExtreactData?.description_validations_3843 ?? "",
                issuingAuthority3843: allExtreactData?.issuing_authority_3843 ?? "",
                dateIssueCompletionDeclaration3843: allExtreactData?.date_issue_completion_declaration_3843 ?? "",
                tokenUsage: allExtreactData?.token_usage ?? "",

                licenseNumberEemk: allExtreactData?.license_number_eemk ?? "",
                dateOfIssuanceEemk: allExtreactData?.date_of_issuance_eemk ?? "",
                issuingAuthorityEemk: allExtreactData?.issuing_authority_eemk ?? "",
                projectTitleDescriptionEemk: allExtreactData?.project_title_description_eemk ?? "",
                licenseNumberRevisionEemk: allExtreactData?.license_number_revision_eemk ?? "",
                dateOfIssueBuildingPermitRevisionEemk: allExtreactData?.date_of_issue_building_permit_revision_eemk ?? "",
                issuingAuthorityLossCertificate: allExtreactData?.issuing_authority_loss_certificate ?? "",
                protocolNumberLossCertificate: allExtreactData?.protocol_number_loss_certificate ?? "",
                protocolDateLossCertificate: allExtreactData?.protocol_date_loss_certificate ?? "",
                peaIssueDate: allExtreactData?.pea_issue_date ?? "",
                peaSecurityNumber: allExtreactData?.pea_security_number ?? "",
                peaProtocolNumber: allExtreactData?.pea_protocol_number ?? "",
                peaEstimatedAnnualPrimaryEnergyConsumptionKwhM2:
                    allExtreactData?.pea_estimated_annual_primary_energy_consumption_kwh_m2 ?? "",
                peaEstimatedAnnualCo2EmissionsKgM2: allExtreactData?.pea_estimated_annual_co2_emissions_kg_m2 ?? "",
                declarationNumber1337: allExtreactData?.declaration_number_1337 ?? "",
                dateOfSubmission1337: allExtreactData?.date_of_submission_1337 ?? "",
                issuingAuthority1337: allExtreactData?.issuing_authority_1337 ?? "",
                notaryEstablishmentHorizontalOwnership: allExtreactData?.notary_establishment_horizontal_ownership ?? "",
                projectDescriptionHtkPlot: allExtreactData?.project_description_htk_plot ?? "",
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
        <div className="relative">
            <div className="relative">
                <div id="secret" className="absolute w-full h-full ">

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
                        <div className="max-w-6xl mx-auto bg-white rounded-xl p-8  ">
                            <div className="flex justify-between items-center ">
                                <h2 className="text-xl md:text-2xl font-semibold  text-gray-800">
                                    Project & Property Information( Στοιχεία Έργου & Ιδιοκτησίας)
                                </h2>
                                <button
                                    type="button"
                                    className=" hover:cursor-pointer z-50"
                                    onClick={() => setCollapse(0)}
                                >
                                    {" "}
                                    {collapse === 0 ? (
                                        <>
                                            <IoIosArrowUp className="text-2xl" />

                                        </>
                                    ) : (
                                        <>
                                            <IoIosArrowDown className="text-2xl" />

                                        </>
                                    )}
                                </button>
                            </div>

                            {collapse === 0 && (
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

                                            defaultValue={allExtreactData?.kaek_property ?? ""}
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
                                            defaultValue={allExtreactData?.title_area ?? ""}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">
                                            number_property (Εμβαδόν Ιδιοκτησίας)
                                        </label>
                                        <input
                                            {...register("numberProperty")}
                                            className={inputStyle}
                                            readOnly
                                            defaultValue={allExtreactData?.number_property ?? ""}
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
                                            defaultValue={allExtreactData?.floor_property ?? ""}
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
                                            defaultValue={allExtreactData?.property_place ?? ""}
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
                                            defaultValue={allExtreactData?.property_number ?? ""}
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
                                            defaultValue={allExtreactData?.property_address ?? ""}
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
                                            defaultValue={allExtreactData?.municipality_community ?? ""}
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
                                            defaultValue={allExtreactData?.property_postal_code ?? ""}
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium mb-1">
                                            percentage_co_ownership_parcel (Ταχυδρομικός Κώδικας Ακινήτου)
                                        </label>
                                        <input
                                            {...register("percentageCoOwnershipParcel")}
                                            className={inputStyle}
                                            readOnly
                                            defaultValue={allExtreactData?.percentage_co_ownership_parcel ?? ""}
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
                                            defaultValue={allExtreactData?.horizontal_property_name ?? ""}
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
                                            defaultValue={allExtreactData?.horizontal_property_name_two ?? ""}
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
                                    <button
                                        type="button"
                                        className=" hover:cursor-pointer z-50"

                                        onClick={() => setCollapse(index + 1)}
                                    >
                                        {collapse === (index + 1) ? (
                                            <>
                                                <IoIosArrowUp className="text-2xl" />

                                            </>
                                        ) : (
                                            <>
                                                <IoIosArrowDown className="text-2xl" />

                                            </>
                                        )}
                                    </button>
                                </div>

                                {collapse === (index + 1) && (
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

                                        <div>
                                            <label className="block text-sm font-medium mb-1">
                                                ownership_percentage_owner (Διεύθυνση Ιδιοκτήτη)
                                            </label>
                                            <input
                                                {...register(`owners.${index}.ownershipPercentageOwner`)}
                                                defaultValue={field.ownership_percentage_owner}
                                                className={inputStyle}
                                                readOnly
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-1">
                                                owner_type_ownership (Διεύθυνση Ιδιοκτήτη)
                                            </label>
                                            <input
                                                {...register(`owners.${index}.ownerTypeOwnership`)}
                                                defaultValue={field.owner_type_ownership}
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
                                                {...register(`owners.${index}.postalCode`)}
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
                        <div className="bg-white p-6 rounded-xl w-full">
                            <div className="flex justify-between items-center ">
                                <h2 className="text-xl md:text-2xl font-semibold  text-gray-800">
                                    ολεοδομικά Μεγέθη-Άδεια Οικοδομής-Νομιμοποιήσεις
                                </h2>
                                <button
                                    type="button"
                                    className=" hover:cursor-pointer z-50"
                                    // NEED TO WORK HERE
                                    // Tahsin
                                    onClick={() => setCollapse(3)}
                                >
                                    {" "}
                                    {collapse === 3 ? (
                                        <>
                                            <IoIosArrowUp className="text-2xl" />

                                        </>
                                    ) : (
                                        <>
                                            <IoIosArrowDown className="text-2xl" />

                                        </>
                                    )}
                                </button>
                            </div>
                            <div className={`${collapse === 3 ? "h-full" : "h-0"} transition-transform duration-300 `}>
                                {collapse === 3 && (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
                                        <div>
                                            <label className="block text-sm font-medium mb-1">
                                                plot_area (Εμβαδόν Οικοπέδου)
                                            </label>
                                            <input
                                                {...register("plotArea")}
                                                className={inputStyle}
                                                readOnly
                                                defaultValue={allExtreactData?.plot_area ?? ""}
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
                                                defaultValue={allExtreactData?.within_outside_city_plan ?? ""}
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
                                                defaultValue={allExtreactData?.permit_number ?? ""}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-1">
                                                permitNumber (Αριθμός Οικοδομικής Άδειας){" "}
                                            </label>
                                            <input
                                                {...register("dateIssueBuildingPermitRevisionTwo")}
                                                className={inputStyle}
                                                readOnly
                                                defaultValue={allExtreactData?.date_issue_building_permit_revision_two ?? ""}
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
                                                defaultValue={allExtreactData?.issuing_authority ?? ""}
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
                                                defaultValue={allExtreactData?.legalization_statement_number ?? ""}
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
                                                defaultValue={allExtreactData?.engineer_full_name ?? ""}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-1">
                                                license_number_revision (Στοιχεία Μηχανικού)
                                            </label>
                                            <input
                                                {...register("licenseNumberRevision")}
                                                className={inputStyle}
                                                readOnly
                                                defaultValue={allExtreactData?.license_number_revision ?? ""}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-1">
                                                date_issuance_building_permit (Στοιχεία Μηχανικού)
                                            </label>
                                            <input
                                                {...register("dateIssuanceBuildingPermit")}
                                                className={inputStyle}
                                                readOnly
                                                defaultValue={allExtreactData?.date_issuance_building_permit ?? ""}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-1">
                                                details_issuing_authority (Στοιχεία Μηχανικού)
                                            </label>
                                            <input
                                                {...register("detailsIssuingAuthority")}
                                                className={inputStyle}
                                                readOnly
                                                defaultValue={allExtreactData?.details_issuing_authority ?? ""}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-1">
                                                date_issue_building_permit_revision (Στοιχεία Μηχανικού)
                                            </label>
                                            <input
                                                {...register("dateIssueBuildingPermitRevision")}
                                                className={inputStyle}
                                                readOnly
                                                defaultValue={allExtreactData?.date_issue_building_permit_revision ?? ""}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-1">
                                                project_title_description_license (Στοιχεία Μηχανικού)
                                            </label>
                                            <input
                                                {...register("dateIssueBuildingPermitRevision")}
                                                className={inputStyle}
                                                readOnly
                                                defaultValue={allExtreactData?.project_title_description_license ?? ""}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-1">
                                                completion_declaration_3843_number (Στοιχεία Μηχανικού)
                                            </label>
                                            <input
                                                {...register("completionDeclaration3843Number")}
                                                className={inputStyle}
                                                readOnly
                                                defaultValue={allExtreactData?.completion_declaration_3843_number ?? ""}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-1">
                                                description_validations_3843 (Στοιχεία Μηχανικού)
                                            </label>
                                            <input
                                                {...register("descriptionValidations3843")}
                                                className={inputStyle}
                                                readOnly
                                                defaultValue={allExtreactData?.description_validations_3843 ?? ""}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-1">
                                                issuing_authority_3843 (Στοιχεία Μηχανικού)
                                            </label>
                                            <input
                                                {...register("issuingAuthority3843")}
                                                className={inputStyle}
                                                readOnly
                                                defaultValue={allExtreactData?.issuing_authority_3843 ?? ""}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-1">
                                                date_issue_completion_declaration_3843 (Στοιχεία Μηχανικού)
                                            </label>
                                            <input
                                                {...register("dateIssueCompletionDeclaration3843")}
                                                className={inputStyle}
                                                readOnly
                                                defaultValue={allExtreactData?.date_issue_completion_declaration_3843 ?? ""}
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
                                                defaultValue={allExtreactData?.electronic_code ?? ""}
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
                                                defaultValue={allExtreactData?.tee_registration_number ?? ""}
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
                                                defaultValue={allExtreactData?.specialty ?? ""}
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
                                                defaultValue={allExtreactData?.inclusion_date_legalization ?? ""}
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>

                        </div>
                    </div>

                    {/* License & Legal Data  */}
                    <div className="mt-10">
                        <div className="bg-white p-6 rounded-xl w-full">
                            <div className="flex justify-between items-center ">
                                <h2 className="text-xl md:text-2xl font-semibold  text-gray-800">
                                    Notary
                                </h2>
                                <button
                                    type="button"
                                    className=" hover:cursor-pointer z-50"
                                    // NEED TO WORK HERE
                                    // Tahsin
                                    onClick={() => setCollapse(4)}
                                >
                                    {" "}
                                    {collapse === 4 ? (
                                        <>
                                            <IoIosArrowUp className="text-2xl" />

                                        </>
                                    ) : (
                                        <>
                                            <IoIosArrowDown className="text-2xl" />

                                        </>
                                    )}
                                </button>
                            </div>
                            <div className={`${collapse === 4 ? "h-full" : "h-0"} transition-transform duration-300 `}>
                                {collapse === 4 && (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
                                        <div>
                                            Here will be Notary Name
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-1">
                                                number_establishment_horizontal_ownership (Εμβαδόν Οικοπέδου)
                                            </label>
                                            <input
                                                {...register("numberEstablishmentHorizontalOwnership")}
                                                className={inputStyle}
                                                readOnly
                                                defaultValue={allExtreactData?.number_establishment_horizontal_ownership ?? ""}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-1">
                                                Reviews Numbers of establishment of horizontal ownership (Εμβαδόν Οικοπέδου)
                                            </label>
                                            <input
                                                {...register("reviewsNumbersEstablishmentHorizontalOwnership")}
                                                className={inputStyle}
                                                readOnly
                                                defaultValue={allExtreactData?.reviews_numbers_establishment_horizontal_ownership ?? ""}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-1">
                                                notary_establishment_horizontal_ownership (Εμβαδόν Οικοπέδου)
                                            </label>
                                            <input
                                                {...register("notaryEstablishmentHorizontalOwnership")}
                                                className={inputStyle}
                                                readOnly
                                                defaultValue={allExtreactData?.notary_establishment_horizontal_ownership ?? ""}
                                            />
                                        </div>

                                    </div>
                                )}
                            </div>

                        </div>
                    </div>
                    <div className="mt-10">
                        <div className="bg-white p-6 rounded-xl w-full">
                            <div className="flex justify-between items-center ">
                                <h2 className="text-xl md:text-2xl font-semibold  text-gray-800">
                                    LOSS PAPER
                                </h2>
                                <button
                                    type="button"
                                    className=" hover:cursor-pointer z-50"
                                    // NEED TO WORK HERE
                                    // Tahsin
                                    onClick={() => setCollapse(4)}
                                >
                                    {" "}
                                    {collapse === 4 ? (
                                        <>
                                            <IoIosArrowUp className="text-2xl" />

                                        </>
                                    ) : (
                                        <>
                                            <IoIosArrowDown className="text-2xl" />

                                        </>
                                    )}
                                </button>
                            </div>
                            <div className={`${collapse === 4 ? "h-full" : "h-0"} transition-transform duration-300 `}>
                                {collapse === 4 && (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
                                        <div>
                                            <label className="block text-sm font-medium mb-1">
                                                protocol_number_loss_certificate (Εμβαδόν Οικοπέδου)
                                            </label>
                                            <input
                                                {...register("numberEstablishmentHorizontalOwnership")}
                                                className={inputStyle}
                                                readOnly
                                                defaultValue={allExtreactData?.protocol_number_loss_certificate ?? ""}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-1">
                                                protocol_date_loss_certificate (Εμβαδόν Οικοπέδου)
                                            </label>
                                            <input
                                                {...register("numberEstablishmentHorizontalOwnership")}
                                                className={inputStyle}
                                                readOnly
                                                defaultValue={allExtreactData?.protocol_date_loss_certificate ?? ""}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-1">
                                                issuing_authority_loss_certificate (Εμβαδόν Οικοπέδου)
                                            </label>
                                            <input
                                                {...register("numberEstablishmentHorizontalOwnership")}
                                                className={inputStyle}
                                                readOnly
                                                defaultValue={allExtreactData?.issuing_authority_loss_certificate ?? ""}
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>

                        </div>
                    </div>


                    <div className="mt-10">
                        <div className="bg-white p-6 rounded-xl w-full">
                            <div className="flex justify-between items-center ">
                                <h2 className="text-xl md:text-2xl font-semibold  text-gray-800">
                                    EEMK PAPER
                                </h2>
                                <button
                                    type="button"
                                    className=" hover:cursor-pointer z-50"
                                    // NEED TO WORK HERE
                                    // Tahsin
                                    onClick={() => setCollapse(5)}
                                >
                                    {" "}
                                    {collapse === 5 ? (
                                        <>
                                            <IoIosArrowUp className="text-2xl" />

                                        </>
                                    ) : (
                                        <>
                                            <IoIosArrowDown className="text-2xl" />

                                        </>
                                    )}
                                </button>
                            </div>
                            <div className={`${collapse === 5 ? "h-full" : "h-0"} transition-transform duration-300 `}>
                                {collapse === 5 && (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
                                        <div>
                                            <label className="block text-sm font-medium mb-1">
                                                date_of_issuance_eemk (Εμβαδόν Οικοπέδου)
                                            </label>
                                            <input
                                                {...register("dateOfIssuanceEemk")}
                                                className={inputStyle}
                                                readOnly
                                                defaultValue={allExtreactData?.date_of_issuance_eemk ?? ""}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-1">
                                                date_of_issue_building_permit_revision_eemk (Εμβαδόν Οικοπέδου)
                                            </label>
                                            <input
                                                {...register("dateOfIssueBuildingPermitRevisioneemk")}
                                                className={inputStyle}
                                                readOnly
                                                defaultValue={allExtreactData?.date_of_issue_building_permit_revision_eemk ?? ""}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-1">
                                                Reviews Numbers of establishment of horizontal ownership (Εμβαδόν Οικοπέδου)
                                            </label>
                                            <input
                                                {...register("reviewsNumbersEstablishmentHorizontalOwnership")}
                                                className={inputStyle}
                                                readOnly
                                                defaultValue={allExtreactData?.reviews_numbers_establishment_horizontal_ownership ?? ""}
                                            />
                                        </div>

                                    </div>
                                )}
                            </div>

                        </div>
                    </div>

                    <div className="mt-10">
                        <div className="bg-white p-6 rounded-xl w-full">
                            <div className="flex justify-between items-center ">
                                <h2 className="text-xl md:text-2xl font-semibold  text-gray-800">
                                    1337/LAW
                                </h2>
                                <button
                                    type="button"
                                    className=" hover:cursor-pointer z-50"
                                    // NEED TO WORK HERE
                                    // Tahsin
                                    onClick={() => setCollapse(6)}
                                >
                                    {" "}
                                    {collapse === 6 ? (
                                        <>
                                            <IoIosArrowUp className="text-2xl" />

                                        </>
                                    ) : (
                                        <>
                                            <IoIosArrowDown className="text-2xl" />

                                        </>
                                    )}
                                </button>
                            </div>
                            <div className={`${collapse === 6 ? "h-full" : "h-0"} transition-transform duration-300 `}>
                                {collapse === 6 && (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
                                        <div>
                                            <label className="block text-sm font-medium mb-1">
                                                date_of_issuance_eemk (Εμβαδόν Οικοπέδου)
                                            </label>
                                            <input
                                                {...register("dateOfIssuanceEemk")}
                                                className={inputStyle}
                                                readOnly
                                                defaultValue={allExtreactData?.date_of_submission_1337 ?? ""}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-1">
                                                declaration_number_1337 (Εμβαδόν Οικοπέδου)
                                            </label>
                                            <input
                                                {...register("dateOfIssuanceEemk")}
                                                className={inputStyle}
                                                readOnly
                                                defaultValue={allExtreactData?.declaration_number_1337 ?? ""}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-1">
                                                issuing_authority_1337 (Εμβαδόν Οικοπέδου)
                                            </label>
                                            <input
                                                {...register("dateOfIssuanceEemk")}
                                                className={inputStyle}
                                                readOnly
                                                defaultValue={allExtreactData?.issuing_authority_1337 ?? ""}
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>

                        </div>
                    </div>
                </form>


            </div>
            {currentStep < 8 && (
                <div className="flex justify-end mt-4 w-fit ml-auto z-50" >
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

export default HtkTwoAIExtractionDataInPut;



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
                    defaultValue={allExtreactData?.property_postal_code}
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