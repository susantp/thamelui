import React from "react";
import Layout from "../../layouts/Layout";
import Link from "next/link";
import ProductsTable from "../../components/product/ProductsTable";

export default function Product() {

    return (
        <Layout>
            <div className="flex py-4 flex-col gap-3">
                <div className={`flex flex-row-reverse`}>
                    <Link href={`products/create`}>
                        <button
                            className="btn-md bg-amber-600 dark:bg-slate-800 text-white dark:text-slate-800 drop-shadow py-3 px-5 rounded-md"
                        >
                            New Product
                        </button>
                    </Link>
                </div>

                <div id={`productTableWrapper`} className={`p-2 `}>
                    <ProductsTable/>
                </div>
            </div>

        </Layout>
    );

}
