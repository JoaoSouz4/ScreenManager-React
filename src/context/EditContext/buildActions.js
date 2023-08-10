import * as actions from './actions';

export const buildActions = (dispatch) => {
    return {
        updateName: (data) => {dispatch({type: actions.UPDATE_NAME, payload: {data: data}})},
        updateBrand: (data) => {dispatch({type: actions.UPDATE_BRAND, payload: {data: data}})},
        updatePriceParallel: (data)=>{dispatch({type: actions.UPDATE_PRICE_PARALLEL, payload: {data: data}})},
        updatePriceMedium: (data)=>{dispatch({type: actions.UPDATE_PRICE_MEDIUM, payload: {data: data}})},
        updatePriceFirstLine: (data)=>{dispatch({type: actions.UPDATE_PRICE_FIRST_LINE, payload: {data: data}})},
        updateDescription: (data)=>{dispatch({type: actions.UPDATE_DESCRIPTION, payload: {data: data}})},
        isFetching: (data) => {dispatch({type: actions.IS_FETCHING, payload: {data: data}})},
        resetForm: () => {dispatch({type: actions.RESET_FORM})},
        updateAll: (data) => {dispatch({type: actions.UPDATE_ALL, payload: {data: data}})}
    }
}