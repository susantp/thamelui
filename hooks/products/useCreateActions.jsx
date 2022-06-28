import {useState} from "react";
import _ from "lodash";
import axios from "axios";

export default function useCreateActions() {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [features, setFeatureList] = useState(['f1', 'f2', 'f3', 'f4', 'f5'])
    const [detailList, setDetailList] = useState([{key: '', value: ''}, {key: '', value: ''}, {
        key: '',
        value: ''
    }])
    const [formValues, setFormValues] = useState({title, description, features, detailList})

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        console.table(formValues)
    }

    const handleTitleOnChange = async (event) => {
        const {name, value} = event.target
        setTitle(value)
        setFormValues({...formValues, title: value})
    }
    const handleDescriptionOnChange = (e) => {
        const {name, value} = e.target
        setDescription(value)
        setFormValues({...formValues, description: value})
    }
    const handleFeatureAdd = (event) => {
        event.preventDefault()
        setFeatureList([...features, ''])

    }
    const handleFeatureRemove = (e, index) => {
        const list = [...features]
        if (index !== -1) {
            list.splice(index, 1)
            setFeatureList(list)
        }
        // console.log('on remove')
        setFormValues({...formValues, features: list})
    }
    const handleFeatureChange = (event, index) => {
        const {name, value} = event.target
        const list = [...features]
        list[index] = value
        setFormValues({...formValues, features: list})
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
        features,
        detailList,
        title,
        description,
        handleFormSubmit,
    ]
}