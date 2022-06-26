import {useState} from "react";
import _ from "lodash";

export default function useActions() {

    const [productTitleValue, setProductTitleValue] = useState('')
    const [descriptionValue, setDescriptionValue] = useState('')
    const [featureList, setFeatureList] = useState(['f1', 'f2', 'f3', 'f4', 'f5'])
    const [detailList, setDetailList] = useState([{key: '', value: ''}, {key: '', value: ''}, {
        key: '',
        value: ''
    }])
    const [formValues, setFormValues] = useState({productTitleValue, descriptionValue, featureList, detailList})

    const handleFormSubmit = (e) => {
        e.preventDefault()
        console.log(formValues)
    }

    const handleTitleOnChange = async (event) => {
        const {name, value} = event.target
        setProductTitleValue(value)
        setFormValues({...formValues, productTitleValue: value})
    }
    const handleDescriptionOnChange = (e) => {
        setDescriptionValue(e.target.value)
        console.log(e.target.value)
    }
    const handleFeatureAdd = (event) => {
        event.preventDefault()
        setFeatureList([...featureList, ''])

    }
    const handleFeatureRemove = (e, index) => {
        const list = [...featureList]
        if (index !== -1) {
            list.splice(index, 1)
            setFeatureList(list)
        }
        // console.log('on remove')
        setFormValues({...formValues, featureList: list})
    }
    const handleFeatureChange = (event, index) => {
        const {name, value} = event.target
        const list = [...featureList]
        list[index] = value
        setFormValues({...formValues, featureList: list})
        setFeatureList(list)
    }
    const handleDetailAdd = (event) => {
        event.preventDefault()
        const list = [...detailList]
        setDetailList([...list, {key: '', value: ''}])
    }
    const handleDetailRemove = (e, index) => {
        const list = [...detailList]
        if (index !== -1) {
            list.splice(index, 1)
            setDetailList(list)
        }
        setFormValues({...formValues, detailList: list})
    }
    const handleDetailKeyChange = (e, index) => {
        const {name, value} = e.target
        const list = [...detailList]
        list[index].key = value
        setFormValues({...formValues, detailList: list})
    }
    const handleDetailValueChange = (e, index) => {
        const {name, value} = e.target
        const list = [...detailList]
        list[index].value = value
        setFormValues({...formValues, detailList: list})
    }

    return [
        handleTitleOnChange,
        handleDescriptionOnChange,
        handleFeatureAdd,
        handleFeatureRemove,
        handleFeatureChange,
        handleDetailAdd,
        handleDetailRemove,
        handleDetailValueChange,
        handleDetailKeyChange,
        featureList,
        detailList,
        productTitleValue,
        descriptionValue,
        handleFormSubmit,
    ]
}