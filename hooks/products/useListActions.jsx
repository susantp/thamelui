import axios from "axios";
import {useState, useEffect} from "react";

export default function useListActions() {
    const [products, setProducts] = useState([])
    const [search, setSearch] = useState('')
    const [loading, setLoading] = useState(false);
    const [totalRows, setTotalRows] = useState(0);
    const [perPage, setPerPage] = useState(10);
    const [filteredProducts, setFilteredProducts] = useState(0)

    const columns = [
        {
            name: 'SKU',
            selector: row => row.stock?.sku,
            width: '10%',
            sortable: true
        },
        {
            name: "Title",
            selector: (row) => row.title,
            sortable: true,
            width: '20%'
        },
        {
            name: "Description",
            selector: row => row.description,
            width: '20%'
        },
        {
            name: "Status",
            selector: row => row.status === 1 ? "on" : "off",
            width: '10%',
            sortable: true
        },
        {
            name: "Type",
            selector: row => row.type,
            width: '10%'
        },
        {
            name: 'Created',
            selector: row => row.created_at,
            width: '10%',
            sortable: true
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
            width: '20%'
        }

    ]
    const getProducts = async (page) => {
        try {
            const response = await axios.get(`/api/v1/product?search=${search}&page=${page}&per_page=${perPage}`)
            const data = await response.data.data
            const filteredTotal = await response.data.pagination.total
            const recordsTotal = await response.data.pagination.total
            setProducts(data)
            setTotalRows(recordsTotal);
            setFilteredProducts(filteredTotal);
            setLoading(false);
        } catch (e) {
            console.log(e)
        }
    }

    const handlePageChange = async (page) => {
        getProducts(page).then(() => null);
    };

    const handlePerRowsChange = async (newPerPage, page) => {
        setLoading(true);
        getProducts(page, search).then()
        setPerPage(newPerPage);
        setLoading(false);
    };
    useEffect(() => {
        getProducts('', search).then()
    }, [search])

    return {
        getProducts,
        handlePageChange,
        handlePerRowsChange,
        setSearch,
        loading,
        columns,
        products,
        totalRows,
        filteredProducts,
        setLoading,
        perPage,
    }
}