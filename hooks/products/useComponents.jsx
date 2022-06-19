import PropTypes from "prop-types";

export default function useComponents() {

    const TextInput = ({labelText, value, placeholderText, id, classes, onchangeHandler, error}) =>
        <>
            <label className={classes.titleLabel}> {labelText}</label>
            <input id={id}
                   value={value}
                   className={classes.titleInput}
                   type={`text`}
                   placeholder={placeholderText}
                   onChange={onchangeHandler}
            />
            <span className={`text-red-400`}>{error}</span>
        </>

    const DescriptionInput = ({labelText, placeholderText, id, classes}) =>
        <>
            <label className={classes.titleLabel}> {labelText}</label>
            <input id={id}
                   placeholder={placeholderText}
                   className={classes.descriptionInput}/>
        </>

    const StatisticSection = () =>
        <>
            <div id={`totalProducts`}
                 className={`bg-white p-1 `}
            >
                <p className={`self-center`}>Total <span className={`text-5xl`}>{`23`}</span> pcs</p>
            </div>

            <div id={`totalAudibleProducts`}
                 className={`bg-white p-1 `}
            >
                Audible Products <span className={`text-5xl`}>{`23`}</span>
            </div>
            <div id={`totalAudibleProducts`}
                 className={`bg-white p-1 `}
            >
                Audible Products <span className={`text-5xl`}>{`23`}</span>
            </div>
            <div id={`totalAudibleProducts`}
                 className={`bg-white p-1 `}
            >
                Audible Products <span className={`text-5xl`}>{`23`}</span>
            </div>
        </>
    TextInput.propTypes = {
        id: PropTypes.string.isRequired,
        labelText: PropTypes.string.isRequired,
        placeholderText: PropTypes.string.isRequired,
        onchangeHandler: PropTypes.func.isRequired,
        value: PropTypes.string,
        error: PropTypes.string,
    };
    TextInput.defaultProps = {
        value: null,
        error: null,
    };

    return {
        TextInput,
        DescriptionInput,
        StatisticSection
    }
}