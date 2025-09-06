"use client";
import { CgArrowsV } from "react-icons/cg";
import tokenCatch from "@/lib/token";
import { useGetAllsubmissionLogsQuery } from "@/redux/features/adminOverView/adminUserSlice";
import Loading from "@/components/Others/Loading";
import moment from "moment";

const StatusBadge = ({ status }: { status: string }) => {
  const isSuccess = status.toLowerCase() === "success";
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border 
      ${
        isSuccess
          ? "border-green-200 bg-green-100 text-green-800"
          : "border-yellow-200 bg-yellow-100 text-yellow-800"
      }`}
    >
      {status}
    </span>
  );
};

export default function SimpleSubmissionLogsTable() {
  const token = tokenCatch();
  const { data: overview, isLoading } = useGetAllsubmissionLogsQuery(token);

  if (isLoading) {
    return <Loading></Loading>;
  }
  console.log();
  const logsData = overview?.data.logs;
  console.log(logsData);
  return (
    <div className="md:px-12 min-h-screen">
      {/* Header */}
      <div className="py-4 border-gray-200 flex justify-between">
        <h2 className="text-lg md:text-[32px] font-semibold text-gray-900">
          Submission Logs
        </h2>

        {/* <Link
          className="bg-neutral-950 px-4 py-3 text-white  rounded-lg"
          href={"/admin/document-template/add-templete"}
        >
          Export log as .CSV
        </Link> */}
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow border border-gray-200">
        {/* Table Header */}
        <div className="min-w-[600px]">
          <div className="bg-primary px-6 rounded-t-lg">
            <div className="grid grid-cols-12 gap-4 py-3 text-white text-md lg:text-xl ">
              <div className="col-span-3  flex items-center">
                TimeStamp <CgArrowsV className="my-auto ml-1" />
              </div>
              <div className="col-span-2  flex items-center">
                User
                <CgArrowsV className="my-auto ml-1" />
              </div>
              <div className="col-span-2  flex items-center">
                Project <CgArrowsV className="my-auto ml-1" />
              </div>
              <div className="col-span-3  flex items-center ">
                Action <CgArrowsV className="my-auto ml-1" />
              </div>
              <div className="col-span-2  flex items-center">
                Status <CgArrowsV className="my-auto ml-1" />
              </div>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-200">
            {logsData?.map((log: any) => (
              <div
                key={log.id}
                className="px-6 py-4 hover:bg-gray-50 transition-colors"
              >
                <div className="grid grid-cols-12 gap-4 items-center text-sm md:text-[16px] text-info">
                  <div className="col-span-3">
                    {" "}
                    {moment(log.timestamp).format("L")} |
                    {moment(log.timestamp).format("LT")}
                  </div>
                  <div className="col-span-2">{log.userName}</div>
                  <div className="col-span-2">{log.projectName}</div>
                  <div className="col-span-3">{log.action}</div>
                  <div className="col-span-2">
                    <StatusBadge status={log.status} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
