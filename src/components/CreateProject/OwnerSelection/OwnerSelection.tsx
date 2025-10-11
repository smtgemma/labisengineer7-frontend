import PrimaryButton from "@/components/shared/primaryButton/PrimaryButton";
import {
  setAiExtractCatchWonerData,
  setMultipleHorizontalDescription
} from "@/redux/features/AI-intrigratoin/aiFileDataSlice";
import { Plus } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { FiEdit2 } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  EditingOwnerType,
  Owner,
  OwnerFormInputs
} from "./types";

const OwnerSelection = ({
  currentStep,
  nextStep,
}: {
  currentStep: number;
  nextStep: () => void;
}) => {
  const [editingOwner, setEditingOwner] = useState<EditingOwnerType | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedOwners, setSelectedOwners] = useState<Owner[]>([]);
  const [selectedProperty, setSelectedProperty] = useState<
    { id: number; description: string }[]
  >([]);
  const [ydomModalOpen, setYdomModalOpen] = useState(false);
  const [validationError, setValidationError] = useState<{
    description: string;
    owner: string;
  }>({
    description: "",
    owner: "",
  });

  const dispatch = useDispatch();
  const aidata = useSelector((state: any) => state.aiData.aiDataState);
  const [isOwner, setIsOwner] = useState<Owner[]>(aidata.owners || []);
  const [ydom, setYdom] = useState<string>(aidata?.ydom || "");
  const [temp, setTemp] = useState<string>("");

  const [descriptionModal, setDescriptionModal] = useState<number | null>(null);
  const [horizontalDescription, setHorizontalDescription] = useState<
    { id: number; description: string }[]
  >([]);
  const horizontal_property_name = aidata?.horizontal_property_name || "";
  const horizontal_property_name_two =
    aidata?.horizontal_property_name_two || "";

  console.log(
    "Horizontal",
    horizontal_property_name,
    horizontal_property_name_two
  );
  // Generate descriptions from project_descriptions
  //here previously was description but now it will be horizontal property but the naming is same
  const description1 = horizontal_property_name;
  const description2 = horizontal_property_name_two;

  useEffect(() => {
    setHorizontalDescription([
      {
        id: 1,
        description: description1,
      },
      {
        id: 2,
        description: description2,
      },
    ]);
  }, [aidata]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<OwnerFormInputs>();

  // Add new owner
  const onSubmit = (data: OwnerFormInputs) => {
    const newOwner: Owner = {
      first_name: data.firstName || "",
      last_name: data.surname || "",
      father_first__last_name: data.fatherName || "",
      mother_first__last_name: "",
      date_of_birth: "",
      place_of_birth: "",
      owner_address: "",
      address_number: "",
      city: "",
      postal_code: "",
      id_number: "",
      tax_identification_number: data.vatNo || "",
      email: "",
      mobile: "",

    };

    setIsOwner((prev) => [...prev, newOwner]);
    reset();
    setIsModalOpen(false);
  };

  // Edit existing owner
  const onEditSubmit = (data: OwnerFormInputs) => {
    if (editingOwner !== null) {
      const updatedOwner: Owner = {
        ...editingOwner.owner,
        first_name: data.firstName || "",
        last_name: data.surname || "",
        father_first__last_name: data.fatherName || "",
        tax_identification_number: data.vatNo || "",
      };

      const updatedOwners = [...isOwner];
      updatedOwners[editingOwner.index] = updatedOwner;
      setIsOwner(updatedOwners);

      reset();
      setEditingOwner(null);
      setIsEditModalOpen(false);
    }
  };

  // Handle property selection — enforce single selection only
  const togglePropertySelection = (index: number, value: string) => {
    const alreadySelected = selectedProperty.find((item) => item.id === index);

    if (alreadySelected) {
      // Deselect if already selected
      setSelectedProperty((prev) => prev.filter((item) => item.id !== index));
    } else {
      // Select this one and deselect all others
      setSelectedProperty([{ id: index, description: value }]);
    }

    // Clear validation error when a selection is made
    if (validationError.description) {
      setValidationError((prev) => ({ ...prev, description: "" }));
    }
  };

  // Handle owner selection
  const toggleOwnerSelection = (index: number) => {
    const owner = isOwner[index];
    const alreadySelected = selectedOwners.some(
      (o) => o.first_name === owner.first_name
    );

    if (alreadySelected) {
      setSelectedOwners((prev) =>
        prev.filter((o) => o.first_name !== owner.first_name)
      );
    } else {
      setSelectedOwners((prev) => [...prev, { ...owner, selected: true }]);
    }

    // Clear validation error when a selection is made
    if (validationError.owner) {
      setValidationError((prev) => ({ ...prev, owner: "" }));
    }
  };

  // Delete owner
  const handleDeleteOwner = (index: number) => {
    setIsOwner((prev) => prev.filter((_, i) => i !== index));
    // Also remove from selected if it was selected
    const deletedOwner = isOwner[index];
    setSelectedOwners((prev) =>
      prev.filter((o) => o.first_name !== deletedOwner.first_name)
    );

    // Clear validation error if owner was selected
    if (validationError.owner && selectedOwners.length === 0) {
      setValidationError((prev) => ({
        ...prev,
        owner: "Please select at least one owner.",
      }));
    }
  };

  // Open edit modal for owner
  const openEditModalOwner = (
    e: React.MouseEvent,
    owner: Owner,
    index: number
  ) => {
    e.stopPropagation(); // Prevent triggering selection
    setEditingOwner({ owner, index });
    // Pre-populate form with current values
    reset({
      firstName: owner.first_name,
      surname: owner.last_name,
      fatherName: owner.father_first__last_name as string,
      vatNo: owner.tax_identification_number,
    });
    setIsEditModalOpen(true);
  };

  // Handle YDOM save
  const handleYdomSave = () => {
    setYdomModalOpen(false);
  };
  const handleHorizontalDesSave = (id: number) => {
    setHorizontalDescription((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, description: temp } : item
      )
    );

    // If that property is already selected, update it in selectedProperty too
    setSelectedProperty((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, description: temp } : item
      )
    );

    setDescriptionModal(null); // close modal
    setTemp(""); // clear temp
  };

  // Update Redux store when selections change
  useEffect(() => {
    dispatch(
      setMultipleHorizontalDescription({
        horizontal: selectedProperty,
        ydom: ydom,
      })
    );
  }, [selectedProperty, ydom]);

  useEffect(() => {
    dispatch(setAiExtractCatchWonerData(selectedOwners));
  }, [selectedOwners]);

  // Validate before proceeding
  const isValid = useMemo(() => {
    const descriptionValid = selectedProperty.length === 1;
    const ownerValid = selectedOwners.length >= 1;
    return descriptionValid && ownerValid;
  }, [selectedProperty, selectedOwners]);

  // Add this useEffect right after your other useEffects
  useEffect(() => {
    const descriptionValid = selectedProperty.length === 1;
    const ownerValid = selectedOwners.length >= 1;

    setValidationError({
      description: !descriptionValid
        ? "Please select exactly one property Horizontal description"
        : "",
      owner: !ownerValid ? "Please select at least one owner." : "",
    });
  }, [selectedProperty, selectedOwners]); // Only re-run when these change

  console.log(selectedProperty);
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
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200 flex items-center space-x-2 font-medium"
        >
          <Plus className="w-4 h-4" />
          <span>Add Owner</span>
        </button>
      </div>

      {/* Property Descriptions */}
      {horizontalDescription.length > 0 && (
        <div>
          <p className="mb-4 font-medium">
            Please select a property Horizontal description:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {horizontalDescription.map((property) => (
              <div className="relative">
                <div
                  onClick={() =>
                    togglePropertySelection(property.id, property.description)
                  }
                  key={property.id}
                  className={`p-6 rounded-lg relative cursor-pointer  transition-all duration-200 border-2 
                  ${selectedProperty.some((item) => item.id === property.id)
                      ? "border-blue-700 bg-blue-50 shadow-md"
                      : "border-blue-400 bg-white hover:border-blue-300"
                    }`}
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Horizontal Description {property.id}
                  </h3>
                  <p className="text-gray-700">{property.description}</p>
                </div>
                <div
                  onClick={() => {
                    setDescriptionModal(property.id)
                    setTemp(property.description)
                  }}
                  className="absolute top-3 right-3 text-gray-500 hover:text-blue-500 cursor-pointer"
                >
                  <FiEdit2 />
                </div>

                {descriptionModal === property?.id && (
                  <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 min-h-screen">
                    <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
                      <h2 className="text-lg font-semibold mb-4">
                        Edit YDOM {property.description}
                      </h2>
                      <textarea
                        value={temp}
                        onChange={(e) => setTemp(e.target.value)}
                        className="w-full border rounded-lg p-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                        rows={4}
                        placeholder="Enter YDOM description..."
                      />
                      <div className="flex justify-end gap-2 mt-4">
                        <button
                          onClick={() => setDescriptionModal(null)}
                          className="px-4 py-2 rounded-lg border hover:bg-gray-100"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={() => handleHorizontalDesSave(property.id)}
                          className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Validation Error for Property */}
          {validationError.description && (
            <p className="text-red-500 text-sm mt-2">
              {validationError.description}
            </p>
          )}
        </div>
      )}

      {/* YDOM Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border-2  border-primary rounded-lg p-4 bg-white shadow-sm relative">
          <div className="flex justify-end items-start mb-4">
            <button
              onClick={() => setYdomModalOpen(true)}
              className="text-gray-500 hover:text-blue-500 cursor-pointer"
            >
              <FiEdit2 />
            </button>
          </div>

          <div className="flex justify-between items-start mb-2">
            <h3 className="font-semibold text-lg">YDOM:</h3>
            <p className="text-sm text-gray-700 whitespace-pre-line">
              {ydom || "N/A"}
            </p>
          </div>
        </div>
      </div>

      {/* YDOM Modal */}
      {ydomModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white border  border-primary rounded-lg p-6 w-full max-w-md shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Edit YDOM</h2>
            <textarea
              value={ydom}
              onChange={(e) => setYdom(e.target.value)}
              className="w-full border-2 rounded-lg p-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows={4}
              placeholder="Enter YDOM description..."
            />
            <div className="flex justify-end gap-2 mt-4">
              <button
                onClick={() => setYdomModalOpen(false)}
                className="px-4 py-2 rounded-lg border hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleYdomSave}
                className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Owners Section */}
      <div>
        <p className="mb-4 font-medium">Please choose your owner(s):</p>

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
            {isOwner.map((owner: Owner, index: number) => (
              <div
                onClick={() => toggleOwnerSelection(index)}
                key={index}
                className={`p-6 rounded-lg relative cursor-pointer transition-all duration-200 border-2 
                  ${selectedOwners.some(
                  (o) => o.first_name === owner.first_name
                )
                    ? "border-blue-600 bg-blue-50 shadow-md"
                    : "border-blue-400 bg-white hover:border-blue-300"
                  }`}
              >
                <div className="flex gap-2 absolute top-4 right-4 text-gray-400">
                  <button
                    onClick={(e) => openEditModalOwner(e, owner, index)}
                    className="hover:text-gray-600 cursor-pointer"
                  >
                    <FiEdit2 className="w-4 h-4" />
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteOwner(index);
                    }}
                    className="text-red-500 cursor-pointer hover:text-red-700"
                  >
                    <MdDeleteOutline className="w-4 h-4" />
                  </button>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-6">
                  Owner {index + 1}
                </h3>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="text-gray-700 font-medium">
                      First Name:
                    </label>
                    <span className="text-gray-900 font-medium">
                      {owner.first_name || "Not set"}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <label className="text-gray-700 font-medium">
                      Surname:
                    </label>
                    <span className="text-gray-900 font-medium">
                      {owner.last_name || "Not set"}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <label className="text-gray-700 font-medium">
                      Father's Name:
                    </label>
                    <span className="text-gray-900 font-medium">
                      {owner.father_first__last_name || "Not set"}
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
        )}

        {/* Validation Error for Owner */}
        {validationError.owner && (
          <p className="text-red-500 text-sm mt-2">{validationError.owner}</p>
        )}
      </div>

      {/* Add Owner Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white border-2  border-primary rounded-lg p-8 w-full max-w-md mx-4">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-gray-900">Add Owner</h3>
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
                    {...register("firstName", {
                      required: "First name is required",
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Giannis"
                  />
                  {errors.firstName && (
                    <span className="text-red-500 text-sm">
                      {errors.firstName.message}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Surname:
                  </label>
                  <input
                    type="text"
                    {...register("surname", {
                      required: "Surname is required",
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Papadopoulos"
                  />
                  {errors.surname && (
                    <span className="text-red-500 text-sm">
                      {errors.surname.message}
                    </span>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Father's Name:
                </label>
                <input
                  type="text"
                  {...register("fatherName", {
                    required: "Father's name is required",
                  })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Nikos"
                />
                {errors.fatherName && (
                  <span className="text-red-500 text-sm">
                    {errors.fatherName.message}
                  </span>
                )}
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  VAT No:
                </label>
                <input
                  type="text"
                  {...register("vatNo", { required: "VAT number is required" })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="VAT-12213484"
                />
                {errors.vatNo && (
                  <span className="text-red-500 text-sm">
                    {errors.vatNo.message}
                  </span>
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

      {/* Edit Owner Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white border-2  border-primary rounded-lg p-8 w-full max-w-md mx-4">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Edit Owner
              </h3>
              <button
                onClick={() => setIsEditModalOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <IoClose className="w-5 h-5" />
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
                    {...register("firstName", {
                      required: "First name is required",
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Giannis"
                  />
                  {errors.firstName && (
                    <span className="text-red-500 text-sm">
                      {errors.firstName.message}
                    </span>
                  )}
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Surname:
                  </label>
                  <input
                    type="text"
                    {...register("surname", {
                      required: "Surname is required",
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Papadopoulos"
                  />
                  {errors.surname && (
                    <span className="text-red-500 text-sm">
                      {errors.surname.message}
                    </span>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Father's Name:
                </label>
                <input
                  type="text"
                  {...register("fatherName", {
                    required: "Father's name is required",
                  })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Nikos"
                />
                {errors.fatherName && (
                  <span className="text-red-500 text-sm">
                    {errors.fatherName.message}
                  </span>
                )}
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  VAT No:
                </label>
                <input
                  type="text"
                  {...register("vatNo", { required: "VAT number is required" })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="VAT-12213484"
                />
                {errors.vatNo && (
                  <span className="text-red-500 text-sm">
                    {errors.vatNo.message}
                  </span>
                )}
              </div>

              <div className="flex justify-end mt-8">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200 font-medium"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {/* Next Button */}
      {currentStep < 6 && (
        <div className="flex justify-end w-fit ml-auto">
          <PrimaryButton
            onClick={() => {
              if (isValid) {
                nextStep();
              }
            }}
            label="Save and Continue"
            disabled={!isValid}
          />
        </div>
      )}
    </div>
  );
};

export default OwnerSelection;
