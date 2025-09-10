import React, { useEffect, useState } from "react";
import { Plus, Edit3 } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { MdDeleteOutline } from "react-icons/md";
import {
  Owner as Owners,
  setAiExtractCatchWonerData,
  setMultipleDescription,
} from "@/redux/features/AI-intrigratoin/aiFileDataSlice";
import { useForm } from "react-hook-form";
import { IoClose } from "react-icons/io5";
import { FiEdit2 } from "react-icons/fi";
type Owner = {
  first_name: string; // Όνομα
  last_name: string; // Επώνυμο
  fatherName: string; // Όνοματεπώνυμο Πατρός
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
  ydom: string; // Τηλέφωνο
  selected?: boolean;
};

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
  ydom: string;
  vatNo: string;
};

type EditingOwnerType = {
  owner: Owner;
  index: number;
};

type Property = {
  title: string;
  description: string;
  selected?: boolean;
};

type SelectedProperty = {
  index: number;
  value: string;
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

  const [selectedProperty, setSelectedProperty] = useState<SelectedProperty[]>(
    []
  );
  const [ydomModalOpen, setYdomModalOpen] = useState(false);

  const [newText, setNewText] = useState("");
  const [editId, setEditId] = useState<number | null>(null);
  const [ydom, setYdom] = useState<
    { id: number; title: string; text: string }[]
  >([]);

  const dispatch = useDispatch();
  const ownerData = useSelector((state: any) => state.aiData.aiDataState);

  const [isOwner, setIsOwner] = useState<Owner[]>(ownerData.owners);

  const description1 = ownerData?.project_descriptions
    .filter((_: any, i: number) => i % 2 === 0)
    .join(" & ");
  const description2 = ownerData?.project_descriptions
    .filter((_: any, i: number) => i % 2 === 1)
    .join(" & ");

  const result = [description1, description2];
  const [descriptionShow, setDescriptionShow] = useState<string[]>(result);

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
      fatherName: data.fatherName || "", // Πατέρας
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
      ydom: data.ydom,
      mobile: "", // Τηλέφωνο
    };

    const updatedOwners = [...isOwner, emptyOwner];
    setIsOwner(updatedOwners);
    setIsModalOpen(false);
  };

  // ydom working function
  const handleOpenNew = () => {
    setEditId(null);
    setNewText("");
    setYdomModalOpen(true);
  };

  // Open modal for editing existing owner
  const handleOpenEdit = (id: number, text: string) => {
    setEditId(id);
    setNewText(text);
    setYdomModalOpen(true);
  };

  // Save owner (new or edited)
  const handleSave = () => {
    if (newText.trim() === "") return;

    if (editId) {
      // update existing
      setYdom(ydom.map((o) => (o.id === editId ? { ...o, text: newText } : o)));
    } else {
      // add new
      setYdom([
        ...ydom,
        {
          id: ydom.length + 1,
          title: `Description ${ydom.length + 1}`,
          text: newText,
        },
      ]);
    }

    setNewText("");
    setEditId(null);
    setYdomModalOpen(false);
  };

  // edit page owner
  const onEditSubmit = (data: OwnerFormInputs) => {
    if (editingOwner !== null) {
      const updatedOwner: Owner = {
        first_name: data.firstName || "", // Όνομα
        last_name: data.surname || "", // Επώνυμο
        fatherName: data.fatherName || "", // Πατέρας
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
        ydom: data.ydom,
        mobile: "", // Τηλέφωνο
      };

      const updated = [...isOwner];
      updated[editingOwner.index] = updatedOwner;
      setIsOwner(updated);
      reset();
      setIsEditModalOpen(false);
    }
  };

  // the description functionalty working

  const togglePropertySelection = (index: number, value: string) => {
    const alreadySelected = selectedProperty.find(
      (item) => item.index === index
    );

    if (alreadySelected) {
      // remove
      setSelectedProperty(
        selectedProperty.filter((item) => item.index !== index)
      );
    } else {
      // add
      setSelectedProperty([...selectedProperty, { index, value }]);
    }
  };
  // const togglePropertySelection = (index: number) => {
  //   const property = descriptionShow[index];

  //   // check if already selected
  //   const alreadySelected = selectedProperty.some((o, i) => i === i);

  //   if (alreadySelected) {
  //     // if already selected → remove it
  //     setSelectedProperty(selectedProperty.filter((o, i) => i !== i));
  //   } else {
  //     // otherwise add it
  //     setSelectedProperty([
  //       ...selectedProperty,
  //       { ...property, selected: true },
  //     ]);

  //     // setOwnerNumber(4);
  //   }
  // };

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
  // the owner functionalty working
  const toggleOwnerSelection = (index: number) => {
    const owner = isOwner[index];

    const alreadySelected = selectedOwners.some(
      (o) => o.first_name === owner.first_name
    );

    if (alreadySelected) {
      setSelectedOwners(
        selectedOwners.filter((o) => o.first_name !== owner.first_name)
      );
    } else {
      setSelectedOwners([...selectedOwners, { ...owner, selected: true }]);
    }
  };

  console.log(selectedProperty);

  useEffect(() => {
    dispatch(
      setMultipleDescription({ description: selectedProperty, ydom: ydom })
    );
  }, [selectedProperty, ydom]);
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
        <div className="flex gap-5">
          <button
            onClick={handleOpenNew}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            + Add Ydom
          </button>
          <button
            onClick={openAddOwnerModal}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200 flex items-center space-x-2 font-medium"
          >
            <Plus className="w-4 h-4" />
            <span>Add Owner</span>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {descriptionShow?.map((property: string, index: number) => (
          <div
            onClick={() => togglePropertySelection(index, property)}
            key={index}
            className={`p-6 rounded-lg relative cursor-pointer transition-all duration-200 border-2 
        ${
          selectedProperty.some((item) => item.index === index)
            ? "border-blue-600 bg-blue-50 shadow-md"
            : "border-gray-200 bg-white hover:border-blue-300"
        }`}
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Description {index + 1}
            </h3>
            <p>{property}</p>
          </div>
        ))}
      </div>

      {/* Project Description */}

      {/* ydom show  */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {ydom.map((dom, i) => (
          <div
            key={dom.id}
            className="border border-gray-300 rounded-lg p-4 bg-white shadow-sm relative"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-semibold">Serial {`(${i + 1})`}</h3>

              <button
                onClick={() => handleOpenEdit(dom.id, dom.text)}
                className="text-gray-500 hover:text-blue-500"
              >
                <FiEdit2 />
              </button>
            </div>

            <div className="flex justify-between items-start mb-2">
              <h3 className="">Ydom:</h3>
              <p className="text-sm text-gray-700 whitespace-pre-line">
                {`${dom.text}` || "N/A"}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ydom Modal */}
      {ydomModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
            <h2 className="text-lg font-semibold mb-4">
              {editId ? "Edit Ydom" : "Add New Ydom"}
            </h2>
            <textarea
              value={newText}
              onChange={(e) => setNewText(e.target.value)}
              className="w-full border rounded-lg p-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows={4}
              placeholder="Enter description..."
            />
            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={() => setYdomModalOpen(false)}
                className="px-4 py-2 rounded-lg border hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
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
      selectedOwners?.some((o, i) => o.first_name === owner.first_name)
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
                  {owner?.fatherName || "Not set"}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <label className="text-gray-700 font-medium">Ydom:</label>
                <span className="text-gray-900 font-medium">
                  {ownerData?.municipality_community ||
                    owner?.ydom ||
                    "Not set"}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <label className="text-gray-700 font-medium">VAT No:</label>
                <span className="text-gray-900 font-medium">
                  {owner?.tax_identification_number || "Not set"}
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

      {/* Add Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 w-full max-w-md mx-4">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-gray-900">Owner</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <IoClose className="w-5 h-5" />
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
                  Ydom:
                </label>
                <input
                  type="text"
                  {...register("ydom", { required: true })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="ydom"
                />
                {errors.ydom && (
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
                  Ydom:
                </label>
                <input
                  type="text"
                  defaultValue={`${ownerData?.municipality_community || " "}`}
                  {...register("ydom", { required: true })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="ydom"
                />
                {errors.ydom && (
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
