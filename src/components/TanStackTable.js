import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    useReactTable,
  } from "@tanstack/react-table";
  import { USERS } from "../data";
  import { useEffect, useState } from "react";
import { databases2 } from "../appwrite/config2";
import { bucket2 } from "../appwrite/config2";
import { useFetcher } from "react-router-dom";
import SkelTable from "./Skeleton/SkelTable";
import { useSelector } from "react-redux";
import { div } from "framer-motion/client";
//   import DownloadBtn from "./DownloadBtn";
//   import DebouncedInput from "./DebouncedInput";
//   import { SearchIcon } from "../Icons/Icons";  


  const TanStackTable = () => {
    const [you, setyou]= useState([])
    const [isLoading, setIsLoading] = useState(true);
    const darkMode = useSelector((state) => state.darkMode)
    const view = async () => {
      try {
        const response = await databases2.listDocuments(process.env.REACT_APP_DB2_ID,process.env.REACT_APP_MEMBERSHIP_COLLECTION_ID2)
        const filteredDocuments = response.documents.filter(doc => doc.dis === true);
        setIsLoading(false);
        setyou(filteredDocuments)
        console.log("here is you",you)
      }
      catch{
         
      }
    }
    useEffect(()=>{
      view();
    },[])
    const columnHelper = createColumnHelper();
  
    const columns = [
      columnHelper.accessor("", {
        id: "S.No",
        cell: (info) => <span>{info.row.index + 1}</span>,
        header: "S.No",
      }),
      columnHelper.accessor("imgurl", {
        cell: (info) => (
          <img
            src={info?.getValue()}
            alt="..."
            className="rounded-full w-10 h-10 object-cover"
          />
        ),
        header: "Profile",
      }),
      columnHelper.accessor("firstN", {
        cell: (info) => <span>{info.getValue()}</span>,
        header: "First Name",
      }),

      columnHelper.accessor("dep", {
        cell: (info) => <span>{info.getValue()}</span>,
        header: "Department",
      }),

      columnHelper.accessor("year", {
        cell: (info) => <span>{info.getValue()}</span>,
        header: "Year",
      }),
      columnHelper.accessor("dist", {
        cell: (info) => <span>{info.getValue()}</span>,
        header: "District",
      }),
    ];
    // const [data] = useState(() => [...USERS]);
    const [globalFilter, setGlobalFilter] = useState("");
  
    const table = useReactTable({
      data: you,
      columns,
      state: {
        globalFilter,
      },
      getFilteredRowModel: getFilteredRowModel(),
      getCoreRowModel: getCoreRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
    });
  
    return (
      
    
      <div className="md:p-2 px-2  mx-auto text-white fill-gray-400 overflow-x-auto">
        {/* <div className="flex justify-between mb-2">
          <div className="w-full flex items-center gap-1">
            <SearchIcon />
            <DebouncedInput
              value={globalFilter ?? ""}
              onChange={(value) => setGlobalFilter(String(value))}
              className="p-2 bg-transparent outline-none border-b-2 w-1/5 focus:w-1/3 duration-300 border-indigo-500"
              placeholder="Search all columns..."
            />
          </div>
          <DownloadBtn data={data} fileName={"peoples"} />
        </div> */}
        <table className="border  border-gray-700  md:w-full text-left min-w-[600px]">
          <thead className="bg-indigo-600">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="capitalize px-3.5 py-2 ">
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          {isLoading ? <SkelTable /> : (
          <tbody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row, i) => (
                <tr
                  key={row.id}
                  className={`
                  ${i % 2 === 0 ? "bg-gray-900" : "bg-gray-800"} px-80
                  `}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="px-3.5 py-2 ">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr className=" text-black text-2xl  text-center h-32">
                <td colSpan={12}>No Recoard Found!</td>
              </tr>
            )}
          </tbody>
          )}
        </table>
        
        {/* pagination */}
        <div className=" bg-black flex  items-center justify-end mt-2 gap-2 p-2 min-w-[600px]">
          <button
            onClick={() => {
              table.previousPage();
            }}
            disabled={!table.getCanPreviousPage()}
            className="p-1 border border-gray-300 px-2 disabled:opacity-30"
          >
            {"<"}
          </button>
          <button
            onClick={() => {
              table.nextPage();
            }}
            disabled={!table.getCanNextPage()}
            className="p-1 border border-gray-300 px-2 disabled:opacity-30"
          >
            {">"}
          </button>
  
          <span className="flex items-center gap-1">
            <div>Page</div>
            <strong >
              {table.getState().pagination.pageIndex + 1} of{" "}
              {table.getPageCount()}
            </strong>
          </span>
          <span className="flex items-center gap-1 mr-16 ">
             <div className="block">
            | Go to page: 
            </div>
            <input
              type="number"
              defaultValue={table.getState().pagination.pageIndex + 1}
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0;
                table.setPageIndex(page);
              }}
              className="border p-1 rounded w-16 bg-transparent"
            />
          </span>
          <select          
            value={table.getState().pagination.pageSize}
            onChange={(e) => {
              table.setPageSize(Number(e.target.value));
            }}
            className="bg-white text-black  p-2 bg-transparent"
          >
            {[10, 20, 30, 50].map((pageSize) => (
              <option  key={pageSize} value={pageSize}>
                Show {pageSize} 
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  };
  
  export default TanStackTable;
