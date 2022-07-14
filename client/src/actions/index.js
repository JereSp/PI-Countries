import axios from 'axios';
export const FETCH_COUNTRIES = 'FETCH_COUNTRIES'
export const SEARCH_COUNTRIES = 'SEARCH_COUNTRIES'
export const ORDER_ALPHABETICAL = 'ORDER_ALPHABETICAL'
export const ORDER_POPULATION = 'ORDER_POPULATION'
export const ORDER_BY_CONTINENT = 'ORDER_BY_CONTINENT'

export function fetchCountries(){
    return function(dispatch){
        axios.get('http://localhost:3001/countries')
        .then((countries) => {
            dispatch({  //redux thunk nos da esto para funciones asincronicas en las actions :O :O
                type: FETCH_COUNTRIES,
                payload: countries.data
            })
        })
    }
}

export function searchCountries(search){
    return function(dispatch){
        axios.get(`http://localhost:3001/countries?name=${search}`)
        .then((countries) => {
            dispatch({  //redux thunk nos da esto para funciones asincronicas en las actions :O :O
                type: SEARCH_COUNTRIES,
                payload: countries.data
            })
        })
    }
}

export function orderAlphabetical(order){
    return {
        type: ORDER_ALPHABETICAL,
        payload: order, 
    }
}

export function orderPopulation(order){
    return {
        type: ORDER_POPULATION,
        payload: order,
    }
}

export function orderByContinent(continent){
    return {
        type: ORDER_BY_CONTINENT,
        payload: continent
    }
}