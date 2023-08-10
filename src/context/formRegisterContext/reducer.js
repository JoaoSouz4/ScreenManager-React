import * as Actions from './actions';

export function reducer(state, actions){
    switch(actions.type){
        case Actions.UPDATE_NAME: {
            return{...state, name: actions.payload.data}
        }
        case Actions.UPDATE_BRAND: {
            return{...state, brand: actions.payload.data}
        }
        case Actions.UPDATE_PRICE_PARALLEL: {
            return{...state, prices: {...state.prices, parallel: actions.payload.data}}
        }
        case Actions.UPDATE_PRICE_MEDIUM: {
            return{...state, prices: {...state.prices, medium: actions.payload.data}}
        }

        case Actions.UPDATE_PRICE_FIRST_LINE: {
            return{...state, prices: {...state.prices, firstLine: actions.payload.data}}
        }

        case Actions.UPDATE_DESCRIPTION: {
            return{...state, description: actions.payload.data}
        }

        case Actions.IS_FETCHING: {
            return{...state, isFetching: actions.payload.data}
        }

        case Actions.RESET_FORM: {
            return{
                name: '',
                brand: '',
                prices: {
                    parallel: '',
                    medium: '',
                    firstLine: '',
                },
                description: '',
            }
        }
    }
}
