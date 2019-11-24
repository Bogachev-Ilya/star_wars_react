import React, {Component} from 'react'

import './itemList.css'

export default class ItemList extends Component {
    render() {
        return(
            <ul className='item-list list-group'>
                <li className='list-group-item'>Luke</li>
                <li className='list-group-item'>Dart</li>
                <li className='list-group-item'>R2D2</li>
            </ul>
        )
    }
};
