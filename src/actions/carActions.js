export const ADD = 'ADD';
export const REMOVE = 'REMOVE';
export const UPDATE = 'UPDATE';

export const addFeature = (feature) =>{
    return{
        type: ADD,
        payload: feature
    }
}

export const removeFeature = (feature) =>{
    return {
        type: REMOVE,
        payload: feature
    }
}

export const updateTotal = (total) => {
    return {
        type: UPDATE,
        payload: total
    }
}