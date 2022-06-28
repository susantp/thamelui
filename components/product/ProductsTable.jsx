import DataTable from "react-data-table-component"
import useListActions from "../../hooks/products/useListActions";

export default function ProductsTable() {
    const {
        columns,
        search,
        loading,
        setSearch,
        getProducts,
        products,
        perPage,
        totalRows,
        filteredProducts,
        handlePageChange,
        handlePerRowsChange
    } = useListActions()



    return (
        <div className={`flex flex-col gap-y-5`}>
            <div className={`flex flex-row gap-6 justify-evenly`}>

                <div className={`shadow-md rounded-2xl w-full gap-y-6 p-6 flex flex-col bg-white dark:bg-slate-800`}>
                    <p className={`text-xl text-slate-400 font-bold`}>Total Products</p>
                    <p className={`text-4xl font-bold`}>{totalRows}</p>
                </div>

                <div className={`shadow-md rounded-2xl w-full  gap-y-6 p-6 flex flex-col bg-white dark:bg-slate-800`}>
                    <p className={`text-xl text-slate-400 font-bold`}>Filtered Products</p>
                    <p className={`text-4xl font-bold`}>{filteredProducts}</p>
                </div>

                <div className={`shadow-md rounded-2xl w-full  gap-y-6 p-6 flex flex-col bg-white dark:bg-slate-800`}>
                    <p className={`text-xl text-slate-400 font-bold`}>Per Page</p>
                    <p className={`text-4xl font-bold`}>{perPage}</p>
                </div>
            </div>
            <div>
                <DataTable columns={columns}
                           data={products}
                           pagination
                           paginationServer
                           paginationTotalRows={totalRows}
                           onChangeRowsPerPage={handlePerRowsChange}
                           onChangePage={handlePageChange}
                           fixedHeader
                           fixedHeaderScrollHeight={`450px`}
                           selectableRows
                           selectableRowsHighlight
                           highlightOnHover
                           actions={<button
                               className={`btn btn-md bg-blue-600 text-white text-sm px-3 py-2 rounded-md`}>Export</button>}
                           subHeader
                           subHeaderComponent={
                               <input
                                   className={`shadow appearance-none border w-25 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                                   type={`text`}
                                   placeholder={`Search here`}
                                   value={search}
                                   onChange={(e) => setSearch(e.target.value)}
                               />
                           }
                           progressPending={loading}
                />
            </div>
        </div>
    )
}