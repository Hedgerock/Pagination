import { createNewProduct } from "../../API/createNewProduct"
import characteristics from "../../characteristics"
import './Form.css'

export const Form = (props) => {
    const { setNewProduct, values, setValues, categories, isOpen } = props

    const initNewProduct = async () => {
        await createNewProduct(values)
        setNewProduct(prev => !prev)
        setValues(characteristics)
    }

    return (
        <div className="form">
            <label className="form-label form-label_title">
                <span>Title</span>
                <input 
                    onChange = { (e) => setValues( prevValues => ({ ...prevValues, title: e.target.value })) } 
                    type="text"
                    value = { values.title }
                    placeholder="Write title here" 
                />
            </label>
            <label className="form-label form-label_price">
                <span>Price</span>
                <input 
                    onChange ={ (e) => setValues( prevValues => ({ ...prevValues, price: Number(e.target.value)})) } 
                    type="number" 
                    placeholder="Write price here"
                    value = { values.price }
                />
            </label>
            <label className="form-label form-label_category">
                <span>Select category</span>
                <select onChange={ (e) => {
                    const el = e.target.value
                    const index = categories.findIndex(e => el === e.id)
                    setValues( prevValues => ({ ...prevValues, category: categories[index].title }))
                } }>
                    { categories.map((item, index) => (
                        <option value={item.id} key={ index }>{ item.title }</option>
                    )) }
                </select>
            </label>

            <button onClick={ initNewProduct }>Create new product</button>
            <button className="form__close-btn" onClick={ isOpen } title="Close">X</button>
        </div>
    )
}