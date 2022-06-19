import Layout from "../../layouts/Layout";
import TextInput from "../../hooks/products/TextInput";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import useComponents from "../../hooks/products/useComponents";

export default function Create() {
    const {query} = useRouter()
    const [product, setProduct] = useState({
        title: 'ff',
        slug: '',
        description: '',
        features: ['f1', 'f2', 'f3', 'f4'],
        details: {
            'd1': 'd1v'
        }
    })
    const [productTitleValue, setProductTitleValue] = useState('')

    const {TextInput, DescriptionInput, StatisticSection} = useComponents()

    // useEffect(() => {
    //
    //
    //     handleTitleOnChange()
    //     return () => {
    //         setProductTitleValue('')
    //     };
    // }, [productTitleValue]);
// console.log(productTitleValue)

    const classes = {
        titleLabel: `block text-gray-700 text-sm font-bold mb-2`,
        titleInput: `shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`,
        descriptionInput: `shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`
    }
    const handleTitleOnChange = (event) => {
        event.preventDefault()
        setProductTitleValue(event.target.value)
    }
    return (
        <Layout>
            <h3 className={`text-2xl font-bold`}>Product form</h3>

            <div className="grid grid-cols-2 grid-flow-row mt-4 gap-x-5">

                <div className={`grid grid-cols-1 grid-flow-row  p-6 gap-y-6 bg-slate-200 `}>
                    <div>
                        <TextInput id={`productTitleInput`}
                                   labelText={`Title`}
                                   classes={classes}
                                   value={productTitleValue}
                                   placeholderText={`Title`}
                                   onchangeHandler={handleTitleOnChange}
                                   error={`some error`}
                        />
                    </div>

                    <div>
                        <DescriptionInput id={`productDescriptionInput`}
                                          classes={classes}
                                          placeholderText={`description`}
                                          labelText={`Description`}
                        />
                    </div>
                </div>
                <div className={`grid grid-cols-2 p-6 bg-slate-200 justify-start gap-3  p-6 content-center`}
                     id={`productStatisticsDiv`}
                >
                    <StatisticSection/>
                </div>

            </div>
        </Layout>
    )
}