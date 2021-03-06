export default function useTailwindClasses() {
    const classes = {
        inputWrapper: `bg-white p-6 rounded-md grid grid-flow-row grid-cols-2 gap-4`,
        featureWrapper: `bg-white p-6 rounded-md grid grid-flow-row grid-cols-1 `,
        header: `font-bold text-3xl p-4 items-start  sm:flex sm:space-y-0 sm:space-x-4  sm:rtl:space-x-reverse sm:py-4 `,
        titleLabel: `block text-gray-700 text-sm font-bold mb-2 text-md`,
        titleInput: `shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`,
        descriptionInput: `shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`,
        featureInput: `shadow appearance-none border rounded w-full md:w-1/2  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline `,
        fileInput: `block w-full text-sm text-slate-500
        file:mr-4 file:py-2 file:px-4
        file:rounded-full file:border-0
        file:text-sm file:font-semibold
        file:bg-slate-50 file:text-slate-700
        hover:file:bg-violet-100
        file:cursor
    `,
        formGroup: `grid grid-cols-1 pt-4`,
        submitBtn: `btn text-md text-white px-4 py-2 rounded-md btn-md bg-blue-600 hover:bg-blue-800 disabled:bg-green-900  cursor-pointer cursor:pointer shadow-md disabled:shadow-none`,
        inputErrorSpan: `p-1 text-pink-600 text-sm font-bold`
    }
    return {classes}
}