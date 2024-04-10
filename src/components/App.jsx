import characteristics from '../characteristics';
import './App.css'
import { useEffect, useState } from 'react';
import { getProducts } from '../API/getProducts';
import { calcSum } from '../utils/calcSum';
import { getCategories } from '../API/getCategories';
import { Filter } from './Filter';
import { Pagination } from './Pagination';
import { NewProduct } from './NewProduct';
import { Products } from './Products';

const App = () => {
  const [ products, setProducts ] = useState([]);
  const [ categories, setCategories ] = useState([]);
  const [ pagination, setPagination ] = useState([]);
  const [ pagNumber, setPagNumber ] = useState(0);
  const [ newProduct, setNewProduct ] = useState(false);
  const [ values, setValues ] = useState(characteristics);
  const [ curCategory, setCurCategory ] = useState('');

  useEffect(() => {
    (async () => {
      console.log(curCategory)
      setProducts(await getProducts(pagNumber, curCategory))
      setCategories(await getCategories())
    })()
  }, [ newProduct, pagNumber, setPagNumber, curCategory ])

  const isOpen = async () => {
    setNewProduct(prev => !prev)
  }

  return (
    <div className="container">
      <NewProduct 
        setNewProduct = { setNewProduct } 
        setCategories = { setCategories }
        setCurCategory = { setCurCategory }
        setValues = { setValues } 
        isOpen = { isOpen }
        newProduct ={ newProduct } 
        categories = { categories } 
        values = { values }
      />
      <div className="options-box">
        <Filter 
          setProducts = { setProducts } 
          setValues = { setValues }
          setCurCategory = { setCurCategory }
          setPagNumber = { setPagNumber }
          categories = { categories } 
          values = { values }
        />
        <Pagination 
          setPagNumber = { setPagNumber }
          setPagination = { setPagination }
          pagination = { pagination }
          curCategory = { curCategory }
          pagNumber = { pagNumber }
          newProduct = { newProduct }
        />
      </div>
      <Products 
        data={ products } 
        pagNumber = { pagNumber }
      />
      <span className='total-price'>Total price: { calcSum(products) }</span>
    </div>
  )
}

export default App