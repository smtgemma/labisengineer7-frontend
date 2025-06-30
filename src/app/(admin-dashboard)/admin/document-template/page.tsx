import React from "react";
import { UsersAccountsTable } from "../tableLayout/page";
import AddNewTemplateCard from "./NewTemplete";

const page = () => {

  const yourColumns = [
    { key: 'id', label: 'ID', width: 'w-16' },
    { key: 'fullName', label: 'Full Name', width: 'w-40' },
    { key: 'email', label: 'Email', width: 'w-56' },
    { key: 'accountType', label: 'Account Type', width: 'w-32' },
    { key: 'status', label: 'Status', width: 'w-24' },

  ];


  const yourData = [
    {
      id: 101,
      fullName: 'Alice Johnson',
      email: 'alice@example.com',
      accountType: 'Engineer',
      status: 'Active'
    },
    {
      id: 102,
      fullName: 'Bob Williams',
      email: 'bob@example.com',
      accountType: 'Company',
      status: 'Inactive'
    }
  ];


  return <div>


    {/* <UsersAccountsTable
      title="Custom User Accounts"
      data={yourData}
      columns={yourColumns}
      className="grid-cols-6"
  
    /> */}
    <AddNewTemplateCard />

  </div>;
};

export default page;
