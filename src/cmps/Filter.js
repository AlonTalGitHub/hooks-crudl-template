import React from 'react';

export default function ContactFilter(props) {


    return (
        <div className="search-line">
            <input
                placeholder="Search"
                value={props.filterBy.term}
                onChange={props.onFilterChange} name="term" 
                />
        </div>
    );
}


