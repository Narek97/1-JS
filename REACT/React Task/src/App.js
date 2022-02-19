import React, {useState} from 'react';
import './App.css';
import {Loader} from "./Loader/loader";
import {Table} from "./Table/Table";
import _ from 'lodash'
import DetailRowView from "./DetailRowView/DetailRowView";
import ModeSelector from "./ModeSelector/ModeSelector";
import ReactPaginate from 'react-paginate';
import TableSearch from "./TableSearch/TableSearch";

function App() {

    const [data, setData] = useState([])
    const [sort, setSort] = useState('asc')
    const [sortField, setSortField] = useState('id')
    const [row, setRow] = useState(null)
    const [loading, setLoading] = useState(false)
    const [isModeSelected, setIsModeSelected] = useState(false)
    const [currentPage, setCurrentPage] = useState(0)
    const [search, setSearch] = useState('')

    //serverich stanum enq tvyalnery
    const fetchedData = async (url) => {
        let response = await fetch(`${url}`)
        let data = await response.json()
        setData(_.orderBy(data, sortField, sort))
        setLoading(false)
    }

    //usernerin soravarman hamar lodash tragri mijochov
    const onSort = (field) => {
        const dataClone = [...data]
        const sortType = sort === 'asc' ? 'desc' : 'asc'
        const orderedData = _.orderBy(dataClone, field, sortType)
        setData(orderedData)
        setSort(sortType)
        setSortField(field)
    }

    //poisk anelu hamar tvyal userin
    const onSearch = (search) => {
        setSearch(search)
        setCurrentPage(0)
    }

    //usernerin cuych talu hamar ete poisk chka bolorin cuych ta ete ka tvyal userin
    const getFilteredData = () => {

        const newData = data
        const newSearch = search

        if (!newSearch) {
            return newData
        }
        //poisk anel yst anuni,azganuni,emaili
        return data.filter(item => {
            return item['firstName'].toLowerCase().includes(newSearch.toLowerCase())
            || item['lastName'].toLowerCase().includes(newSearch.toLowerCase())
                || item['email'].toLowerCase().includes(newSearch.toLowerCase())
        })
    }

    //usernerin stanalu hmara erku haseyov vorov vor uzum enq
    const onSelect = url => {
        setIsModeSelected(true)
        setLoading(true)
        fetchedData(url)
    }

    //usernerin dasvorel tarber ejerum
    const onRowSelect = (row) => {
        setRow(row)
    }

    //yntrel ejy
    const handlePageClick = ({selected}) => {
        setCurrentPage(selected)
    }
    const pageSize = 10
    const pageCount = data.length / 10
    const filteredData = getFilteredData()
    const displayData = _.chunk(filteredData, pageSize)[currentPage];

    //ete hascen chenq yntre vorov enq uzum usernerin cuych ta cuych ta yntrelu dahty
    if (!isModeSelected) {
        return (
            <div className="container">
                <ModeSelector onSelect={onSelect}/>
            </div>
        )
    }

    return (
        <div className="container">
            {

                loading
                    ? <Loader/>
                    :
                    <React.Fragment>
                        <TableSearch
                            onSarch={onSearch}
                        />
                        <Table
                            onSort={onSort}
                            data={displayData}
                            sort={sort}
                            sortField={sortField}
                            onRowSelect={onRowSelect}
                        />
                    </React.Fragment>


            }

            {
                data.length > pageSize ?

                    <ReactPaginate
                        previousLabel={'<'}
                        nextLabel={'>'}
                        breakLabel={'...'}
                        breakClassName={'break-me'}
                        pageCount={pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={handlePageClick}
                        containerClassName={'pagination'}
                        activeClassName={'active'}
                        pageClassName='page_item'
                        pageLinkClassName='page-link'
                        previousClassName={'page-item'}
                        nextClassName={'page-item'}
                        previousLinkClassName={'page-link'}
                        nextLinkClassName={'page-link'}
                        forcePage={currentPage}
                    /> : null
            }

            {
                row ? <DetailRowView person={row}/> : null
            }
        </div>
    );
}

export default App;
