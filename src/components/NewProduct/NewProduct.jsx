import { useEffect } from "react"
import { Form } from "../Form";

export const NewProduct = (props) => {
    const { setNewProduct, newProduct, categories } = props
    const { isOpen, setValues, values } = props

    useEffect(() => {
        if (!categories.length) {
            return 
        }
        setValues( prevValues => ({ ...prevValues, category: categories[0].title }))
    }, [categories, setValues])

    return (
        newProduct
            ? <Form  
                setNewProduct = { setNewProduct } 
                values = { values }
                setValues = { setValues }
                categories = { categories }
                isOpen = { isOpen }
            />
            : <button 
                onClick={ isOpen }
                className="open-form-btn"
            >
                Create new product
            </button>
    )
}