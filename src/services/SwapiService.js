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
        const people = await this.getResource(`/people/`);
        return people.results.map(this._transformPerson(people));
    }

    async getPerson(id) {
        const person = await this.getResource(`/people/${id}/`);
        return this._transformPerson(person)
    }

    async getAllPlanet() {
        const planet = await this.getResource(`/planets/`);
        return planet.results.map(this._transformPlanet(planet));
    }

    async getPlanet(id) {
        const planet = await this.getResource(`/planets/${id}/`);
        return this._transformPlanet(planet);
    }

    async getAllStarShips() {
        const startShip = await this.getResource(`/starships/`);
        return startShip.results.map(this._transformStarship(startShip));
    }

    async getStarShip(id) {
        const starShip = await this.getResource(`/starships/${id}/`)
        return this._transformStarship(starShip);
    }

    _extractId(item){
        const idRegEx =/\/([0-9]*)\/$/;
        return  item.url.match(idRegEx)[1];
    }

    _transformPlanet(planet){
        return{
            id:this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    }

    _transformStarship(starship){
        return{
            id:this._extractId(starship),
            name:starship.name,
            model:starship.model,
            manufacturer:starship.manufacturer,
            constInCredits:starship.constInCredits,
            length:starship.length,
            crew:starship.crew,
            passengers:starship.passengers
        }
    }

    _transformPerson(person){
        return{
            id:this._extractId(person),
            name:person.name,
            gender:person.gender,
            birthYear:person.birthYear,
            eyeColor:person.eyeColor
        }
    }
}

const swapi = new SwapiServer();
swapi.getPerson(12).then((p)=>{
    console.log(p.name)
})

