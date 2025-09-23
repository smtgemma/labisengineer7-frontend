"use client";
import Loading from "@/components/Others/Loading";
import tokenCatch from "@/lib/token";
import { useGetMyDocumentPointQuery } from "@/redux/features/adminOverView/adminUserSlice";
import { useDeleteServiceMutation } from "@/redux/features/createService/serviceSlice";
import moment from "moment";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CgArrowsV } from "react-icons/cg";
import { toast } from "sonner";
import Swal from "sweetalert2";
import ActionButtonOption from "./Action";

export default function SimpleTemplatesTable() {
  console.log("yes");
  const token = tokenCatch();
  const router = useRouter();
  const { data, isLoading, refetch } = useGetMyDocumentPointQuery(token);
  const [deleteService] = useDeleteServiceMutation();

  if (isLoading) {
    return <Loading />;
  }

  const allService = data?.data;

  const handleProjectEdit = (id: string) => {
    console.log(id);
    router.push(`/admin/document-template/edit-template?id=${id}`);
  };

  const handleProjectDelete = async (id: string) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#017AFF",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await deleteService({ id, token }).unwrap();
          console.log(response);
          if (response?.success) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
              confirmButtonColor: "#017AFF",
            });
            refetch();
          }
        } catch (error: any) {
          toast.error(error?.data?.message);
        }
      }
    });
  };
  return (
    <div id="testimonials" className="md:px-12 min-h-screen">
      {/* Header */}
      <div className="py-4 border-gray-200 flex justify-between">
        <h2 className="text-lg md:text-[32px] font-semibold text-gray-900">
          Templates
        </h2>

        <Link
          className="bg-neutral-950 px-4 py-3 text-white  rounded-lg"
          href={"/admin/document-template/add-templete"}
        >
          Add New Service
        </Link>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-lg shadow border border-gray-200">
        {/* Table Header */}
        <div className="min-w-[600px]">
          <div className="bg-primary px-6 rounded-t-lg">
            <div className="grid grid-cols-12 gap-4 py-3 text-white text-sm lg:text-xl">
              <div className="col-span-2 flex items-center">Template </div>

              <div className="col-span-2  flex items-center">
                Last Modified <CgArrowsV className="my-auto" />
              </div>
              <div className="col-span-3  flex items-center">
                Description <CgArrowsV className="my-auto" />
              </div>
              <div className="col-span-2  flex items-center">
                Created By <CgArrowsV className="my-auto" />
              </div>
              <div className="col-span-1  flex items-center">
                Action <CgArrowsV className="my-auto" />
              </div>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-200">
            {allService?.map((row: any) => (
              <div
                key={row.id}
                className="px-6 py-4 hover:bg-gray-50 transition-colors"
              >
                <div className="grid grid-cols-12 gap-4 items-center text-sm md:text-[16px] text-info">
                  <div className="col-span-2">{row.serviceName}</div>

                  <div className="col-span-2">
                    {moment(row.updatedAt).format("LL")}
                  </div>
                  <div className="col-span-3">{row.serviceDescription}</div>
                  <div className="col-span-2 text-center">Admin</div>
                  <div className="col-span-1 text-center">
                    {/* <ActionButton /> */}
                    <ActionButtonOption
                      onEdit={() => handleProjectEdit(row.id)}
                      onDelete={() => handleProjectDelete(row.id)}
                    />
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
