import useActions from "../../hooks/products/useActions";
import {useRef} from "react";
import Layout from "../../layouts/Layout";
import {TextInput} from "../../components/product/TextInput";
import {FeaturesInput} from "../../components/product/FeaturesInput";
import {DescriptionInput} from "../../components/product/DescriptionInput";
import Media from "../../components/product/media";
import {DetailsList} from "../../components/product/DetailsList";
import {NumberInput} from "../../components/product/NumberInput";

export default function Create1() {
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
        inputWrapper: `bg-white p-6 rounded-md grid grid-flow-row grid-cols-2 gap-4`,
        featureWrapper: `bg-white p-6 rounded-md grid grid-flow-row grid-cols-1 `,
        header: `font-bold text-2xl space-y-2 items-start justify-between sm:flex sm:space-y-0 sm:space-x-4  sm:rtl:space-x-reverse sm:py-4 filament-header`,
        titleLabel: `block text-gray-700 text-sm font-bold mb-2 text-md`,
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
    return (
        <Layout>
            <header className={classes.header}> Create Product</header>
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-6`}>

                <div className={`gap-4 flex flex-col`}>
                    {/* product title, slug, description */}
                    <div className={classes.inputWrapper}>
                        <TextInput id={`productTitleText`} // value also apply for name
                                   labelText={`Title`}
                                   classes={classes}
                                   value={productTitleValue}
                                   placeholderText={`Title`}
                                   onTitleChange={handleTitleOnChange}
                                   error={`some error`}
                                   refer={titleRef}
                                   mandatory={true}
                        />
                        <TextInput id={`productTitleText`} // value also apply for name
                                   labelText={`Slug`}
                                   classes={classes}
                                   value={productTitleValue}
                                   placeholderText={`Slug`}
                                   onTitleChange={handleTitleOnChange}
                                   error={`some error`}
                                   refer={titleRef}
                                   mandatory={false}
                        />
                        <DescriptionInput id={`productDescriptionTextarea`}
                                          value={descriptionValue}
                                          classes={classes}
                                          placeholderText={`Description`}
                                          labelText={`Description`}
                                          error={`some error`}
                                          handleDescriptionChange={handleDescriptionOnChange}
                                          refer={descriptionRef}
                        />
                    </div>
                    {/* product features */}
                    <div className={classes.featureWrapper}>
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
                    {/* product details */}
                    <div className={classes.featureWrapper}>
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
                    {/* product media */}
                    <div className={classes.featureWrapper}>
                        <Media classes={classes}></Media>
                    </div>
                    {/*    product pricing */}
                    <div className={classes.inputWrapper}>

                        <NumberInput id={`productPriceNumber`}
                                     labelText={`Price`}
                                     mandatory={true}
                                     classes={classes}
                                     value={productTitleValue}
                                     placeholderText={`Price`}
                                     onTitleChange={handleTitleOnChange}
                                     error={`some error`}
                                     refer={titleRef}
                        />
                        <NumberInput id={`productPriceNumber`}
                                     labelText={`Compare at price`}
                                     mandatory={true}
                                     classes={classes}
                                     value={productTitleValue}
                                     placeholderText={`Compare at price`}
                                     onTitleChange={handleTitleOnChange}
                                     error={`some error`}
                                     refer={titleRef}
                        />
                        <NumberInput id={`productPriceNumber`}
                                     labelText={`Cost per item`}
                                     mandatory={true}
                                     classes={classes}
                                     value={productTitleValue}
                                     placeholderText={`Cost per item`}
                                     onTitleChange={handleTitleOnChange}
                                     error={`some error`}
                                     refer={titleRef}
                        />
                    </div>
                </div>

                <div>
                    <div className={classes.featureWrapper}>

                    </div>
                </div>
            </div>
        </Layout>
    )
}