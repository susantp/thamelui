import PropTypes from "prop-types";

const TextInput = ({labelText, value, placeholderText, id, classes, onchangeHandler, error}) =>
{
    return (
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
    )
}

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

export default TextInput;