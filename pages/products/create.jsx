import Layout from "../../layouts/Layout";
import {TextInput} from "../../components/product/TextInput";
import {FeaturesInput} from "../../components/product/FeaturesInput";
import {DescriptionInput} from "../../components/product/DescriptionInput";
import {StatisticSection} from "../../components/product/StatisticSection";
import {DetailsList} from "../../components/product/DetailsList";
import useActions from "../../hooks/products/useActions";

export default function Create() {
    const {
        handleTitleOnChange,
        handleFeatureAdd,
        handleFeatureRemove,
        handleFeatureChange,
        handleDetailAdd,
        handleDetailRemove,
        handleDetailChange,
        featureList,
        detailList,
        productTitleValue
    } = useActions()


    const classes = {
        titleLabel: `block text-gray-700 text-sm font-bold mb-2 text-xl`,
        titleInput: `shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`,
        descriptionInput: `shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`,
        featureInput: `shadow appearance-none border rounded w-full md:w-1/2  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline `,
        formGroup: `grid grid-cols-1 gap-y-1 formGroup`
    }

    return (
        <Layout>
            <h3 className={`text-3xl font-bold`}>Product form</h3>

            <div className="grid grid-cols-2">

                <div className={`grid grid-cols-1 grid-flow-row  p-6 gap-y-6 `}>

                    <div className={classes.formGroup}>
                        <TextInput id={`productTitleText`}
                                   labelText={`Title`}
                                   classes={classes}
                                   value={productTitleValue}
                                   placeholderText={`Title`}
                                   onTitleChange={handleTitleOnChange}
                                   error={`some error`}
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
                                       handleFeatureChange={handleFeatureChange}
                                       featureList={featureList}

                        />
                    </div>

                    <div className={classes.formGroup}>
                        <DescriptionInput id={`productDescriptionTextarea`}
                                          classes={classes}
                                          placeholderText={`description`}
                                          labelText={`Description`}
                                          error={`some error`}
                        />
                    </div>

                    <div className={classes.formGroup}>
                        <DetailsList id={`productFeaturesText`}
                                     classes={classes}
                                     placeholderText={`Add Detail`}
                                     labelText={`Details`}
                                     error={`some error`}
                                     handleDetailAdd={handleDetailAdd}
                                     handleDetailRemove={handleDetailRemove}
                                     handleDetailChange={handleDetailChange}
                                     detailList={detailList}
                        />
                    </div>

                    <div className={classes.formGroup}>
                        <button
                            className={`btn btn-md bg-blue-600 text-sm text-white font-bold p-2 rounded-md`}>Submit
                        </button>
                    </div>

                </div>
                <div className={`p-6`}>
                    <StatisticSection></StatisticSection>
                </div>
            </div>
        </Layout>
    )
}