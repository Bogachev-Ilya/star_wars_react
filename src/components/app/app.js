import React from 'react'

import './app.css'
import Header from "../header/header";
import RandomPlanet from "../randomPlanet/randomPlanet";
import ItemList from "../itemList/itemList";
import PersonData from "../personData/personData";

const App = () =>{
    return(
        <div>
            <Header />
            <RandomPlanet />
            <div className="row mb-2">
                <div className="col-md-6">
                    <ItemList />
                </div>
                <div className='col-md-6'>
                    <PersonData />
                </div>
            </div>
        </div>
    )
};

export default App;