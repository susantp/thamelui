import DataTable from "react-data-table-component"
import {useEffect, useState} from "react";
import axios from "axios";

export default function ProductsTable() {
    const [products, setProducts] = useState([])
    const [search, setSearch] = useState('')
    const [filteredProducts, setFilteredProducts] = useState([])
    const [columns, setColumns] = useState([])
    const [loading, setLoading] = useState(false);
    const [totalRows, setTotalRows] = useState(0);
    const [perPage, setPerPage] = useState(20);
    const getProducts = async () => {
        try {
            const response = await axios.get(`/api/v1/admin/product?page=3&per_page=${perPage}`)
            const data = await response.data.data
            const total = await response.data.recordsTotal
            setProducts(data)
            setFilteredProducts(data)
            setTotalRows(total);
            setLoading(false);
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        getProducts().then(r => null)
    }, []);

    useEffect(() => {
        const result = products.filter((product) => {
            return product.title.toLowerCase().match(search.toLowerCase())
        })
        setFilteredProducts(result)
    }, [search])

    useEffect(() => {
        setColumns([
            {
                name: "Title",
                selector: (row) => row.title,
                sortable: true
            },
            {
                name: "Description",
                selector: row => row.description
            },
            {
                name: "Status",
                selector: row => row.status === 1 ? "on" : "off"
            },
            {
                name: "Type",
                selector: row => row.type === 1 ? "Single" : "Combined"
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
                )
            }

        ])
    }, [])

    return (
        <div className={`flex flex-col gap-y-5`}>
            <div className={`flex flex-row gap-6 justify-evenly`}>

                <div className={`shadow-md rounded-2xl w-full gap-y-6 p-6 flex flex-col bg-white dark:bg-slate-800`}>
                    <p className={`text-xl text-slate-400 font-bold`}>Total Products</p>
                    <p className={`text-4xl font-bold`}>{totalRows}</p>
                </div>

                <div className={`shadow-md rounded-2xl w-full  gap-y-6 p-6 flex flex-col bg-white dark:bg-slate-800`}>
                    <p className={`text-xl text-slate-400 font-bold`}>Total Products</p>
                    <p className={`text-4xl font-bold`}>{totalRows}</p>
                </div>

                <div className={`shadow-md rounded-2xl w-full  gap-y-6 p-6 flex flex-col bg-white dark:bg-slate-800`}>
                    <p className={`text-xl text-slate-400 font-bold`}>Total Products</p>
                    <p className={`text-4xl font-bold`}>{totalRows}</p>
                </div>
            </div>
            <div className={`bg-red-600`}>
                <DataTable columns={columns}
                           data={filteredProducts}
                           pagination
                           paginationServer
                           paginationTotalRows={totalRows}
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