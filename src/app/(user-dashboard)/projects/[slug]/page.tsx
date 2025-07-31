import React from "react";
import { Cloud, Download, FileText } from "lucide-react";

interface ProjectDetailsProps {
  className?: string;
}

const ProjectDetails = () => {
  return (
    <div className={`bg-[#F1F5F9] min-h-screen p-8 `}>
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Personal Details */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-black mb-6">
                Personal Details-
              </h2>
              <div className="space-y-4">
                <div className="space-x-3">
                  <span className="text-base font-semibold text-black">
                    Project Title:
                  </span>
                  <span className="text-base text-gray-700">
                    Residential Renovation Permit
                  </span>
                </div>
                <div className="space-x-3">
                  <span className="text-base font-semibold text-black">
                    Type:
                  </span>
                  <span className="text-base text-gray-700">
                    e-Aubas - Building Permit
                  </span>
                </div>
                <div className="space-x-3">
                  <span className="text-base font-semibold text-black">
                    Created On:
                  </span>
                  <span className="text-base text-gray-700">2025-05-12</span>
                </div>
                <div className="space-x-3">
                  <span className="text-base font-semibold text-black">
                    Status:
                  </span>
                  <span className="text-base text-orange-500 font-medium">
                    In Progress
                  </span>
                </div>
              </div>
            </div>

            {/* Uploaded Files */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-black mb-6">
                Uploaded File-
              </h2>
              <div className="flex flex-col md:flex-row  gap-6">
                {/* Document 1 - DOC */}
                <div className="flex-1">
                  <div className="bg-gray-100 rounded-lg p-6 h-40 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-20 bg-white border-2 border-gray-300 rounded mx-auto mb-2 flex items-center justify-center shadow-sm">
                        <div className="text-sm text-gray-600 font-medium">
                          DOC
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Document 2 - PDF */}
                <div className="flex-1">
                  <div className="bg-gray-100 rounded-lg p-6 h-40 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-20 bg-[#017AFF] rounded mx-auto mb-2 flex items-center justify-center shadow-sm">
                        <div className="text-sm text-white font-medium">
                          PDF
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Document 3 - XLS */}
                <div className="flex-1">
                  <div className="bg-gray-100 rounded-lg p-6 h-40 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-20 bg-green-500 rounded mx-auto mb-2 flex items-center justify-center shadow-sm">
                        <div className="text-sm text-white font-medium">
                          XLS
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Extracted Information */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-black mb-6">
                Extracted Information-
              </h2>
              <div className="space-y-4">
                <div className="space-x-3">
                  <span className="text-base font-semibold text-black">
                    Owner Name:
                  </span>
                  <span className="text-base text-gray-700">Softur Rohman</span>
                </div>
                <div className="space-x-3">
                  <span className="text-base font-semibold text-black">
                    KAEK:
                  </span>
                  <span className="text-base text-gray-700">
                    050-023-000-678
                  </span>
                </div>
                <div className="space-x-3">
                  <span className="text-base font-semibold text-black">
                    Property Usage:
                  </span>
                  <span className="text-base text-gray-700">Residential</span>
                </div>
                <div className="space-x-3">
                  <span className="text-base font-semibold text-black">
                    Permit Number:
                  </span>
                  <span className="text-base text-gray-700">A-5406</span>
                </div>
                <div className="space-x-3">
                  <span className="text-base font-semibold text-black">
                    Permit Year:
                  </span>
                  <span className="text-base text-gray-700">2020</span>
                </div>
                <div className="space-x-3">
                  <span className="text-base font-semibold text-black">
                    Municipality:
                  </span>
                  <span className="text-base text-gray-700">Thessaloniki</span>
                </div>
                <div className="space-x-3">
                  <span className="text-base font-semibold text-black">
                    Region:
                  </span>
                  <span className="text-base text-gray-700">
                    Central Macedonia
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Generated Documents */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-black">
                  Generated Documents-
                </h2>
              </div>
              <div className="space-y-3">
                <div className="text-base text-gray-700">
                  Engineer Declaration (YA)
                </div>
                <div className="text-base text-gray-700">
                  Assignment of Responsibility
                </div>
                <div className="text-base text-gray-700">
                  Technical Description
                </div>
                <div className="flex justify-end">
                  <button className="bg-[#017AFF] hover:bg-blue-600 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-colors">
                    Download All Docs
                  </button>
                </div>
              </div>
            </div>

            {/* History Timeline */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-black mb-6">
                History Timeline-
              </h2>
              <div className="space-y-4">
                <div className="space-x-3">
                  <span className="text-base font-semibold text-black">
                    Project created:
                  </span>
                  <span className="text-base text-gray-700">2025-05-12</span>
                </div>
                <div className="space-x-3">
                  <span className="text-base font-semibold text-black">
                    Files uploaded:
                  </span>
                  <span className="text-base text-gray-700">2025-05-13</span>
                </div>
                <div className="space-x-3">
                  <span className="text-base font-semibold text-black">
                    Data extracted:
                  </span>
                  <span className="text-base text-gray-700">2025-05-14</span>
                </div>
                <div className="space-x-3">
                  <span className="text-base font-semibold text-black">
                    Documents generated:
                  </span>
                  <span className="text-base text-gray-700">2025-05-15</span>
                </div>
                <div className="space-x-3">
                  <span className="text-base font-semibold text-black">
                    CSV exported:
                  </span>
                  <span className="text-base text-gray-700">2025-05-16</span>
                </div>
              </div>
            </div>

            {/* Automation and Data Export */}
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-black mb-6">
                Automation and Data Export-
              </h2>
              <div className="space-y-4">
                <button className="flex items-center justify-center gap-3 px-6 py-4 rounded-lg text-base font-medium transition-colors shadow-lg">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.9995 15.1621C12.4545 15.1621 9.58081 18.0359 9.58081 21.5808C9.58081 25.1257 12.4545 27.9995 15.9995 27.9995C19.5444 27.9995 22.4182 25.1257 22.4182 21.5808C22.4182 18.0359 19.5444 15.1621 15.9995 15.1621ZM15.2856 24.446L19.028 19.8773L17.7326 18.8162L15.071 22.0657L13.751 20.9435L12.6664 22.2192L15.2856 24.446Z"
                      fill="#307FFF"
                    />
                    <path
                      d="M9.13829 9.70932C6.20651 10.3031 4 12.8935 4 16.0001C4 18.6562 5.61339 20.9356 7.91363 21.9116C7.90924 21.8022 7.90702 21.6921 7.90702 21.5816C7.90702 17.1119 11.5304 13.4885 16.0001 13.4885C20.4699 13.4885 24.0933 17.1119 24.0933 21.5816C24.0933 21.7526 24.0879 21.9225 24.0775 22.0908C26.3619 21.2908 28.0003 19.1159 28.0003 16.5583C28.0003 13.6047 25.8154 11.1614 22.9735 10.7566C22.8573 7.00533 19.7797 4 16.0001 4C12.5797 4 9.73474 6.46093 9.13829 9.70932Z"
                      fill="#307FFF"
                    />
                  </svg>
                  Send to Cloud
                </button>

                <button className="flex items-center justify-center gap-3 px-6 py-4 rounded-lg text-base font-medium transition-colors shadow-lg">
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.5688 5.8125L11.825 3.76875C11.175 3.2875 10.3937 3.03125 9.5875 3.03125H1.875C0.8375 3.03125 0 3.86875 0 4.90625V27.0938C0 28.1313 0.8375 28.9688 1.875 28.9688H28.25C29.2875 28.9688 30.125 28.1313 30.125 27.0938V8.43125C30.125 7.39375 29.2875 6.55625 28.25 6.55625H16.8062C16 6.55 15.2188 6.29375 14.5688 5.8125Z"
                      fill="#F6C012"
                    />
                    <path
                      d="M5.375 8.35547H26C26.5187 8.35547 26.9375 8.77422 26.9375 9.29297V21.793C26.9375 22.3117 26.5187 22.7305 26 22.7305H5.375C4.85625 22.7305 4.4375 22.3117 4.4375 21.793V9.29297C4.4375 8.77422 4.85625 8.35547 5.375 8.35547Z"
                      fill="#FFEAC5"
                    />
                    <path
                      d="M4.125 9.60547H24.75C25.2687 9.60547 25.6875 10.0242 25.6875 10.543V23.043C25.6875 23.5617 25.2687 23.9805 24.75 23.9805H4.125C3.60625 23.9805 3.1875 23.5617 3.1875 23.043V10.543C3.1875 10.0242 3.60625 9.60547 4.125 9.60547Z"
                      fill="#FFF7E6"
                    />
                    <path
                      d="M1.875 11.5312H28.25C29.2875 11.5312 30.125 12.3687 30.125 13.4062V27.0938C30.125 28.1313 29.2875 28.9688 28.25 28.9688H1.875C0.8375 28.9688 0 28.1313 0 27.0938V13.4062C0 12.3687 0.8375 11.5312 1.875 11.5312Z"
                      fill="#FBD87C"
                    />
                    <path
                      d="M0 19.5938H1.25V22.0938H0V19.5938Z"
                      fill="#FF9E1F"
                    />
                    <path
                      d="M1.25 20.8438H2.5V23.3438H1.25V20.8438Z"
                      fill="#EA8000"
                    />
                    <path
                      d="M2.5 19.5938H3.75V22.0938H2.5V19.5938Z"
                      fill="#FF9E1F"
                    />
                    <path
                      d="M3.75 20.8438H5V23.3438H3.75V20.8438Z"
                      fill="#EA8000"
                    />
                    <path
                      d="M5 19.5938H6.25V22.0938H5V19.5938Z"
                      fill="#FF9E1F"
                    />
                    <path
                      d="M6.25 20.8438H7.5V23.3438H6.25V20.8438Z"
                      fill="#EA8000"
                    />
                    <path
                      d="M7.5 19.5938H8.75V22.0938H7.5V19.5938Z"
                      fill="#FF9E1F"
                    />
                    <path
                      d="M8.75 20.8438H10V23.3438H8.75V20.8438Z"
                      fill="#EA8000"
                    />
                    <path
                      d="M10 19.5938H11.25V22.0938H10V19.5938Z"
                      fill="#FF9E1F"
                    />
                    <path
                      d="M11.25 20.8438H12.5V23.3438H11.25V20.8438Z"
                      fill="#EA8000"
                    />
                    <path
                      d="M12.5 19.5938H13.75V22.0938H12.5V19.5938Z"
                      fill="#FF9E1F"
                    />
                    <path
                      d="M13.75 20.8438H15V23.3438H13.75V20.8438Z"
                      fill="#EA8000"
                    />
                    <path
                      d="M15 19.5938H16.25V22.0938H15V19.5938Z"
                      fill="#FF9E1F"
                    />
                    <path
                      d="M16.25 20.8438H17.5V23.3438H16.25V20.8438Z"
                      fill="#EA8000"
                    />
                    <path
                      d="M17.5 19.5938H18.75V22.0938H17.5V19.5938Z"
                      fill="#FF9E1F"
                    />
                    <path
                      d="M18.75 20.8438H20V23.3438H18.75V20.8438Z"
                      fill="#EA8000"
                    />
                    <path
                      d="M20 19.5938H21.25V22.0938H20V19.5938Z"
                      fill="#FF9E1F"
                    />
                    <path
                      d="M21.25 20.8438H22.5V23.3438H21.25V20.8438Z"
                      fill="#EA8000"
                    />
                    <path
                      d="M22.5 19.5938H23.75V22.0938H22.5V19.5938Z"
                      fill="#FF9E1F"
                    />
                    <path
                      d="M26.25 20.8438H27.5V23.3438H26.25V20.8438Z"
                      fill="white"
                    />
                    <path
                      d="M27.8062 19.0063L24.4188 20.0187C24.0188 20.1375 23.75 20.5 23.75 20.9188V22.0187C23.75 22.4312 24.025 22.8 24.4188 22.9188L27.8062 23.9312C27.8937 23.9562 27.9813 23.9688 28.075 23.9688H31.0625C31.5813 23.9688 32 23.55 32 23.0312V19.9062C32 19.3875 31.5813 18.9688 31.0625 18.9688H28.075C27.9813 18.9688 27.8937 18.9813 27.8062 19.0063ZM30.125 23.0312H29.8125C29.2937 23.0312 28.875 22.6125 28.875 22.0938V20.8438C28.875 20.325 29.2937 19.9062 29.8125 19.9062H30.125C30.6438 19.9062 31.0625 20.325 31.0625 20.8438V22.0938C31.0625 22.6125 30.6438 23.0312 30.125 23.0312Z"
                      fill="#EA8000"
                    />
                  </svg>
                  Download ZIP file
                </button>

                <button className="flex items-center justify-center gap-3 px-6 py-4 rounded-lg text-base font-medium transition-colors shadow-lg">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.4697 13.4697C18.7626 13.1768 19.2374 13.1768 19.5303 13.4697L21.5303 15.4697C21.8232 15.7626 21.8232 16.2374 21.5303 16.5303L15.5303 22.5303C15.3897 22.671 15.1989 22.75 15 22.75H13C12.5858 22.75 12.25 22.4142 12.25 22V20C12.25 19.8011 12.329 19.6103 12.4697 19.4697L18.4697 13.4697Z"
                      fill="#017AFF"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.27427 19.823C2.27678 21.4403 3.58211 22.75 5.19144 22.75H11.1454C11.0516 22.5184 11 22.2652 11 22V20C11 19.4696 11.2107 18.9609 11.5858 18.5858L17.5858 12.5858C18.1709 12.0007 19.0283 11.8539 19.75 12.1454V9.05498C19.75 8.79546 19.6473 8.5466 19.4645 8.36329L12.6564 1.53551C12.4741 1.35268 12.2271 1.25 11.9695 1.25H5.16717C3.55429 1.25 2.24749 2.56532 2.25 4.18619L2.27427 19.823ZM11.5673 3.20594L17.8043 9.46094H13.0673C12.2389 9.46094 11.5673 8.78936 11.5673 7.96094V3.20594Z"
                      fill="#017AFF"
                    />
                  </svg>
                  Auto-Fill Submission Form
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
