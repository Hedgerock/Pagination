import { useEffect } from "react"
import { paginationFunc } from "../../API/pagination"
import { setMaxVal } from "../../utils/setMaxVal"
import './Pagination.css'

export const Pagination = (props) => {
    const { pagination, setPagination, curCategory, pagNumber, setPagNumber, newProduct } = props

    useEffect(() => {
        (async () => setPagination(await paginationFunc(curCategory)) )()
    }, [ curCategory, setPagination, newProduct ])

    const curPage = (pagNumber + 6) / 6
    const maxPage = setMaxVal(pagination)

    const nextPage = () => setPagNumber(prev => prev + 6)
    const prevPage = () => setPagNumber(prev => prev - 6)

    return (
        <div className="pagination">
            <button 
                onClick = { prevPage } 
                disabled = { curPage === 1 }
                title="Prev"
            >
            {'<<'}
            </button>
        { 
        pagination.map((item, index) => (
            <span 
                key={ index } 
                onClick={ () => setPagNumber((item * 6) - 6) }
                className= { curPage === item ? 'pagination__page pagination__page_active' :  'pagination__page' }
            >
                { item }
            </span>
            )
        ) 
        }
            <button 
                onClick = { nextPage }  
                disabled = { curPage === maxPage }
                title="Next"
            >
            {'>>'}
            </button>
        </div>
    )
}