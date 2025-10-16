import { AiOwnerTypes, OwnerTypes } from "@/interfaces/global";
import { setAiExtractCatchWonerData } from "@/redux/features/AI-intrigratoin/aiFileDataSlice";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FiEdit2 } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch } from "react-redux";

const SharedOwnerSelection = ({
    aiOwner,
    setValidationError,
    validationError,
}: {
    aiOwner: AiOwnerTypes[] | null;
    setValidationError: Dispatch<
        SetStateAction<{
            description: string;
            owner: string;
        }>
    >;
    validationError: {
        description: string;
        owner: string;
    };
}) => {
    const [isOwner, setIsOwner] = useState<AiOwnerTypes[]>(aiOwner || []);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedOwners, setSelectedOwners] = useState<OwnerTypes[]>([]);
    const [editingOwner, setEditingOwner] = useState<{
        owner: AiOwnerTypes;
        index: number;
    } | null>(null);
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<{
        firstName: string;
        surname: string;
        fatherName: string;
        vatNo: string;
        email: string;
        phone: string;
        address: string;
        city: string;
        postalCode: string;
        dateOfBirth: string;
        placeOfBirth: string;
    }>();

    // ✅ Add new owner
    const onSubmit = (data: any) => {
        const newOwner: AiOwnerTypes = {
            first_name: data.firstName,
            last_name: data.surname,
            father_first__last_name: data.fatherName,
            mother_first__last_name: null,
            date_of_birth: data.dateOfBirth,
            place_of_birth: data.placeOfBirth,
            owner_address: data.address,
            address_number: "",
            postal_code: data.postalCode,
            city: data.city,
            id_number: "",
            tax_identification_number: data.vatNo,
            ownership_percentage_owner: "",
            owner_type_ownership: "",
            email: data.email,
            phone: data.phone,
        } as any;

        setIsOwner((prev) => [...prev, newOwner]);
        reset();
        setIsModalOpen(false);
    };

    // ✅ Open edit modal
    const openEditModalOwner = (
        e: React.MouseEvent,
        owner: AiOwnerTypes,
        index: number
    ) => {
        e.stopPropagation();
        setEditingOwner({ owner, index });
        reset({
            firstName: owner.first_name,
            surname: owner.last_name,
            fatherName: owner.father_first__last_name,
            vatNo: owner.tax_identification_number,
            email: (owner as any).email || "",
            phone: (owner as any).phone || "",
            address: owner.owner_address,
            city: owner.city,
            postalCode: owner.postal_code,
            dateOfBirth: owner.date_of_birth,
            placeOfBirth: owner.place_of_birth,
        });
        setIsEditModalOpen(true);
    };

    // ✅ Update owner
    const onEditSubmit = (data: any) => {
        if (editingOwner) {
            const updatedOwner: AiOwnerTypes = {
                ...editingOwner.owner,
                first_name: data.firstName,
                last_name: data.surname,
                father_first__last_name: data.fatherName,
                tax_identification_number: data.vatNo,
                owner_address: data.address,
                city: data.city,
                postal_code: data.postalCode,
                date_of_birth: data.dateOfBirth,
                place_of_birth: data.placeOfBirth,
                email: data.email,
                phone: data.phone,
            } as any;

            const updatedOwners = [...isOwner];
            updatedOwners[editingOwner.index] = updatedOwner;
            setIsOwner(updatedOwners);
            reset();
            setEditingOwner(null);
            setIsEditModalOpen(false);
        }
    };

    // ✅ Delete owner
    const handleDeleteOwner = (index: number) => {
        const deletedOwner = isOwner[index];
        setIsOwner((prev) => prev.filter((_, i) => i !== index));
        setSelectedOwners((prev) =>
            prev.filter((o) => o.firstName !== deletedOwner.first_name)
        );
    };

    // ✅ Select owner
    const toggleOwnerSelection = (index: number) => {
        const owner = isOwner[index];
        const alreadySelected = selectedOwners.some(
            (o) => o.firstName === owner.first_name
        );

        if (alreadySelected) {
            setSelectedOwners((prev) =>
                prev.filter((o) => o.firstName !== owner.first_name)
            );
        } else {
            const convertedOwner: OwnerTypes = {
                firstName: owner.first_name,
                lastName: owner.last_name,
                fatherFirstLastName: owner.father_first__last_name,
                motherFirstLastName: owner.mother_first__last_name,
                dateOfBirth: owner.date_of_birth,
                placeOfBirth: owner.place_of_birth,
                ownerAddress: owner.owner_address,
                addressNumber: owner.address_number,
                postalCode: owner.postal_code,
                city: owner.city,
                idNumber: owner.id_number,
                taxIdentificationNumber: owner.tax_identification_number,
                ownershipPercentageOwner: owner.ownership_percentage_owner,
                ownerTypeOwnership: owner.owner_type_ownership,
                email: (owner as any).email || "",
                phone: (owner as any).phone || "",
            };
            setSelectedOwners((prev) => [...prev, convertedOwner]);
        }

        if (validationError.owner) {
            setValidationError((prev) => ({ ...prev, owner: "" }));
        }
    };

    useEffect(() => {
        dispatch(setAiExtractCatchWonerData(selectedOwners));
    }, [selectedOwners]);

    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <p className="font-medium">Please choose your owner(s):</p>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    + Add Owner
                </button>
            </div>

            {isOwner.length === 0 ? (
                <div className="flex justify-center w-full mt-20">
                    <div className="border border-dashed p-20 border-blue-500 rounded-xl">
                        <h2 className="text-xl text-center text-gray-600">
                            No owners available. Please add an owner to proceed.
                        </h2>
                    </div>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    {isOwner.map((owner, index) => (
                        <div
                            onClick={() => toggleOwnerSelection(index)}
                            key={index}
                            className={`p-6 rounded-lg relative cursor-pointer border-2 ${selectedOwners.some((o) => o.firstName === owner.first_name)
                                ? "border-blue-600 bg-blue-50"
                                : "border-blue-400 bg-white"
                                }`}
                        >
                            <div className="absolute top-4 right-4 flex gap-2">
                                <button
                                    onClick={(e) => openEditModalOwner(e, owner, index)}
                                    className="text-gray-500 hover:text-black"
                                >
                                    <FiEdit2 />
                                </button>
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleDeleteOwner(index);
                                    }}
                                    className="text-red-500 hover:text-red-700"
                                >
                                    <MdDeleteOutline />
                                </button>
                            </div>

                            <h3 className="text-lg font-semibold mb-4">
                                Owner {index + 1}
                            </h3>
                            <div className="space-y-1 text-sm">
                                <p><b>First Name:</b> {owner.first_name}</p>
                                <p><b>Surname:</b> {owner.last_name}</p>
                                <p><b>Father:</b> {owner.father_first__last_name}</p>
                                {/* <p><b>Email:</b> {(owner as any).email || "Not set"}</p> */}
                                {/* <p><b>Phone:</b> {(owner as any).phone || "Not set"}</p> */}
                                {/* <p><b>Address:</b> {owner.owner_address || "Not set"}</p> */}
                                {/* <p><b>City:</b> {owner.city || "Not set"}</p> */}
                                {/* <p><b>Postal Code:</b> {owner.postal_code || "Not set"}</p> */}
                                {/* <p><b>Date of Birth:</b> {owner.date_of_birth || "Not set"}</p> */}
                                {/* <p><b>Place of Birth:</b> {owner.place_of_birth || "Not set"}</p> */}
                                <p><b>VAT No:</b> {owner.tax_identification_number || "Not set"}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Add Owner Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 w-full max-w-md">
                        <div className="flex justify-between mb-4">
                            <h3 className="text-lg font-semibold">Add Owner</h3>
                            <button onClick={() => setIsModalOpen(false)}>
                                <IoClose />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                            <input placeholder="First Name" {...register("firstName", { required: "Required" })} className="border p-2 w-full rounded" />
                            <input placeholder="Surname" {...register("surname", { required: "Required" })} className="border p-2 w-full rounded" />
                            <input placeholder="Father's Name" {...register("fatherName", { required: "Required" })} className="border p-2 w-full rounded" />
                            <input placeholder="Email" {...register("email", { required: "Required" })} className="border p-2 w-full rounded" />
                            <input placeholder="Phone" {...register("phone", { required: "Required" })} className="border p-2 w-full rounded" />
                            <input placeholder="Address" {...register("address")} className="border p-2 w-full rounded" />
                            <input placeholder="City" {...register("city")} className="border p-2 w-full rounded" />
                            <input placeholder="Postal Code" {...register("postalCode")} className="border p-2 w-full rounded" />
                            <input placeholder="VAT No" {...register("vatNo", { required: "Required" })} className="border p-2 w-full rounded" />
                            <input type="date" {...register("dateOfBirth")} className="border p-2 w-full rounded" />
                            <input placeholder="Place of Birth" {...register("placeOfBirth")} className="border p-2 w-full rounded" />

                            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">
                                Save
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* Edit Owner Modal */}
            {isEditModalOpen && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 w-full max-w-md">
                        <div className="flex justify-between mb-4">
                            <h3 className="text-lg font-semibold">Edit Owner</h3>
                            <button onClick={() => setIsEditModalOpen(false)}>
                                <IoClose />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit(onEditSubmit)} className="space-y-3">
                            <input placeholder="First Name" {...register("firstName", { required: "Required" })} className="border p-2 w-full rounded" />
                            <input placeholder="Surname" {...register("surname", { required: "Required" })} className="border p-2 w-full rounded" />
                            <input placeholder="Father's Name" {...register("fatherName", { required: "Required" })} className="border p-2 w-full rounded" />
                            <input placeholder="Email" {...register("email", { required: "Required" })} className="border p-2 w-full rounded" />
                            <input placeholder="Phone" {...register("phone", { required: "Required" })} className="border p-2 w-full rounded" />
                            <input placeholder="Address" {...register("address")} className="border p-2 w-full rounded" />
                            <input placeholder="City" {...register("city")} className="border p-2 w-full rounded" />
                            <input placeholder="Postal Code" {...register("postalCode")} className="border p-2 w-full rounded" />
                            <input placeholder="VAT No" {...register("vatNo", { required: "Required" })} className="border p-2 w-full rounded" />
                            <input type="date" {...register("dateOfBirth")} className="border p-2 w-full rounded" />
                            <input placeholder="Place of Birth" {...register("placeOfBirth")} className="border p-2 w-full rounded" />

                            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">
                                Save Changes
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {validationError.owner && (
                <p className="text-red-500 text-sm mt-2">{validationError.owner}</p>
            )}
        </div>
    );
};

export default SharedOwnerSelection;

