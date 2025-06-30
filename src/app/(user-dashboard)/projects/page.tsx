import Table, { TableData } from "@/components/Projects/Table/Table";
import Header from "@/components/shared/Header/Header";

export default function Projects() {
  const tableData: TableData[] = [
    {
      createdOn: "2025-05-22",
      projectName: "My Apartment ID",
      type: "HTK - Electronic ID",
      document: "View Document",
      status: "In Progress",
    },
    {
      createdOn: "2025-04-10",
      projectName: "Permit 102",
      type: "e-Aubas - Building Permit",
      document: "View Document",
      status: "Completed",
    },
    {
      createdOn: "2025-03-18",
      projectName: "House Cert",
      type: "Engineer Certificate",
      document: "View Document",
      status: "Submitted",
    },
  ];

  return (
    <section className="bg-[#F1F5F9] min-h-screen py-8 px-4 md:px-12">
      <Header title="Project" />

      <div className="w-full my-6">
        <Table data={tableData} />
      </div>
    </section>
  );
}
