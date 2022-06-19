import Layout from "../../layouts/Layout";
import {TextInput} from "../../components/product/TextInput";
import {FeaturesInput} from "../../components/product/FeaturesInput";
import {DescriptionInput} from "../../components/product/DescriptionInput";
import {StatisticSection} from "../../components/product/StatisticSection";
import {DetailsList} from "../../components/product/DetailsList";
import useActions from "../../hooks/products/useActions";
import {Form, Formik} from "formik";
import {useRef} from "react";

export default function Create() {
    const titleRef = useRef()
    const descriptionRef = useRef()
    const featuresRef = useRef([''])
    const {
        handleTitleOnChange,
        handleDescriptionOnChange,
        handleFeatureAdd,
        handleFeatureRemove,
        handleFeatureChange,
        handleDetailAdd,
        handleDetailRemove,
        handleDetailChange,
        featureList,
        detailList,
        productTitleValue,
        descriptionValue
    } = useActions()


    const classes = {
        titleLabel: `block text-gray-700 text-sm font-bold mb-2 text-xl`,
        titleInput: `shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`,
        descriptionInput: `shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`,
        featureInput: `shadow appearance-none border rounded w-full md:w-1/2  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline `,
        fileInput: `block w-full text-sm text-slate-500
        file:mr-4 file:py-2 file:px-4
        file:rounded-full file:border-0
        file:text-sm file:font-semibold
        file:bg-slate-50 file:text-slate-700
        hover:file:bg-violet-100
        file:cursor
    `,
        formGroup: `grid grid-cols-1 formGroup pt-4`
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = new FormData(e.target)
        console.log(Object.fromEntries(data.entries()))

    }
    return (
        <Layout>
            <h3 className={`text-3xl font-bold text-violet-800 p-6`}> Add Product</h3>

            <div className="grid grid-flow-row grid-cols-3 grid-rows-3 divide-x-4 divide-white">

                <form className={`col-span-2 p-6`} onSubmit={handleSubmit}>
                    <div className={`grid grid-cols-1 grid-flow-row gap-y-6 divide-y-4 divide-white`}>

                        <div className={classes.formGroup}>
                            <TextInput id={`productTitleText`} // value also apply for name
                                       labelText={`Title`}
                                       classes={classes}
                                       value={productTitleValue}
                                       placeholderText={`Title`}
                                       onTitleChange={handleTitleOnChange}
                                       error={`some error`}
                                       refer={titleRef}
                            />
                        </div>

                        <div className={classes.formGroup}>
                            <FeaturesInput id={`productFeaturesText`}
                                           classes={classes}
                                           placeholderText={`Add Feature`}
                                           labelText={`Features`}
                                           error={`some error`}
                                           handleFeatureAdd={handleFeatureAdd}
                                           handleFeatureRemove={handleFeatureRemove}
                                           featureList={featureList}
                                           refer={featuresRef}

                            />
                        </div>

                        <div className={classes.formGroup}>
                            <DescriptionInput id={`productDescriptionTextarea`}
                                              value={descriptionValue}
                                              classes={classes}
                                              placeholderText={`description`}
                                              labelText={`Description`}
                                              error={`some error`}
                                              handleDescriptionChange={handleDescriptionOnChange}
                                              refer={descriptionRef}
                            />
                        </div>

                        <div className={classes.formGroup}>
                            <DetailsList id={`productDescriptionText`}
                                         classes={classes}
                                         placeholderText={`Add Detail`}
                                         labelText={`Details`}
                                         error={`some error`}
                                         handleDetailAdd={handleDetailAdd}
                                         handleDetailRemove={handleDetailRemove}
                                         detailList={detailList}
                            />
                        </div>

                        <div className={classes.formGroup}>
                            <label className="block">
                                <span className="sr-only">Choose profile photo</span>
                                <input
                                    type="file"
                                    className={classes.fileInput}/>
                            </label>
                        </div>

                        <div className={classes.formGroup}>
                            <button
                                className={`btn btn-md bg-blue-600 text-sm text-white font-bold p-2 rounded-md mt-4`}>Submit
                            </button>
                        </div>


                    </div>


                </form>

                <div className={`p-6 `}>
                    <StatisticSection></StatisticSection>
                </div>
            </div>
        </Layout>
    )
}