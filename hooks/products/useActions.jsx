import {useState} from "react";

export default function useActions() {

    const [productTitleValue, setProductTitleValue] = useState('')
    const [description, setDescription] = useState('')
    const [featureList, setFeatureList] = useState([''])
    const [detailList, setDetailList] = useState([{}])

    const handleTitleOnChange = (event) => {
        setProductTitleValue(event.target.value)
    }
    const handleFeatureAdd = (event) => {
        event.preventDefault()
        setFeatureList([...featureList, event.target.value])

    }
    const handleFeatureRemove = (e, index) => {
        const list = [...featureList]
        list.splice(index, 1)
        setFeatureList(list)

    }
    const handleFeatureChange = (event, index) => {
        const {name, value} = event.target
        const list = [...featureList]
        list[index] = value
        setFeatureList(list)
    }

    const handleDetailAdd = (event) => {
        event.preventDefault()
        setDetailList([...detailList, {}])

    }
    const handleDetailRemove = (e, index) => {
        const list = [...detailList]
        list.splice(index, 1)
        setDetailList(list)

    }
    const handleDetailChange = (e, index) => {
        const {name, value} = e.target
        const list = [...detailList]
        console.log(name, value)
    }

    return {
        handleTitleOnChange,
        handleFeatureAdd,
        handleFeatureRemove,
        handleFeatureChange,
        handleDetailAdd,
        handleDetailRemove,
        handleDetailChange,
        featureList,
        detailList,
        productTitleValue
    }
}