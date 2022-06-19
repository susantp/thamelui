export const FeaturesInput = ({
                                  labelText,
                                  placeholderText,
                                  id,
                                  classes,
                                  error,
                                  handleFeatureAdd,
                                  handleFeatureRemove,
                                  featureList,
                                  handleFeatureChange
                              }) =>
    <>
        <label className={classes.titleLabel}> {labelText}</label>
        {featureList.map((singleFeature, index) => {
                return (
                    <div key={index}>
                        <div className={`mb-3`}>
                            <div className={`flex flex-col md:flex-row justify-start gap-x-4 gap-y-2 `}>
                                <input
                                    id={id}
                                    name={id }
                                    className={classes.featureInput}
                                    type={`text`}
                                    placeholder={placeholderText}
                                    value={singleFeature}
                                    onChange={(e) => handleFeatureChange(e, index)}
                                />
                                {featureList.length > 1 &&
                                    (
                                        <button
                                            onClick={(e) => handleFeatureRemove(e, index)}
                                            className={` bg-red-600 btn btn-md text-sm text-white font-bold p-2 rounded-md`}>Remove</button>
                                    )
                                }
                            </div>
                        </div>
                        {featureList.length - 1 === index && featureList.length < 5 &&
                            (
                                <button onClick={handleFeatureAdd}
                                        className={`btn btn-md text-sm text-white font-bold p-2 bg-green-800 w-64 rounded-md`}>
                                    Add More
                                </button>
                            )
                        }
                    </div>
                )
            }
        )}

    </>