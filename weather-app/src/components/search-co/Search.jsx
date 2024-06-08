import React, { useState } from 'react'
import { AsyncPaginate } from "react-select-async-paginate";
import { options, url } from '../../api'
import './Search.css'


const Search = ({onSeachChange}) => {

    const [search, setSearch] = useState(null);
    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSeachChange(searchData);
    }

    const loadOptions = (inputValue) => {
        return 
    }

    return (
        <div>
            <AsyncPaginate
                placeholder="Search for city"
                debounceTimeout={600}
                value={search}
                onChange={handleOnChange}
                loadOptions={loadOptions}
            />
        </div>
    )
}

export default Search