import { FETCH_COUNTRIES, ORDER_ALPHABETICAL, SEARCH_COUNTRIES, ORDER_POPULATION, ORDER_BY_CONTINENT, GET_ACTIVITIES, BY_ACTIVITY } from "../actions";

const initialState = {
    countries : [],
    filteredCountries: [],
    activities : [],
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case FETCH_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                filteredCountries: action.payload,
            }
        case SEARCH_COUNTRIES:
            return {
                ...state,
                filteredCountries: action.payload,
            }
        case ORDER_ALPHABETICAL:
            let orderedCountries = [...state.countries]
            orderedCountries = orderedCountries.sort((a, b) => {
                if (a.nombre < b.nombre){
                    return action.payload === "ascendente" ? -1 : 1;
                }
                if(a.nombre > b.nombre){
                    return action.payload === "ascendente" ? 1 : -1;
                }
                return 0
            })
            return {
                ...state,
                filteredCountries: orderedCountries,
            }
        case ORDER_POPULATION:
            let orderedPopulation = [...state.countries]
            orderedPopulation = orderedPopulation.sort((a, b) => {
                if(a.poblacion < b.poblacion) {
                    return action.payload === "ascendente" ? 1 : -1;
                }
                if(a.poblacion > b.poblacion){
                    return action.payload === "ascendente" ? -1 : 1;
                }
                return 0
            })
            return {
                ...state,
                filteredCountries: orderedPopulation,
            }
        case ORDER_BY_CONTINENT:
            let allCountries = [...state.countries]
            let filteredContinents = action.payload === "todos" ? allCountries :
            allCountries.filter((p) => p.continente === action.payload)
            return {
                ...state,
                filteredCountries: filteredContinents
            }
        case GET_ACTIVITIES:
            return {
                ...state,
                activities: action.payload,
            }
        case BY_ACTIVITY:
            const allCountriesActivities = state.countries;
            const filteredActivities = action.payload === "todas" ? allCountriesActivities.filter((p) => p.activities[0]?.nombre ?  p.activities[0] : false):
            allCountriesActivities.filter((p) => p.activities.some(({ nombre }) => nombre === action.payload))
            // p.activities.length > 0  ? p.activities.find(({ nombre }) => nombre === action.payload) : false) // tambien funciona 
            // allCountriesActivities.filter((p) => p.activities[0]?.nombre ?  p.activities[0].nombre === action.payload : false) // solo funciona con la primer actividad
            return {
                ...state,
                filteredCountries: filteredActivities
            }
        default:
            return state;
    }
}