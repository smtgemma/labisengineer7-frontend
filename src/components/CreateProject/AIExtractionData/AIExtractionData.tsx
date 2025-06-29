import React from "react";
import {
  FileText,
  User,
  Building,
  Calendar,
  DollarSign,
  MapPin,
  Phone,
  Mail,
  Hash,
} from "lucide-react";

interface ExtractionDataProps {
  onContinue: () => void;
}

const AIExtractionData: React.FC<ExtractionDataProps> = ({ onContinue }) => {
  const extractedData = {
    projectInfo: {
      title: "Renovation of residence",
      description:
        "Complete home renovation project including kitchen, bathroom, and living areas",
      location: "123 Main Street, Athens, Greece",
      startDate: "2024-01-15",
      endDate: "2024-06-30",
    },
    firstOwner: {
      firstName: "Giannis",
      lastName: "Papadopoulos",
      fatherName: "Nikos",
      vatNumber: "VAT-12213484",
      idNumber: "AB123456",
      address: "456 Oak Avenue, Athens, Greece",
      phone: "+30 210 123 4567",
      email: "giannis.papadopoulos@email.com",
      profession: "Engineer",
      birthDate: "1985-03-15",
    },
    secondOwner: {
      firstName: "Maria",
      lastName: "Papadopoulou",
      fatherName: "Dimitris",
      vatNumber: "VAT-12213485",
      idNumber: "AB123457",
      address: "456 Oak Avenue, Athens, Greece",
      phone: "+30 210 123 4568",
      email: "maria.papadopoulou@email.com",
      profession: "Architect",
      birthDate: "1987-07-22",
    },
    thirdOwner: {
      firstName: "Kostas",
      lastName: "Dimitriou",
      fatherName: "Yannis",
      vatNumber: "VAT-12213486",
      idNumber: "AB123458",
      address: "789 Pine Street, Athens, Greece",
      phone: "+30 210 123 4569",
      email: "kostas.dimitriou@email.com",
      profession: "Contractor",
      birthDate: "1980-11-08",
    },
    fourthOwner: {
      firstName: "Elena",
      lastName: "Georgiou",
      fatherName: "Petros",
      vatNumber: "VAT-12213487",
      idNumber: "AB123459",
      address: "321 Elm Street, Athens, Greece",
      phone: "+30 210 123 4570",
      email: "elena.georgiou@email.com",
      profession: "Interior Designer",
      birthDate: "1990-05-12",
    },
    licenseInfo: {
      licenseNumber: "LIC-2024-001",
      issuedBy: "Municipality of Athens",
      issueDate: "2024-01-10",
      expiryDate: "2025-01-10",
      category: "Residential Renovation",
      status: "Active",
    },
    technicalSpecs: {
      totalArea: "150 sq.m",
      floors: "2",
      rooms: "4 bedrooms, 2 bathrooms",
      buildingType: "Residential",
      constructionYear: "1995",
      energyClass: "B+",
    },
    otherInfo: {
      contractor: "Athens Construction Ltd.",
      architect: "Maria Papadopoulou",
      engineer: "Giannis Papadopoulos",
      estimatedCost: "€85,000",
      permits: ["Building Permit", "Electrical Permit", "Plumbing Permit"],
      insurance: "Covered by HomeGuard Insurance",
    },
  };

  const InfoSection: React.FC<{
    title: string;
    icon: React.ReactNode;
    children: React.ReactNode;
  }> = ({ title, icon, children }) => (
    <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
      <div className="flex items-center space-x-2 mb-4">
        {icon}
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>
      {children}
    </div>
  );

  const InfoRow: React.FC<{
    label: string;
    value: string;
    isBlue?: boolean;
  }> = ({ label, value, isBlue = false }) => (
    <div className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
      <span className="text-gray-600 font-medium">{label}:</span>
      <span
        className={`font-medium ${isBlue ? "text-blue-600" : "text-gray-900"}`}
      >
        {value}
      </span>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Project & Ownership Information */}
      <InfoSection
        title="Project & Ownership Information"
        icon={<Building className="w-5 h-5 text-blue-500" />}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <InfoRow
              label="Project Title"
              value={extractedData.projectInfo.title}
            />
            <InfoRow
              label="Description"
              value={extractedData.projectInfo.description}
            />
            <InfoRow
              label="Location"
              value={extractedData.projectInfo.location}
            />
          </div>
          <div className="space-y-2">
            <InfoRow
              label="Start Date"
              value={extractedData.projectInfo.startDate}
            />
            <InfoRow
              label="End Date"
              value={extractedData.projectInfo.endDate}
            />
            <InfoRow label="Status" value="Active" isBlue />
          </div>
        </div>
      </InfoSection>

      {/* Information of 1st Owner */}
      <InfoSection
        title="Information of 1st Owner"
        icon={<User className="w-5 h-5 text-green-500" />}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <InfoRow
              label="First Name"
              value={extractedData.firstOwner.firstName}
            />
            <InfoRow
              label="Last Name"
              value={extractedData.firstOwner.lastName}
            />
            <InfoRow
              label="Father's Name"
              value={extractedData.firstOwner.fatherName}
            />
            <InfoRow
              label="VAT Number"
              value={extractedData.firstOwner.vatNumber}
              isBlue
            />
            <InfoRow
              label="ID Number"
              value={extractedData.firstOwner.idNumber}
            />
            <InfoRow
              label="Birth Date"
              value={extractedData.firstOwner.birthDate}
            />
          </div>
          <div className="space-y-2">
            <InfoRow label="Address" value={extractedData.firstOwner.address} />
            <InfoRow
              label="Phone"
              value={extractedData.firstOwner.phone}
              isBlue
            />
            <InfoRow
              label="Email"
              value={extractedData.firstOwner.email}
              isBlue
            />
            <InfoRow
              label="Profession"
              value={extractedData.firstOwner.profession}
            />
          </div>
        </div>
      </InfoSection>

      {/* Information of 2nd Owner */}
      <InfoSection
        title="Information of 2nd Owner"
        icon={<User className="w-5 h-5 text-green-500" />}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <InfoRow
              label="First Name"
              value={extractedData.secondOwner.firstName}
            />
            <InfoRow
              label="Last Name"
              value={extractedData.secondOwner.lastName}
            />
            <InfoRow
              label="Father's Name"
              value={extractedData.secondOwner.fatherName}
            />
            <InfoRow
              label="VAT Number"
              value={extractedData.secondOwner.vatNumber}
              isBlue
            />
            <InfoRow
              label="ID Number"
              value={extractedData.secondOwner.idNumber}
            />
            <InfoRow
              label="Birth Date"
              value={extractedData.secondOwner.birthDate}
            />
          </div>
          <div className="space-y-2">
            <InfoRow
              label="Address"
              value={extractedData.secondOwner.address}
            />
            <InfoRow
              label="Phone"
              value={extractedData.secondOwner.phone}
              isBlue
            />
            <InfoRow
              label="Email"
              value={extractedData.secondOwner.email}
              isBlue
            />
            <InfoRow
              label="Profession"
              value={extractedData.secondOwner.profession}
            />
          </div>
        </div>
      </InfoSection>

      {/* Information of 3rd Owner */}
      <InfoSection
        title="Information of 3rd Owner"
        icon={<User className="w-5 h-5 text-green-500" />}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <InfoRow
              label="First Name"
              value={extractedData.thirdOwner.firstName}
            />
            <InfoRow
              label="Last Name"
              value={extractedData.thirdOwner.lastName}
            />
            <InfoRow
              label="Father's Name"
              value={extractedData.thirdOwner.fatherName}
            />
            <InfoRow
              label="VAT Number"
              value={extractedData.thirdOwner.vatNumber}
              isBlue
            />
            <InfoRow
              label="ID Number"
              value={extractedData.thirdOwner.idNumber}
            />
            <InfoRow
              label="Birth Date"
              value={extractedData.thirdOwner.birthDate}
            />
          </div>
          <div className="space-y-2">
            <InfoRow label="Address" value={extractedData.thirdOwner.address} />
            <InfoRow
              label="Phone"
              value={extractedData.thirdOwner.phone}
              isBlue
            />
            <InfoRow
              label="Email"
              value={extractedData.thirdOwner.email}
              isBlue
            />
            <InfoRow
              label="Profession"
              value={extractedData.thirdOwner.profession}
            />
          </div>
        </div>
      </InfoSection>

      {/* Information of 4th Owner */}
      <InfoSection
        title="Information of 4th Owner"
        icon={<User className="w-5 h-5 text-green-500" />}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <InfoRow
              label="First Name"
              value={extractedData.fourthOwner.firstName}
            />
            <InfoRow
              label="Last Name"
              value={extractedData.fourthOwner.lastName}
            />
            <InfoRow
              label="Father's Name"
              value={extractedData.fourthOwner.fatherName}
            />
            <InfoRow
              label="VAT Number"
              value={extractedData.fourthOwner.vatNumber}
              isBlue
            />
            <InfoRow
              label="ID Number"
              value={extractedData.fourthOwner.idNumber}
            />
            <InfoRow
              label="Birth Date"
              value={extractedData.fourthOwner.birthDate}
            />
          </div>
          <div className="space-y-2">
            <InfoRow
              label="Address"
              value={extractedData.fourthOwner.address}
            />
            <InfoRow
              label="Phone"
              value={extractedData.fourthOwner.phone}
              isBlue
            />
            <InfoRow
              label="Email"
              value={extractedData.fourthOwner.email}
              isBlue
            />
            <InfoRow
              label="Profession"
              value={extractedData.fourthOwner.profession}
            />
          </div>
        </div>
      </InfoSection>

      {/* License & Legal Data */}
      <InfoSection
        title="License & Legal Data"
        icon={<FileText className="w-5 h-5 text-purple-500" />}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <InfoRow
              label="License Number"
              value={extractedData.licenseInfo.licenseNumber}
              isBlue
            />
            <InfoRow
              label="Issued By"
              value={extractedData.licenseInfo.issuedBy}
            />
            <InfoRow
              label="Issue Date"
              value={extractedData.licenseInfo.issueDate}
            />
          </div>
          <div className="space-y-2">
            <InfoRow
              label="Expiry Date"
              value={extractedData.licenseInfo.expiryDate}
            />
            <InfoRow
              label="Category"
              value={extractedData.licenseInfo.category}
            />
            <InfoRow
              label="Status"
              value={extractedData.licenseInfo.status}
              isBlue
            />
          </div>
        </div>
      </InfoSection>

      {/* Technical Specifications */}
      <InfoSection
        title="Technical Specifications"
        icon={<Hash className="w-5 h-5 text-orange-500" />}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <InfoRow
              label="Total Area"
              value={extractedData.technicalSpecs.totalArea}
            />
            <InfoRow
              label="Number of Floors"
              value={extractedData.technicalSpecs.floors}
            />
            <InfoRow label="Rooms" value={extractedData.technicalSpecs.rooms} />
          </div>
          <div className="space-y-2">
            <InfoRow
              label="Building Type"
              value={extractedData.technicalSpecs.buildingType}
            />
            <InfoRow
              label="Construction Year"
              value={extractedData.technicalSpecs.constructionYear}
            />
            <InfoRow
              label="Energy Class"
              value={extractedData.technicalSpecs.energyClass}
              isBlue
            />
          </div>
        </div>
      </InfoSection>

      {/* Other Information */}
      <InfoSection
        title="Other Information"
        icon={<MapPin className="w-5 h-5 text-red-500" />}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <InfoRow
              label="Main Contractor"
              value={extractedData.otherInfo.contractor}
            />
            <InfoRow
              label="Project Architect"
              value={extractedData.otherInfo.architect}
            />
            <InfoRow
              label="Structural Engineer"
              value={extractedData.otherInfo.engineer}
            />
            <InfoRow
              label="Estimated Cost"
              value={extractedData.otherInfo.estimatedCost}
              isBlue
            />
          </div>
          <div className="space-y-2">
            <InfoRow
              label="Insurance Coverage"
              value={extractedData.otherInfo.insurance}
            />
            <div className="py-2">
              <span className="text-gray-600 font-medium">
                Required Permits:
              </span>
              <div className="mt-2 space-y-1">
                {extractedData.otherInfo.permits.map((permit, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-900 font-medium">{permit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </InfoSection>

      {/* Continue Button */}
      <div className="flex justify-end pt-6">
        <button
          onClick={onContinue}
          className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-200 font-medium text-lg"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default AIExtractionData;
