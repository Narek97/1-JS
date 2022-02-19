import React from 'react'
import './SearchPanel.css'

export class SearchPanel extends React.Component {

    render() {
        return (
            <div className="search-input">
                <input
                    type="text"
                    placeholder='search'
                    onChange={(e)=>this.props.onSearch(e.target.value)}

                />
            </div>
        )
    }
}




