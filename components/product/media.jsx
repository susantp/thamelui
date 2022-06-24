export default function Media({classes}) {
    return (
        <>
            <label className={classes.titleLabel}> Media
            </label>

            <span className="sr-only">Choose profile photo</span>
            <input
                name="files[]"
                multiple={true}
                type="file"
                className={classes.fileInput}
            />
        </>
    )
}