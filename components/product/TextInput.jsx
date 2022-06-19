import PropTypes from "prop-types";

export const TextInput = ({labelText, id, classes, placeholderText, onTitleChange, value, error}) => {
    return (
        <>
            <label className={classes.titleLabel}> {labelText}</label>
            <input id={id}
                   name={id}
                   value={value}
                   className={classes.titleInput}
                   type={`text`}
                   placeholder={placeholderText}
                   onChange={onTitleChange}
            />
            <span className={`text-red-400 p-2`}>{error}</span>
        </>
    )
}

TextInput.propTypes = {
    labelText: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired,
    placeholderText: PropTypes.string.isRequired,
    onTitleChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    error: PropTypes.string,
};
TextInput.defaultProps = {
    value: null,
    error: null,
};
