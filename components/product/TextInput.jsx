import PropTypes from "prop-types";

export const TextInput = ({labelText, id, name, classes, placeholderText, onTitleChange, value, error, refer, mandatory}) => {
    return (
        <div className={`flex flex-col w-full`}>
            <label className={classes.titleLabel}> {labelText} {mandatory && `*`}</label>
            <input id={id}
                   name={name}
                   className={classes.titleInput}
                   type={`text`}
                   placeholder={placeholderText}
                   onChange={onTitleChange}
                   ref={refer}
            />

            {/*<span className={`text-red-400 p-2`}>{error}</span>*/}


        </div>
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
    refer: PropTypes.object.isRequired,
    mandatory: PropTypes.bool
};
TextInput.defaultProps = {
    value: null,
    error: null,
};
