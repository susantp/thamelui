export const DescriptionInput = ({
                                     labelText,
                                     placeholderText,
                                     id,
                                     classes,
                                     error
                                 }) =>
    <>
        <label className={classes.titleLabel}> {labelText}</label>
        <textarea id={id}
                  name={id}
                  placeholder={placeholderText}
                  className={classes.descriptionInput}
                  rows={5}
        />
        <span className={`text-red-400 p-2`}>{error}</span>
    </>