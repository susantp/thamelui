import React from "react";
import Layout from "../../layouts/Layout";
import Link from "next/link";

export default function Product() {
    return (
        <Layout>
            <div className="flex-row">
                <div>
                    <Link href={`products/create1`}>
                        <button className="btn-md bg-green-600 text-white drop-shadow p-2 rounded-md">Create</button>
                    </Link>
                </div>
            </div>

        </Layout>
    );

}
