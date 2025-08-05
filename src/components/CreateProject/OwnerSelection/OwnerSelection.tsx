import React, { useEffect, useState } from "react";
import { Plus, Edit3 } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import {
  Owner as Owners,
  setAiExtractCatchWonerData,
} from "@/redux/features/AI-intrigratoin/aiFileDataSlice";
import { useForm } from "react-hook-form";

interface Owner {
  address: string;
  address_code: string;
  address_municipality_community: string;
  date_of_birth: string;
  email: string;
  fathers_name: string;
  id_number: string;
  last_name: string;
  mobile: string;
  mothers_name: string;
  name: string;
  ownership_percentage: string;
  place_of_birth: string;
  tax_identification_number: string;
}

interface AIDataState {
  formatted_data?: {
    owners?: Owner[];
  };
}

interface OwnerSelectionProps {
  selectedOwners: Owner[];
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

  const dispatch = useDispatch();
  const ownerData = useSelector((state: any) => state.aiData.aiDataState);
  console.log(ownerData);

  const owners = (ownerData?.formatted_data?.owners ?? []) as Owner[];

  const [isOwner, setIsOwner] = useState<Owner[]>(owners);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<OwnerFormInputs>();

  const onSubmit = (data: OwnerFormInputs) => {
    const emptyOwner: Owner = {
      address: "",
      address_code: "",
      address_municipality_community: "",
      date_of_birth: "",
      email: "",
      fathers_name: data.fatherName,
      id_number: "",
      last_name: data.surname,
      mobile: "",
      mothers_name: "",
      name: data.firstName,
      ownership_percentage: "",
      place_of_birth: "",
      tax_identification_number: data.vatNo,
    };

    const updatedOwners = [...isOwner, emptyOwner];
    setIsOwner(updatedOwners);
    setIsModalOpen(false);
  };

  const onEditSubmit = (data: OwnerFormInputs) => {
    if (editingOwner !== null) {
      const updatedOwner: Owner = {
        address: "",
        address_code: "",
        address_municipality_community: "",
        date_of_birth: "",
        email: "",
        fathers_name: data.fatherName,
        id_number: "",
        last_name: data.surname,
        mobile: "",
        mothers_name: "",
        name: data.firstName,
        ownership_percentage: "",
        place_of_birth: "",
        tax_identification_number: data.vatNo,
      };

      const updated = [...isOwner];
      updated[editingOwner.index] = updatedOwner;
      setIsOwner(updated);
      reset();
      setIsEditModalOpen(false);
    }
  };

  const openAddOwnerModal = () => {
    setIsModalOpen(true);
  };

  const openEditModalOwner = (owner: Owner, index: number) => {
    setEditingOwner({ owner, index });
    setIsEditModalOpen(true);
  };

  useEffect(() => {
    dispatch(setAiExtractCatchWonerData(isOwner));
  }, [isOwner]);

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
        <input
          type="text"
          value={projectDescription}
          onChange={(e) => setProjectDescription(e.target.value)}
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Enter project description"
        />
      </div>

      {/* Owners Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {isOwner?.map((owner: any, index) => (
          <div key={index} className="bg-gray-50 p-6 rounded-lg relative">
            <button
              onClick={() => openEditModalOwner(owner, index)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <Edit3 className="w-4 h-4" />
            </button>

            <h3 className="text-lg font-semibold text-gray-900 mb-6">
              Owner {index + 1}
            </h3>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-gray-700 font-medium">First Name:</label>
                <span className="text-gray-900 font-medium">
                  {owner.name || "Not set"}
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
                  {owner.fathers_name || "Not set"}
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
                    defaultValue={editingOwner?.owner?.name}
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
                  defaultValue={editingOwner?.owner?.fathers_name}
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
