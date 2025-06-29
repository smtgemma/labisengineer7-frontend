import React, { useState } from "react";
import { Plus, Edit3 } from "lucide-react";

interface Owner {
  id: string;
  firstName: string;
  surname: string;
  fatherName: string;
  vatNo: string;
}

interface OwnerSelectionProps {
  selectedOwners: Owner[];
  onOwnersChange: (owners: Owner[]) => void;
}

const OwnerSelection: React.FC<OwnerSelectionProps> = ({
  selectedOwners,
  onOwnersChange,
}) => {
  const [projectDescription, setProjectDescription] = useState(
    "Renovation of residence"
  );
  const [editingOwner, setEditingOwner] = useState<Owner | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddingOwner, setIsAddingOwner] = useState(false);

  const openAddOwnerModal = () => {
    const newOwner: Owner = {
      id: Date.now().toString(),
      firstName: "",
      surname: "",
      fatherName: "",
      vatNo: "",
    };
    setEditingOwner(newOwner);
    setIsAddingOwner(true);
    setIsModalOpen(true);
  };

  const openEditModal = (owner: Owner) => {
    setEditingOwner(owner);
    setIsAddingOwner(false);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingOwner(null);
    setIsAddingOwner(false);
  };

  const saveEdit = () => {
    if (editingOwner) {
      if (isAddingOwner) {
        onOwnersChange([...selectedOwners, editingOwner]);
      } else {
        const updatedOwners = selectedOwners.map((owner) =>
          owner.id === editingOwner.id ? editingOwner : owner
        );
        onOwnersChange(updatedOwners);
      }
    }
    closeModal();
  };

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
        {selectedOwners.map((owner, index) => (
          <div key={owner.id} className="bg-gray-50 p-6 rounded-lg relative">
            <button
              onClick={() => openEditModal(owner)}
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
                  {owner.firstName || "Not set"}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <label className="text-gray-700 font-medium">Surname:</label>
                <span className="text-gray-900 font-medium">
                  {owner.surname || "Not set"}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <label className="text-gray-700 font-medium">
                  Father's Name:
                </label>
                <span className="text-gray-900 font-medium">
                  {owner.fatherName || "Not set"}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <label className="text-gray-700 font-medium">VAT No:</label>
                <span className="text-gray-900 font-medium">
                  {owner.vatNo || "Not set"}
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
      {isModalOpen && editingOwner && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 w-full max-w-md mx-4">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Owner{" "}
                {isAddingOwner
                  ? selectedOwners.length + 1
                  : selectedOwners.findIndex((o) => o.id === editingOwner.id) +
                    1}
              </h3>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600"
              >
                <Edit3 className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    First Name:
                  </label>
                  <input
                    type="text"
                    value={editingOwner.firstName}
                    onChange={(e) =>
                      setEditingOwner({
                        ...editingOwner,
                        firstName: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Giannis"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Surname:
                  </label>
                  <input
                    type="text"
                    value={editingOwner.surname}
                    onChange={(e) =>
                      setEditingOwner({
                        ...editingOwner,
                        surname: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Papadopoulos"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Father's Name:
                </label>
                <input
                  type="text"
                  value={editingOwner.fatherName}
                  onChange={(e) =>
                    setEditingOwner({
                      ...editingOwner,
                      fatherName: e.target.value,
                    })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Nikos"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  VAT No:
                </label>
                <input
                  type="text"
                  value={editingOwner.vatNo}
                  onChange={(e) =>
                    setEditingOwner({ ...editingOwner, vatNo: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="VAT-12213484"
                />
              </div>
            </div>

            <div className="flex justify-end mt-8">
              <button
                onClick={saveEdit}
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200 font-medium"
              >
                Save Edit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OwnerSelection;
