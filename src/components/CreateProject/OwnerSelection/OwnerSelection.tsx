import React, { useEffect, useState } from "react";
import { Plus, Edit3 } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { MdDeleteOutline } from "react-icons/md";
import {
  Owner as Owners,
  setAiExtractCatchWonerData,
} from "@/redux/features/AI-intrigratoin/aiFileDataSlice";
import { useForm } from "react-hook-form";
type Owner = {
  first_name: string; // Όνομα
  last_name: string; // Επώνυμο
  father_first_last_name: string; // Όνοματεπώνυμο Πατρός
  mothers_first_last_name: string; // Όνοματεπώνυμο Μητρός
  date_of_birth: string; // Ημερομηνία Γέννησης
  place_of_birth: string; // Τόπος Γέννησης
  owner_address: string; // Διεύθυνση Ιδιοκτήτη
  address_number: string; // Αριθμός Διεύθυνσης Ιδιοκτήτη
  city: string; // Πόλη
  postal_code: string; // Ταχυδρομικός Κώδικας
  id_number: string; // Α.Δ.Τ
  tax_identification_number: string; // Αριθμός Φορολογικού Μητρώου (ΑΦΜ)
  email: string; // Email
  mobile: string; // Τηλέφωνο
  selected?: boolean;
};
// interface Owner {
//   address: string;
//   address_code: string;
//   address_municipality_community: string;
//   date_of_birth: string;
//   email: string;
//   fathers_name: string;
//   id_number: string;
//   last_name: string;
//   mobile: string;
//   mothers_name: string;
//   name: string;
//   ownership_percentage: string;
//   place_of_birth: string;
//   tax_identification_number: string;
//   selected?: boolean;
// }

interface AIDataState {
  formatted_data?: {
    owners?: Owner[];
  };
}

interface OwnerSelectionProps {
  allselectedOwners: Owner[];
  onOwnersChange: (owners: Owner[]) => void;
}

type OwnerFormInputs = {
  firstName: string;
  surname: string;
  fatherName: string;
  vatNo: string;
};

type EditingOwnerType = {
  owner: Owner;
  index: number;
};

