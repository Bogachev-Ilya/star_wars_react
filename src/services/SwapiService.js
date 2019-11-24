import React, {Component} from 'react'

export  default class SwapiServer extends Component{

    _apiBase = 'https://swapi.co/api'
    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Could not fetch api ${this._apiBase}${url} ` + `resieved ${res.status}`)
        }
        return await res.json();
    }

    async getAllPeople() {
        const res = await this.getResource(`/people/`);
        return res.results;
    }

    getPerson(id) {
        return this.getResource(`/people/${id}/`)
    }

    async getAllPlanet() {
        const res = await this.getResource(`/planets/`);
        return res.results;
    }

    getPlanet(id) {
        return this.getResource(`/planets/${id}/`)
    }

    async getAllStarShips() {
        const res = await this.getResource(`/starships/`);
        return res.results;
    }

    getStarShip(id) {
        return this.getResource(`/starships/${id}/`)
    }
}

const swapi = new SwapiServer();
swapi.getPerson(12).then((p)=>{
    console.log(p.name)
})

