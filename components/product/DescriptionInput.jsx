import PropTypes from "prop-types";

export const DescriptionInput = ({
                                     labelText,
                                     placeholderText,
                                     id,
                                     value,
                                     classes,
                                     error,
                                     onDescriptionChange,
                                     refer
                                 }) =>
    <div className={`flex flex-col w-full col-span-full`}>
        <label className={classes.titleLabel}> {labelText}</label>
        <textarea id={id}
                  name={id}
                  placeholder={placeholderText}
                  className={classes.descriptionInput}
                  rows={5}
                  value={value}
                  onChange={(e)=>onDescriptionChange(e)}
                  ref={refer}
        />
        {/*<span className={`text-red-400 p-2`}>{error}</span>*/}
    </div>

DescriptionInput.prototype = {
    labelText: PropTypes.string.isRequired,
    placeholderText: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired,
    error: PropTypes.string,
    handleDescriptionChange: PropTypes.func.isRequired
}
DescriptionInput.defaultProps = {
    placeholderText: null,
    error: null,
    value: null
}