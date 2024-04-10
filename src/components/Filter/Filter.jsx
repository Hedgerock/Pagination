import { filteredByCategory } from "../../API/filteredByCategory";

export const Filter = (props) => {
    const { setProducts, categories, setValues, setCurCategory, setPagNumber } = props

    return (
        <div className="filter">
          <select onChange={async (e) => {
            const newFilter = e.target.value;
            setCurCategory(newFilter);
            setValues(prevValues => ({ ...prevValues, filter: newFilter}))
            setPagNumber(0);
            setProducts(await filteredByCategory(newFilter));
          }}
          >
              <option value="all">All</option>
              {categories.map(item => (
                <option value={ item.title } key={ item.id }>{ item.title }</option>
              ))}
          </select>
      </div>
    )
}