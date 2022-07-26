import axios from 'axios';
export const FETCH_COUNTRIES = 'FETCH_COUNTRIES'
export const SEARCH_COUNTRIES = 'SEARCH_COUNTRIES'
export const ORDER_ALPHABETICAL = 'ORDER_ALPHABETICAL'
export const ORDER_POPULATION = 'ORDER_POPULATION'
export const ORDER_BY_CONTINENT = 'ORDER_BY_CONTINENT'
export const GET_ACTIVITIES = 'GET_ACTIVITIES'
export const BY_ACTIVITY = 'BY_ACTIVITY'

export function fetchCountries(){
    return function(dispatch){
        axios.get(`/countries`)
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
        axios.get(`/countries?name=${search}`)
        .then((countries) => {
            dispatch({  
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

export function getActivities(){
    return async function (dispatch){
        const respuesta = await axios.get('/activities');
        return dispatch({
            type: GET_ACTIVITIES,
            payload: respuesta.data
        })
    }
}

export function byActivity(activity){
    return {
        type: BY_ACTIVITY,
        payload: activity,
    }
}