const OwnerSelection = () => {
  const [projectDescription, setProjectDescription] = useState(
    "Renovation of residence"
  );
  const [editingOwner, setEditingOwner] = useState<EditingOwnerType | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedOwners, setSelectedOwners] = useState<Owner[]>([]);

  const dispatch = useDispatch();
  const ownerData = useSelector((state: any) => state.aiData.aiDataState);
  console.log(ownerData.owners);
  console.log(ownerData?.project_description);

  // const owners = (ownerData.owners ?? []) as Owner[];

  const [isOwner, setIsOwner] = useState<Owner[]>(ownerData.owners);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<OwnerFormInputs>();

  const onSubmit = (data: OwnerFormInputs) => {
    const emptyOwner: Owner = {
      first_name: data.firstName || "", // Όνομα
      last_name: data.surname || "", // Επώνυμο
      father_first_last_name: data.fatherName || "", // Πατέρας
      mothers_first_last_name: "", // Μητέρα
      date_of_birth: "", // Ημερομηνία Γέννησης
      place_of_birth: "", // Τόπος Γέννησης
      owner_address: "", // Διεύθυνση Ιδιοκτήτη
      address_number: "", // Αριθμός Διεύθυνσης
      city: "", // Πόλη
      postal_code: "", // Ταχυδρομικός Κώδικας
      id_number: "", // Α.Δ.Τ
      tax_identification_number: data.vatNo || "", // ΑΦΜ
      email: "", // Email
      mobile: "", // Τηλέφωνο
    };

    const updatedOwners = [...isOwner, emptyOwner];
    setIsOwner(updatedOwners);
    setIsModalOpen(false);
  };

  // edit page owner
  const onEditSubmit = (data: OwnerFormInputs) => {
    if (editingOwner !== null) {
      const updatedOwner: Owner = {
        first_name: data.firstName || "", // Όνομα
        last_name: data.surname || "", // Επώνυμο
        father_first_last_name: data.fatherName || "", // Πατέρας
        mothers_first_last_name: "", // Μητέρα
        date_of_birth: "", // Ημερομηνία Γέννησης
        place_of_birth: "", // Τόπος Γέννησης
        owner_address: "", // Διεύθυνση Ιδιοκτήτη
        address_number: "", // Αριθμός Διεύθυνσης
        city: "", // Πόλη
        postal_code: "", // Ταχυδρομικός Κώδικας
        id_number: "", // Α.Δ.Τ
        tax_identification_number: data.vatNo || "", // ΑΦΜ
        email: "", // Email
        mobile: "", // Τηλέφωνο
      };

      const updated = [...isOwner];
      updated[editingOwner.index] = updatedOwner;
      setIsOwner(updated);
      reset();
      setIsEditModalOpen(false);
    }
  };

  const handleDeleteOwner = (index: number) => {
    const deleteowner = isOwner.filter((item, i) => i !== index);
    setIsOwner(deleteowner);
  };

  const openAddOwnerModal = () => {
    setIsModalOpen(true);
  };

  const openEditModalOwner = (owner: Owner, index: number) => {
    setEditingOwner({ owner, index });
    setIsEditModalOpen(true);
  };
  // toggle owner selection
  // const toggleOwnerSelection = (index: number) => {
  //   const updatedOwners = [...isOwner];
  //   updatedOwners[index] = {
  //     ...updatedOwners[index],
  //     selected: !updatedOwners[index].selected,
  //   };
  //   setIsOwner(updatedOwners);
  // };

  const toggleOwnerSelection = (index: number) => {
    const owner = isOwner[index];

    // check if already selected
    const alreadySelected = selectedOwners.some(
      (o) => o.tax_identification_number === owner.tax_identification_number
    );

    if (alreadySelected) {
      // if already selected → remove it
      setSelectedOwners(
        selectedOwners.filter(
          (o) => o.tax_identification_number !== owner.tax_identification_number
        )
      );
    } else {
      // otherwise add it
      setSelectedOwners([...selectedOwners, { ...owner, selected: true }]);

      // setOwnerNumber(4);
    }
  };

  console.log("new", selectedOwners);

  useEffect(() => {
    dispatch(setAiExtractCatchWonerData(selectedOwners));
  }, [selectedOwners]);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-start mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Select Owner(s)
          </h1>
          <p className="text-gray-600 text-lg">if not clear from document</p>
        </div>
        <button
          onClick={openAddOwnerModal}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200 flex items-center space-x-2 font-medium"
        >
          <Plus className="w-4 h-4" />
          <span>Add Owner</span>
        </button>
      </div>

      {/* Project Description */}
      <div className="space-y-3 mb-8">
        <label className="block text-gray-900 font-medium">
          Project Description
        </label>
        <textarea
          value={ownerData?.project_description}
          onChange={(e) => setProjectDescription(e.target.value)}
          className="w-full  px-4 py-2 border  h-[200px] border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Enter project description"
        />
      </div>

      {/* Owners Grid */}

      {isOwner?.length === 0 && (
        <div className="flex justify-center w-full mt-20">
          <div className="border border-dashed p-20 border-blue-500 rounded-xl">
            <h2 className="text-xl">
              Owner is no select. please your owner selecting.
            </h2>
          </div>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {isOwner?.map((owner: any, index) => (
          <div
            onClick={() => toggleOwnerSelection(index)}
            key={index}
            className={`p-6 rounded-lg relative cursor-pointer transition-all duration-200 border-2 
    ${
      selectedOwners?.some(
        (o) => o.tax_identification_number === owner.tax_identification_number
      )
        ? "border-blue-600 bg-blue-50 shadow-md"
        : "border-gray-200 bg-white hover:border-blue-300"
    }`}
          >
            <div className="flex gap-2 absolute top-4 right-4 text-gray-400  ">
              <button
                onClick={() => openEditModalOwner(owner, index)}
                className="block hover:text-gray-600 cursor-pointer"
              >
                <Edit3 className="w-4 h-4" />
              </button>

              <button
                onClick={() => handleDeleteOwner(index)}
                className=" text-red-500 cursor-pointer  block hover:text-red-700"
              >
                <MdDeleteOutline />
              </button>
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Owner {index + 1}
            </h3>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-gray-700 font-medium">First Name:</label>
                <span className="text-gray-900 font-medium">
                  {owner.first_name || "Not set"}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <label className="text-gray-700 font-medium">Surname:</label>
                <span className="text-gray-900 font-medium">
                  {owner.last_name || "Not set"}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <label className="text-gray-700 font-medium">
                  Father's Name:
                </label>
                <span className="text-gray-900 font-medium">
                  {owner.father_first_name || "Not set"}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <label className="text-gray-700 font-medium">VAT No:</label>
                <span className="text-gray-900 font-medium">
                  {owner.tax_identification_number || "Not set"}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Save & Continue Button */}
      {/* <div className="flex justify-end">
        <button className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-200 font-medium text-lg">
          Save & Continue
        </button>
      </div> */}

      {/* Add/Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 w-full max-w-md mx-4">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-gray-900">Owner</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <Edit3 className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    First Name:
                  </label>
                  <input
                    type="text"
                    {...register("firstName", { required: true })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Giannis"
                  />
                  {errors.firstName && (
                    <span className="text-red-500 text-sm">Required</span>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Surname:
                  </label>
                  <input
                    type="text"
                    {...register("surname", { required: true })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Papadopoulos"
                  />
                  {errors.surname && (
                    <span className="text-red-500 text-sm">Required</span>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Father's Name:
                </label>
                <input
                  type="text"
                  {...register("fatherName", { required: true })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Nikos"
                />
                {errors.fatherName && (
                  <span className="text-red-500 text-sm">Required</span>
                )}
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  VAT No:
                </label>
                <input
                  type="text"
                  {...register("vatNo", { required: true })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="VAT-12213484"
                />
                {errors.vatNo && (
                  <span className="text-red-500 text-sm">Required</span>
                )}
              </div>

              <div className="flex justify-end mt-8">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200 font-medium"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* openEditModal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 w-full max-w-md mx-4">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Owner Edit
              </h3>
              <button
                onClick={() => setIsEditModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                X
              </button>
            </div>

            <form onSubmit={handleSubmit(onEditSubmit)} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    First Name:
                  </label>
                  <input
                    type="text"
                    defaultValue={editingOwner?.owner?.first_name}
                    {...register("firstName", { required: true })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Giannis"
                  />
                  {errors.firstName && (
                    <span className="text-red-500 text-sm">Required</span>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Surname:
                  </label>
                  <input
                    type="text"
                    defaultValue={editingOwner?.owner?.last_name}
                    {...register("surname", { required: true })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Papadopoulos"
                  />
                  {errors.surname && (
                    <span className="text-red-500 text-sm">Required</span>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Father's Name:
                </label>
                <input
                  type="text"
                  defaultValue={editingOwner?.owner?.first_name}
                  {...register("fatherName", { required: true })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Nikos"
                />
                {errors.fatherName && (
                  <span className="text-red-500 text-sm">Required</span>
                )}
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  VAT No:
                </label>
                <input
                  type="text"
                  defaultValue={editingOwner?.owner?.tax_identification_number}
                  {...register("vatNo", { required: true })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="VAT-12213484"
                />
                {errors.vatNo && (
                  <span className="text-red-500 text-sm">Required</span>
                )}
              </div>

              <div className="flex justify-end mt-8">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200 font-medium"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default OwnerSelection;
