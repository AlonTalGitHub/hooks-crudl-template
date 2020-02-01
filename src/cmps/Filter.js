import React from 'react';

export default function Filter(props) {

    const handleChange = (ev) => {
        let { name, value } = ev.target
        value = (ev.target.type === 'number') ? +value : value;
        props.onFilter({ [name]: value })
    }

    return (
        <div className="search-line">
            <input
                type="text"
                placeholder="Search"
                value={props.filterBy}
                onChange={handleChange} name="term" />
        </div>
    );
}


