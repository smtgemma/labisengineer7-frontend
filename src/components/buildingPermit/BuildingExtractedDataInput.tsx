"use client";
import PrimaryButton from "@/components/shared/primaryButton/PrimaryButton";
import CollapsibleSection from "@/components2.0/shared/tableComponents/TableComponents";
import { useCategoriesDetailed } from "@/hooks/useNewVariables";
import { OwnerTypes, TProjectData } from "@/interfaces/global";
import tokenCatch from "@/lib/token";
import {
    setAiExtreactAndInputData,
    setTheProjectCode
} from "@/redux/features/AI-intrigratoin/aiFileDataSlice";
import { usePosAiAllDataForTwoToSaveMutation } from "@/redux/features/AI-intrigratoin/aiServiceSlice";
import { RootState } from "@/redux/store";
import { useEffect, useRef, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { FormValues } from "./types";

const BuildingAIExtractionDataInPut = ({ currentStep, nextStep }: {
    currentStep: number
    nextStep: () => void
}) => {
    const stepByStepData: any = useSelector((state: RootState) => state.aiData);
    // const user: any = useSelector((state: RootState) => state.user.userData);
    console.log("stepByStepData", stepByStepData)
    console.log("stepByStepData", stepByStepData.ownerBaseData)

    const { register, control, handleSubmit } = useForm<FormValues>({
        defaultValues: {
            owners: stepByStepData.ownerBaseData.map((owner: OwnerTypes) => ({
                firstName: owner.firstName || "", // Όνομα
                lastName: owner.lastName || "", // Επώνυμο
                fatherFirstLastName: `${owner.fatherFirstLastName || ""}`, // Πατέρας
                motherFirstLastName: `${owner.motherFirstLastName || ""}`, // Μητέρα
                dateOfBirth: owner.dateOfBirth || "", // Ημερομηνία Γέννησης
                placeOfBirth: owner.placeOfBirth || "", // Τόπος Γέννησης
                ownerAddress: owner.ownerAddress || "", // Διεύθυνση Ιδιοκτήτη
                addressNumber: owner.addressNumber || "", // Αριθμός Διεύθυνσης
                city: owner.city || "", // Πόλη
                postalCode: owner.postalCode || "", // Ταχυδρομικός Κώδικας
                idNumber: owner.idNumber || "", // Α.Δ.Τ
                taxIdentificationNumber: owner.taxIdentificationNumber || "", // ΑΦΜ
                ownershipPercentageOwner: owner.ownershipPercentageOwner || "", // ΑΦΜ
                ownerTypeOwnership: owner.ownerTypeOwnership || "", // ΑΦΜ
                percentageCoOwnershipParcel: owner.percentageCoOwnershipParcel || "", // ΑΦΜ
                email: owner.email || "", // Email
                mobile: owner.phone || "", // Τηλέφωνο
            })),
        },
    });


    const dispatch = useDispatch();
    const hasSubmittedRef = useRef(false);

    const { fields } = useFieldArray({
        control,
        name: "owners",
    });

    const allExtreactData: TProjectData = stepByStepData.aiDataState;
    console.log(allExtreactData)
    const horizontal = stepByStepData?.description.description[0]?.value
    console.log("stepByStepData?.description", stepByStepData?.description, ".........................")
    console.log("horizontal", horizontal, ".........................")
    // const ownerData = stepByStepData.ownerBaseData;
    const projectData = stepByStepData.projectId;
    const ownerData = stepByStepData.ownerBaseData;
    const filesData = stepByStepData.multiFiles;
    const descriptonAndYdom = stepByStepData.description;
    const description = descriptonAndYdom?.description;
    const ydom = stepByStepData?.horizontal?.ydom;
    const kaekProperty = stepByStepData?.aiDataState?.kaek_property;
    const splitedKIaek = kaekProperty?.split("/")[0] || "";
    console.log(splitedKIaek)
    const { ot, prop, } = useCategoriesDetailed(splitedKIaek)

    // console.log("ydom:", ydom);
    console.log("allExtreactData:", descriptonAndYdom);

    const [postDataAll, { isLoading }] = usePosAiAllDataForTwoToSaveMutation();

    const accessToken = tokenCatch();



    console.log("description", description[0]?.value, "...................................")





    const onSubmitAiDataSend = async (data: any) => {
        // Here you can send data to API
        if (ot && prop) {
            console.log("Form Data:", data);
            const DataPost = {
                serviceId: projectData?.id,
                ydom: ydom,
                projectDescriptions: horizontal ?? "",
                technicalDescription: allExtreactData?.technical_description ?? "",
                technicalDescriptionTwo: allExtreactData?.technical_description_two ?? "",
                technicalDescriptionThree: allExtreactData?.technical_description_three ?? "",
                technicalDescriptionFour: allExtreactData?.technical_description_four ?? "",
                technicalDescriptionFive: allExtreactData?.technical_description_five ?? "",
                technicalDescriptionSix: allExtreactData?.technical_description_six ?? "",
                technicalDescriptionSeven: allExtreactData?.technical_description_seven ?? "",
                technicalDescriptionEight: allExtreactData?.technical_description_eight ?? "",
                technicalDescriptionNine: allExtreactData?.technical_description_nine ?? "",
                kaekProperty: allExtreactData?.kaek_property ?? "",
                titleArea: allExtreactData?.title_area ?? "",
                floorProperty: allExtreactData?.floor_property ?? "",
                propertyPlace: allExtreactData?.property_place ?? "",
                numberProperty: allExtreactData?.number_property ?? "",
                propertyAddress: allExtreactData?.property_address ?? "",
                propertyNumber: allExtreactData?.property_number ?? "",
                municipalityCommunity: allExtreactData?.municipality_community ?? "",
                propertyPostalCode: allExtreactData?.property_postal_code ?? "",
                horizontalPropertyName: allExtreactData?.horizontal_property_name ?? "",
                horizontalPropertyNameTwo: allExtreactData?.horizontal_property_name_two ?? "",
                owners: ownerData ?? [],
                plotArea: allExtreactData?.plot_area ?? "",
                withinOutsideCityPlan: allExtreactData?.within_outside_city_plan ?? "",
                permitNumber: allExtreactData?.permit_number ?? "",
                issuingAuthority: allExtreactData?.issuing_authority ?? "",
                legalizationStatementNumber: allExtreactData?.legalization_statement_number ?? "",
                engineerFullName: allExtreactData?.engineer_full_name ?? "",
                electronicCode: allExtreactData?.electronic_code ?? "",
                teeRegistrationNumber: allExtreactData?.tee_registration_number ?? "",
                specialty: allExtreactData?.specialty ?? "",
                inclusionDateLegalization: allExtreactData?.inclusion_date_legalization ?? "",
                processedDocuments: allExtreactData?.processed_documents ?? "",
                processingStatus: allExtreactData?.processing_status ?? "",

                // ✅ Newly added fields in schema
                percentageCoOwnershipParcel: allExtreactData?.percentage_co_ownership_parcel ?? "",
                exclusiveUseProperty: allExtreactData?.exclusive_use_property ?? "",
                miniDescriptionHorizontalProperty: allExtreactData?.mini_description_horizontal_property ?? "",
                numberEstablishmentHorizontalOwnership: allExtreactData?.number_establishment_horizontal_ownership ?? "",
                reviewsNumbersEstablishmentHorizontalOwnership: allExtreactData?.reviews_numbers_establishment_horizontal_ownership ?? "",
                notaryEstablishmentHorizontalOwnership: allExtreactData?.notary_reviews_establishment_horizontal_ownership ?? "",
                // establishmentHorizontalOwnership: allExtreactData?.establishment_horizontal_ownership ?? "",
                licenseNumberRevision: allExtreactData?.license_number_revision ?? "",
                dateIssuanceBuildingPermit: allExtreactData?.date_issuance_building_permit ?? "",
                detailsIssuingAuthority: allExtreactData?.details_issuing_authority ?? "",
                dateIssueBuildingPermitRevision: allExtreactData?.date_issue_building_permit_revision ?? "",
                projectTitleDescriptionLicense: allExtreactData?.project_title_description_license ?? "",
                completionDeclaration3843Number: allExtreactData?.completion_declaration_3843_number ?? "",
                descriptionValidations3843: allExtreactData?.description_validations_3843 ?? "",
                issuingAuthority3843: allExtreactData?.issuing_authority_3843 ?? "",
                dateIssueCompletionDeclaration3843: allExtreactData?.date_issue_completion_declaration_3843 ?? "",
                tokenUsage: allExtreactData?.token_usage ?? "",
                declarationOwnerFor4495: allExtreactData?.declaration_owner_for_4495_2017 ?? "",
                otNumber: ot || "",
                prop: Number(prop) || null,
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
                    ydom: ydom,
                    projectDescriptions: description[0]?.value ?? "",
                    technicalDescription: allExtreactData?.technical_description ?? "",
                    technicalDescriptionTwo: allExtreactData?.technical_description_two ?? "",
                    technicalDescriptionThree: allExtreactData?.technical_description_three ?? "",
                    technicalDescriptionFour: allExtreactData?.technical_description_four ?? "",
                    technicalDescriptionFive: allExtreactData?.technical_description_five ?? "",
                    technicalDescriptionSix: allExtreactData?.technical_description_six ?? "",
                    technicalDescriptionSeven: allExtreactData?.technical_description_seven ?? "",
                    technicalDescriptionEight: allExtreactData?.technical_description_eight ?? "",
                    technicalDescriptionNine: allExtreactData?.technical_description_nine ?? "",
                    kaekProperty: allExtreactData?.kaek_property ?? "",
                    titleArea: allExtreactData?.title_area ?? "",
                    floorProperty: allExtreactData?.floor_property ?? "",
                    propertyPlace: allExtreactData?.property_place ?? "",
                    numberProperty: allExtreactData?.number_property ?? "",
                    propertyAddress: allExtreactData?.property_address ?? "",
                    propertyNumber: allExtreactData?.property_number ?? "",
                    municipalityCommunity: allExtreactData?.municipality_community ?? "",
                    propertyPostalCode: allExtreactData?.property_postal_code ?? "",
                    horizontalPropertyName: allExtreactData?.horizontal_property_name ?? "",
                    horizontalPropertyNameTwo: allExtreactData?.horizontal_property_name_two ?? "",
                    owners: ownerData ?? [],
                    plotArea: allExtreactData?.plot_area ?? "",
                    withinOutsideCityPlan: allExtreactData?.within_outside_city_plan ?? "",
                    permitNumber: allExtreactData?.permit_number ?? "",
                    issuingAuthority: allExtreactData?.issuing_authority ?? "",
                    legalizationStatementNumber: allExtreactData?.legalization_statement_number ?? "",
                    engineerFullName: allExtreactData?.engineer_full_name ?? "",
                    electronicCode: allExtreactData?.electronic_code ?? "",
                    teeRegistrationNumber: allExtreactData?.tee_registration_number ?? "",
                    specialty: allExtreactData?.specialty ?? "",
                    inclusionDateLegalization: allExtreactData?.inclusion_date_legalization ?? "",
                    processedDocuments: allExtreactData?.processed_documents ?? "",
                    processingStatus: allExtreactData?.processing_status ?? "",

                    // ✅ Newly added fields in schema
                    percentageCoOwnershipParcel: allExtreactData?.percentage_co_ownership_parcel ?? "",
                    exclusiveUseProperty: allExtreactData?.exclusive_use_property ?? "",
                    miniDescriptionHorizontalProperty: allExtreactData?.mini_description_horizontal_property ?? "",
                    numberEstablishmentHorizontalOwnership: allExtreactData?.number_establishment_horizontal_ownership ?? "",
                    reviewsNumbersEstablishmentHorizontalOwnership: allExtreactData?.reviews_numbers_establishment_horizontal_ownership ?? "",
                    notaryEstablishmentHorizontalOwnership: allExtreactData?.notary_reviews_establishment_horizontal_ownership ?? "",
                    // establishmentHorizontalOwnership: allExtreactData?.establishment_horizontal_ownership ?? "",
                    licenseNumberRevision: allExtreactData?.license_number_revision ?? "",
                    dateIssuanceBuildingPermit: allExtreactData?.date_issuance_building_permit ?? "",
                    detailsIssuingAuthority: allExtreactData?.details_issuing_authority ?? "",
                    dateIssueBuildingPermitRevision: allExtreactData?.date_issue_building_permit_revision ?? "",
                    projectTitleDescriptionLicense: allExtreactData?.project_title_description_license ?? "",
                    completionDeclaration3843Number: allExtreactData?.completion_declaration_3843_number ?? "",
                    descriptionValidations3843: allExtreactData?.description_validations_3843 ?? "",
                    issuingAuthority3843: allExtreactData?.issuing_authority_3843 ?? "",
                    dateIssueCompletionDeclaration3843: allExtreactData?.date_issue_completion_declaration_3843 ?? "",
                    tokenUsage: allExtreactData?.token_usage ?? "",
                    declarationOwnerFor4495: allExtreactData?.declaration_owner_for_4495_2017 ?? "",
                    otNumber: ot || "",
                    prop: Number(prop) || null,
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
        }
    };

    useEffect(() => {
        if (currentStep === 4 && filesData?.length && !hasSubmittedRef.current) {
            hasSubmittedRef.current = true; // lock it
            // create-project 
            handleSubmit(onSubmitAiDataSend)();
        }
    }, [currentStep, prop, ot]);

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
                <CollapsibleSection
                    title="Project & Property Information( Στοιχεία Έργου & Ιδιοκτησίας)"
                    data={allExtreactData}
                    defaultOpen={true}
                    fields={[
                        {
                            label: "Περιγραφή Έργου (1)",
                            dataKey: "project_descriptions"
                        },
                        {
                            label: "ΑΕΚ Ακινήτου",
                            dataKey: "kaek_property"
                        },
                        {
                            label: "Title_area (Εμβαδόν Ιδιοκτησίας)",
                            dataKey: "title_area"
                        },
                        {
                            label: "Floor_property (Όροφος Ακινήτου)",
                            dataKey: "floor_property"
                        },
                        {
                            label: "Place_property (Αριθμός Ακινήτου)",
                            dataKey: "property_place"
                        },
                        {
                            label: "number_propertyy (Αριθμός Ακινήτου)",
                            dataKey: "number_property"
                        },
                        {
                            label: "property_number (Αριθμός Διεύθυνσης Ακινήτου)",
                            dataKey: "property_number"
                        },
                        {
                            label: "Property_address (Διεύθυνση Ακινήτου)",
                            dataKey: "property_address"
                        },
                        {
                            label: "Municipality_community (Δήμος/Κοινότητα Ακινήτου)",
                            dataKey: "municipality_community"
                        },
                        {
                            label: "Property_postal_code (Ταχυδρομικός Κώδικας Ακινήτου)",
                            dataKey: "property_postal_code"
                        },
                        ...(horizontal ? [{
                            label: "Horizontal_property_name (Οριζόντια Ιδιοκτησία 1)",
                            dataKey: "horizontal_property_name"
                        }] : [])
                    ]}
                />
                {/* owner part  */}
                {fields.map((field: OwnerTypes, index) => (
                    <CollapsibleSection defaultOpen data={field} fields={[
                        {
                            label: "firstName",
                            dataKey: "firstName"
                        },
                        {
                            label: "lastName",
                            dataKey: "lastName"
                        },
                        {
                            label: "fatherFirstLastName",
                            dataKey: "fatherFirstLastName"
                        },
                        {
                            label: "mothersFirstLastName",
                            dataKey: "motherFirstLastName"
                        },
                        {
                            label: "dateOfBirth",
                            dataKey: "dateOfBirth"
                        },
                        {
                            label: "placeOfBirth",
                            dataKey: "placeOfBirth"
                        },
                        {
                            label: "ownerAddress",
                            dataKey: "ownerAddress"
                        },
                        {
                            label: "addressNumber",
                            dataKey: "addressNumber"
                        },
                        {
                            label: "city",
                            dataKey: "city"
                        },
                        {
                            label: "postalCode",
                            dataKey: "postalCode"
                        },
                        {
                            label: "idNumber",
                            dataKey: "idNumber"
                        },
                        {
                            label: "taxIdentificationNumber",
                            dataKey: "taxIdentificationNumber"
                        },
                        {
                            label: "ownershipPercentageOwner",
                            dataKey: "ownershipPercentageOwner"
                        },
                        {
                            label: "ownerTypeOwnership",
                            dataKey: "ownerTypeOwnership"
                        },
                        {
                            label: "percentageCoOwnershipParcel",
                            dataKey: "percentageCoOwnershipParcel"
                        },
                        {
                            label: "email",
                            dataKey: "email"
                        },
                        {
                            label: "phone",
                            dataKey: "phone"
                        },
                    ]} title={`Information of Owner (${fields[index].firstName} ${fields[index].lastName})`} />

                ))}
                {/* 4178/2013-4495/2017 */}
                {/* completed  */}
                <CollapsibleSection data={allExtreactData} defaultOpen={true}
                    fields={[
                        {
                            label: "legalization_statement_number",
                            dataKey: "legalization_statement_number"
                        },
                        {
                            label: "electronic_code",
                            dataKey: "electronic_code"
                        },
                        {
                            label: "engineer_full_name",
                            dataKey: "engineer_full_name"
                        },
                        {
                            label: "tee_registration_number",
                            dataKey: "tee_registration_number"
                        },
                        {
                            label: "specialty",
                            dataKey: "specialty"
                        },
                        {
                            label: "inclusion_date_legalization",
                            dataKey: "inclusion_date_legalization"
                        },
                    ]} title=" 4178/2013-4495/2017" />

                {/* PERMIT PAPER/LAW */}
                {/* ot number left  */}
                <CollapsibleSection
                    data={allExtreactData}
                    defaultOpen={false}
                    fields={[
                        {
                            label: "plot_area",
                            dataKey: "plot_area"
                        },
                        {
                            label: "withinOutsideCityPlan",
                            dataKey: "within_outside_city_plan"
                        },
                        {
                            label: "permitNumber",
                            dataKey: "permit_number"
                        },
                        {
                            label: "issuing_authority",
                            dataKey: "issuing_authority"
                        },
                        {
                            label: "license_number_revision",
                            dataKey: "license_number_revision"
                        },
                        {
                            label: "license_number_revision_two",
                            dataKey: "license_number_revision_two"
                        },
                        {
                            label: "date_issuance_building_permit",
                            dataKey: "date_issuance_building_permit"
                        },
                        {
                            label: "details_issuing_authority",
                            dataKey: "details_issuing_authority"
                        },

                        {
                            label: "date_issue_building_permit_revision",
                            dataKey: "date_issue_building_permit_revision"
                        },
                        {
                            label: "date_issue_building_permit_revision_two",
                            dataKey: "date_issue_building_permit_revision_two"
                        },
                        {
                            label: "issuing_authority",
                            dataKey: "issuing_authority"
                        },
                    ]}
                    title="PERMIT PAPER/LAW"
                />

                {/*1337/LAW*/}
                {/* completed  */}
                <CollapsibleSection data={allExtreactData} defaultOpen={false}
                    fields={[
                        {
                            label: "declaration_number_1337",
                            dataKey: "declaration_number_1337"
                        },
                        {
                            label: "date_of_submission_1337",
                            dataKey: "date_of_submission_1337"
                        },
                        {
                            label: "issuing_authority_1337",
                            dataKey: "issuing_authority_1337"
                        },
                    ]} title="1337/LAW" />

                {/* 3843/2010 LAW */}
                {/* completed  */}
                <CollapsibleSection data={allExtreactData} defaultOpen={false}
                    fields={[
                        {
                            label: "completion_declaration_3843_number",
                            dataKey: "completion_declaration_3843_number"
                        },
                        {
                            label: "description_validations_3843",
                            dataKey: "description_validations_3843"
                        },
                        {
                            label: "issuing_authority_3843",
                            dataKey: "issuing_authority_3843"
                        },
                        {
                            label: "date_issue_completion_declaration_3843",
                            dataKey: "date_issue_completion_declaration_3843"
                        },
                    ]} title="3843/2010 LAW" />

                {/*Loss */}
                {/* completed  */}
                <CollapsibleSection data={allExtreactData} defaultOpen={true}
                    fields={[
                        {
                            label: "issuing_authority_loss_certificate",
                            dataKey: "issuing_authority_loss_certificate"
                        },
                        {
                            label: "protocol_number_loss_certificate",
                            dataKey: "protocol_number_loss_certificate"
                        },
                        {
                            label: "protocol_date_loss_certificate",
                            dataKey: "protocol_date_loss_certificate"
                        },
                    ]} title="Loss Paper" />
                {/*EEMlk */}
                {/* completed  */}
                <CollapsibleSection data={allExtreactData} defaultOpen={true}
                    fields={[
                        {
                            label: "license_number_eemk",
                            dataKey: "license_number_eemk"
                        },
                        {
                            label: "date_of_issuance_eemk",
                            dataKey: "date_of_issuance_eemk"
                        },
                        {
                            label: "issuing_authority_eemk",
                            dataKey: "issuing_authority_eemk"
                        },
                        {
                            label: "project_title_description_eemk",
                            dataKey: "project_title_description_eemk"
                        },
                    ]} title="EEMK Paper" />
                {/*Notary */}
                {/* completed  */}
                <CollapsibleSection data={allExtreactData} defaultOpen={true}
                    fields={[
                        {
                            label: "number_establishment_horizontal_ownership",
                            dataKey: "number_establishment_horizontal_ownership"
                        },
                        {
                            label: "reviews_numbers_establishment_horizontal_ownership",
                            dataKey: "reviews_numbers_establishment_horizontal_ownership"
                        },
                        {
                            label: "notary_establishment_horizontal_ownership",
                            dataKey: "notary_establishment_horizontal_ownership"
                        },
                        {
                            label: "notary_reviews_establishment_horizontal_ownership",
                            dataKey: "notary_reviews_establishment_horizontal_ownership"
                        },
                    ]} title="Notary" />

                {/*Details Property */}
                {/* completed  */}
                <CollapsibleSection data={allExtreactData} defaultOpen={true}
                    fields={[
                        {
                            label: "exclusive_use_property",
                            dataKey: "exclusive_use_property"
                        },
                        {
                            label: "mini_description_horizontal_property",
                            dataKey: "mini_description_horizontal_property"
                        }
                    ]} title="Details Property" />
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

export default BuildingAIExtractionDataInPut;