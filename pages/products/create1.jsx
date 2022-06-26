import useActions from "../../hooks/products/useActions";
import {useRef} from "react";
import Layout from "../../layouts/Layout";
import {TextInput} from "../../components/product/TextInput";
import {FeaturesInput} from "../../components/product/FeaturesInput";
import {DescriptionInput} from "../../components/product/DescriptionInput";
import Media from "../../components/product/Media";
import {DetailsList} from "../../components/product/DetailsList";
import {NumberInput} from "../../components/product/NumberInput";
import tailwindClasses from "../../const/tailwindClasses";

export default function Create1() {
    const titleRef = useRef()
    const descriptionRef = useRef()
    const featuresRef = useRef([''])
    const [
        handleTitleOnChange,
        handleDescriptionOnChange,
        handleFeatureAdd,
        handleFeatureRemove,
        handleFeatureChange,
        handleDetailAdd,
        handleDetailRemove,
        handleDetailValueChange,
        handleDetailKeyChange,
        featureList,
        detailList,
        productTitleValue,
        descriptionValue,
        handleFormSubmit
    ] = useActions()
    const {classes} = tailwindClasses()

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
                                          onDescriptionChange={handleDescriptionOnChange}
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
                                       onFeatureChange={handleFeatureChange}

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
                                     onDetailKeyChange={handleDetailKeyChange}
                                     onDetailValueChange={handleDetailValueChange}
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
                    <div>
                        <input onClick={handleFormSubmit}  className={`btn text-md px-4 py-2 rounded-md btn-md bg-amber-600 cursor-pointer`} type={`submit`} name={`submit`} value={`Submit`} />
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