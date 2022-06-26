export const DetailsList = ({
                                labelText,
                                placeholderText,
                                id,
                                classes,
                                error,
                                handleDetailAdd,
                                handleDetailRemove,
                                onDetailKeyChange,
                                onDetailValueChange,
                                detailList
                            }) => <>
    <label className={classes.titleLabel}> {labelText}</label>
    {detailList.map((singleDetail, index) => {
        return (
            <div key={index}>
                <div className={`mb-3`}>
                    <div className={`flex flex-col md:flex-row justify-start gap-x-4 gap-y-2 `}>
                        <div className={`flex flex-col md:flex-row justify-start gap-x-4 gap-y-2 `} key={index}>
                            <input
                                key={index + '_key'}
                                id={id}
                                name={'detailKey'}
                                value={singleDetail.key}
                                className={classes.featureInput}
                                type={`text`}
                                placeholder={placeholderText}
                                onChange={(e) => onDetailKeyChange(e, index)}
                            />
                            <input
                                key={index + '_value'}
                                id={id}
                                name={`detailValue`}
                                value={singleDetail.value}
                                className={classes.featureInput}
                                type={`text`}
                                placeholder={placeholderText}
                                onChange={(e) => onDetailValueChange(e, index)}
                            />
                        </div>
                        {detailList.length > 1 && (<button
                            onClick={(e) => handleDetailRemove(e, index)}
                            className={` bg-red-600 btn btn-md text-sm text-white font-bold p-2 rounded-md`}>Remove</button>)}
                    </div>
                </div>
                {detailList.length - 1 === index && detailList.length < 5 && (<button onClick={handleDetailAdd}
                                                                                      className={`btn btn-md text-sm text-white font-bold p-2 bg-green-800 w-64 rounded-md`}>
                    Add More
                </button>)}
            </div>
        )
    })}

</>