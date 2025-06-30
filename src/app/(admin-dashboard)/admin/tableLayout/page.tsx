'use client'
import React, { useState } from 'react';
import { MoreHorizontal, Plus, Search, Filter } from 'lucide-react';


export const UsersAccountsTable = ({
    data = [],
    columns = [],
    title = "Users & Accounts",
    showAddButton = true,
    showAllUserFilter = true,
    onAddNew = () => { },
    onRowAction = () => { },
    className = ""
}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterValue, setFilterValue] = useState('All User');

    // Default sample data if none provided
    const defaultData = [
        {
            id: 1,
            joiningDate: 'Jun 25, 2023 | 08:52 AM',
            userName: 'Saiful Rahman',
            emailAddress: 'hr.saiful.info@gmail.com',
            role: 'Engineer',
            status: 'Active'
        },
        {
            id: 2,
            joiningDate: 'Jun 25, 2023 | 08:52 AM',
            userName: 'Saiful Rahman',
            emailAddress: 'hr.saiful.info@gmail.com',
            role: 'Company',
            status: 'Active'
        },
        {
            id: 3,
            joiningDate: 'Jun 25, 2023 | 08:52 AM',
            userName: 'Saiful Rahman',
            emailAddress: 'hr.saiful.info@gmail.com',
            role: 'Engineer',
            status: 'Active'
        },
        {
            id: 4,
            joiningDate: 'Jun 25, 2023 | 08:52 AM',
            userName: 'Saiful Rahman',
            emailAddress: 'hr.saiful.info@gmail.com',
            role: 'Engineer',
            status: 'Active'
        },
        {
            id: 5,
            joiningDate: 'Jun 25, 2023 | 08:52 AM',
            userName: 'Saiful Rahman',
            emailAddress: 'hr.saiful.info@gmail.com',
            role: 'Company',
            status: 'Active'
        },
        {
            id: 6,
            joiningDate: 'Jun 25, 2023 | 08:52 AM',
            userName: 'Saiful Rahman',
            emailAddress: 'hr.saiful.info@gmail.com',
            role: 'Company',
            status: 'Active'
        },
        {
            id: 7,
            joiningDate: 'Jun 25, 2023 | 08:52 AM',
            userName: 'Saiful Rahman',
            emailAddress: 'hr.saiful.info@gmail.com',
            role: 'Engineer',
            status: 'Active'
        },
        {
            id: 8,
            joiningDate: 'Jun 25, 2023 | 08:52 AM',
            userName: 'Saiful Rahman',
            emailAddress: 'hr.saiful.info@gmail.com',
            role: 'Company',
            status: 'Active'
        },
        {
            id: 9,
            joiningDate: 'Jun 25, 2023 | 08:52 AM',
            userName: 'Saiful Rahman',
            emailAddress: 'hr.saiful.info@gmail.com',
            role: 'Engineer',
            status: 'Active'
        }
    ];

    // Default columns if none provided
    const defaultColumns = [
        { key: 'joiningDate', label: 'Joining Date & Time', width: 'w-48' },
        { key: 'userName', label: 'User Name', width: 'w-40' },
        { key: 'emailAddress', label: 'Email Address', width: 'w-56' },
        { key: 'role', label: 'Role', width: 'w-32' },
        { key: 'status', label: 'Status', width: 'w-24' },
        { key: 'action', label: 'Action', width: 'w-20' }
    ];

    const tableData = data.length > 0 ? data : defaultData;
    const tableColumns = columns.length > 0 ? columns : defaultColumns;

    const filteredData = tableData.filter(row => {
        const matchesSearch = Object.values(row).some(value =>
            value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        );
        const matchesFilter = filterValue === 'All User' || row.role === filterValue;
        return matchesSearch && matchesFilter;
    });

    const StatusBadge = ({ status }) => (
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200">
            {status}
        </span>
    );

    const ActionButton = ({ rowData }) => (
        <button
            onClick={() => onRowAction(rowData)}
            className="p-1 hover:bg-gray-100 rounded transition-colors"
        >
            <MoreHorizontal size={16} className="text-gray-500" />
        </button>
    );

    return (

        <div>

            {/* Header */}
            <div className="px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
                    <div className="flex items-center gap-3">
                        {showAllUserFilter && (
                            <select
                                value={filterValue}
                                onChange={(e) => setFilterValue(e.target.value)}
                                className="px-3 py-1.5 text-sm border border-gray-300 rounded-md bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            >
                                <option>All User</option>
                                <option>Engineer</option>
                                <option>Company</option>
                            </select>
                        )}

                    </div>
                </div>
            </div>

            <div className={`bg-white rounded-lg shadow-sm border border-gray-200 ${className}`}>

                {/* Table Header Row */}
                <div className="bg-blue-600 px-6">
                    <div className={`grid ${className} gap-4 py-3`}>
                        {tableColumns.map((column, index) => (
                            <div
                                key={column.key}
                                className={`text-white text-sm font-medium ${column.key === 'joiningDate' ? 'col-span-3' :
                                    column.key === 'userName' ? 'col-span-2' :
                                        column.key === 'emailAddress' ? 'col-span-3' :
                                            column.key === 'role' ? 'col-span-2' :
                                                column.key === 'status' ? 'col-span-1' :
                                                    column.key === 'action' ? 'col-span-1' : 'col-span-1'
                                    }`}
                            >
                                {column.label}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Table Body */}
                <div className="divide-y divide-gray-200">
                    {filteredData.map((row, index) => (
                        <div key={row.id || index} className="px-6 py-4 hover:bg-gray-50 transition-colors">
                            <div className="grid grid-cols-12 gap-4 items-center">
                                {tableColumns.map((column) => (
                                    <div
                                        key={column.key}
                                        className={`text-sm text-gray-900 ${column.key === 'joiningDate' ? 'col-span-3' :
                                            column.key === 'userName' ? 'col-span-2' :
                                                column.key === 'emailAddress' ? 'col-span-3 text-gray-600' :
                                                    column.key === 'role' ? 'col-span-2' :
                                                        column.key === 'status' ? 'col-span-1' :
                                                            column.key === 'action' ? 'col-span-1' : 'col-span-1'
                                            }`}
                                    >
                                        {column.key === 'status' ? (
                                            <StatusBadge status={row[column.key]} />
                                        ) : column.key === 'action' ? (
                                            <ActionButton rowData={row} />
                                        ) : (
                                            row[column.key]
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {filteredData.length === 0 && (
                    <div className="px-6 py-12 text-center">
                        <p className="text-gray-500 text-sm">No data found</p>
                    </div>
                )}
            </div>
        </div>

    );
};

// Demo component showing how to use the table
export default function TableDemo() {
    const [tableData, setTableData] = useState([]);

    // Custom data example
    const customData = [
        {
            id: 1,
            joiningDate: 'Jun 25, 2023 | 08:52 AM',
            userName: 'John Doe',
            emailAddress: 'john.doe@example.com',
            role: 'Engineer',
            status: 'Active'
        },
        {
            id: 2,
            joiningDate: 'Jun 26, 2023 | 09:15 AM',
            userName: 'Jane Smith',
            emailAddress: 'jane.smith@company.com',
            role: 'Company',
            status: 'Active'
        }
    ];

    const handleAddNew = () => {
        const newRow = {
            id: Date.now(),
            joiningDate: new Date().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit'
            }),
            userName: `User ${Date.now()}`,
            emailAddress: `user${Date.now()}@example.com`,
            role: Math.random() > 0.5 ? 'Engineer' : 'Company',
            status: 'Active'
        };
        setTableData(prev => [...prev, newRow]);
    };

    const handleRowAction = (rowData) => {
        alert(`Action clicked for: ${rowData.userName}`);
    };

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <div className="max-w-7xl mx-auto space-y-8">
                {/* Default table */}
                <UsersAccountsTable
                    onAddNew={handleAddNew}
                    onRowAction={handleRowAction}
                />

                {/* Custom data table */}
                {tableData.length > 0 && (
                    <UsersAccountsTable
                        data={tableData}
                        title="Custom Users Table"
                        onAddNew={handleAddNew}
                        onRowAction={handleRowAction}
                    />
                )}
            </div>
        </div>
    );
}