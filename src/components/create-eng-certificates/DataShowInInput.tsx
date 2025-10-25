"use client";
import PrimaryButton from "@/components/shared/primaryButton/PrimaryButton";
import CollapsibleSection from "@/components2.0/shared/tableComponents/TableComponents";
import { OwnerTypes } from "@/interfaces/global";
import tokenCatch from "@/lib/token";
import {
    setAiExtreactAndInputData,
    setTheProjectCode,
} from "@/redux/features/AI-intrigratoin/aiFileDataSlice";
import { usePosAiAllDataSaveMutation } from "@/redux/features/AI-intrigratoin/aiServiceSlice";
import { RootState } from "@/redux/store";
import { useEffect, useRef } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { useCategoriesDetailed } from "@/hooks/useNewVariables";
import { FormValues } from "./template";

const DataShowInInput = ({
    currentStep,
    nextStep,
}: {
    currentStep: number;
    nextStep: () => void;
}) => {

    const stepByStepData: any = useSelector((state: RootState) => state.aiData);
    const projectDescription = stepByStepData?.description?.description[0]?.value
    const { control } = useForm<FormValues>({
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

    const allExtreactData = stepByStepData.aiDataState;
    const ownerData = stepByStepData.ownerBaseData;
    const projectData = stepByStepData.projectId;
    const subCategoryData = stepByStepData.subcategory;
    const descrptionTasks = stepByStepData.descriptionTask;
    const filesData = stepByStepData.multiFiles;
    const descriptonAndYdom = stepByStepData.description;
    const description = descriptonAndYdom?.description;
    const ydom = stepByStepData?.horizontal?.ydom;
    const horizontal = stepByStepData?.horizontal?.horizontal[0].description
    const kaekProperty = stepByStepData?.aiDataState?.kaek_property;

    const [postDataAll] = usePosAiAllDataSaveMutation();

    const accessToken = tokenCatch();

    const onSubmitAiDataSend = async () => {
        const DataPost = {
            serviceId: projectData?.id,
            // createdById: user?.userId,
            subCategories: subCategoryData,
            descrptionTasks: descrptionTasks,
            ydom: ydom,
            technicalDescription: allExtreactData?.technical_description,
            technicalDescriptionTwo: allExtreactData?.technical_description_two,
            projectDescriptions: description[0]?.value ?? "",
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
            horizontalPropertyName: horizontal ?? "",
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
            otNumber: allExtreactData.ot || "",
            prop: allExtreactData.prop || "",
        };
        console.log(DataPost)
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
                ydom: ydom,
                technicalDescription: allExtreactData?.technical_description,
                technicalDescriptionTwo: allExtreactData?.technical_description_two,
                projectDescriptions: description[0]?.value ?? "",
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
                horizontalPropertyName: horizontal ?? "",
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
                otNumber: allExtreactData.ot || "",
                prop: Number(allExtreactData.prop) || null,
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

    useEffect(() => {
        if (currentStep === 5 && filesData?.length && !hasSubmittedRef.current) {
            hasSubmittedRef.current = true; // lock it
            // create-project
            onSubmitAiDataSend()
        }
    }, [currentStep]);

    return (
        <>
            <div className="">
                <h2 className="text-[#333333] text-5xl font-semibold">
                    AI Extraction
                </h2>
                <p className=" text-[#777777] mt-3">
                    Here is the extracted information. Please review and confirm.
                </p>
            </div>
            {/* completed  */}
            <CollapsibleSection
                title="Project & Property Information (Στοιχεία Έργου & Ιδιοκτησίας)"
                data={{ ...allExtreactData, projectDescription: projectDescription }}
                defaultOpen={true}
                fields={[
                    {
                        label: "Περιγραφή Έργου (1)",
                        dataKey: "projectDescription"
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

            {/* PERMIT PAPER/LAW */}
            {/* completed  */}
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
                        label: "details_issuing_authority",
                        dataKey: "details_issuing_authority"
                    },
                    {
                        label: "ot",
                        dataKey: "ot"
                    },
                ]}
                title="PERMIT PAPER/LAW"
            />
            {/* owner part  */}
            {fields.map((field: OwnerTypes, index) => (
                <CollapsibleSection data={field} fields={[
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
                        label: "email",
                        dataKey: "email"
                    },
                    {
                        label: "phone",
                        dataKey: "phone"
                    },
                ]} title={`Information of Owner (${fields[index].firstName} ${fields[index].lastName})`} />

            ))}
            {currentStep < 6 && (
                <div className="flex justify-end mt-4 w-fit ml-auto">
                    <PrimaryButton
                        onClick={nextStep}
                        // disabled={canProceed()}
                        label="Next"
                    />
                </div>
            )}
        </>
    );
};

export default DataShowInInput;