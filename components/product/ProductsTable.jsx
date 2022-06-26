import DataTable from "react-data-table-component"
import {useEffect, useState} from "react";
import axios from "axios";
import Moment from "react-moment";

export default function ProductsTable() {
    const [products, setProducts] = useState([])
    const [search, setSearch] = useState('')
    const [columns, setColumns] = useState([])
    const [loading, setLoading] = useState(false);
    const [totalRows, setTotalRows] = useState(0);
    const [perPage, setPerPage] = useState(10);
    const [filteredProducts, setFilteredProducts] = useState(0)
    const getProducts = async (page) => {
        try {
            const response = await axios.get(`/api/v1/admin/product?search=${search}&page=${page}&per_page=${perPage}`)
            const data = await response.data.data
            const filteredTotal = await response.data.pagination.total
            const recordsTotal = await response.data.pagination.total
            const perPage = await response.data.pagination.per_page
            // console.log(response)
            setProducts(data)
            setTotalRows(recordsTotal);
            setFilteredProducts(filteredTotal);
            setLoading(false);
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        getProducts(perPage)
    }, [perPage]);

    useEffect(() => {
        getProducts('', search).then()
    }, [search])

    useEffect(() => {
        setColumns([
            {
                name: 'SKU',
                selector: row => row.stock?.sku,
                width: '10%'
            },
            {
                name: "Title",
                selector: (row) => row.title,
                sortable: true,
                width: '10%'
            },
            {
                name: "Description",
                selector: row => row.description,
                width: '10%'
            },
            {
                name: "Status",
                selector: row => row.status === 1 ? "on" : "off",
                width: '10%'
            },
            {
                name: "Type",
                selector: row => row.type,
                width: '10%'
            },
            {
                name: 'Created',
                selector: row => row.created_at,
                width: '10%'
            },
            {
                name: "Action",
                cell: row => (
                    <div className={`flex flex-row gap-x-3`}>
                        <button onClick={() => alert(row.title)}
                                className={`btn btn-md bg-blue-600 text-white text-md px-3 py-2 rounded-md`}>Edit
                        </button>
                        <button onClick={() => alert(row.title)}
                                className={`btn btn-md bg-red-600 text-white text-md px-3 py-2 rounded-md`}>Remove
                        </button>
                    </div>
                ),
                width: '10%'
            }

        ])
    }, [])

    const handlePageChange = async (page) => {
        getProducts(page).then(() => null);
    };

    const handlePerRowsChange = async (newPerPage, page) => {
        console.log(newPerPage, page)
        setLoading(true);
        const response = await axios.get(`/api/v1/admin/product?search=${search}&page=${page}&per_page=${newPerPage}`);
        setProducts(response.data.data);
        setTotalRows(response.data.recordsTotal);
        setFilteredProducts(response.data.recordsFiltered);
        setPerPage(newPerPage);
        setLoading(false);
    };
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