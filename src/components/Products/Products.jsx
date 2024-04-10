import './Products.css'

export const Products = (props) => {
    const { data, pagNumber } = props

    return (
        <div className="products">
        { data.map((item, index) => (
            <div className='product' key={ item.id }>
              <span className='product__value product__value_number'>{ index + 1 + pagNumber }</span>
              <h3 className='product__value product__value_title' title={ item.title }>{ item.title }</h3>
              <span className='product__value product__value_category'>{ `category: ${item.category}` }</span>
              <span className='product__value product__value_price'>{ `price: ${item.price}` }</span>
            </div>
          ))
        }
      </div>
    )
}