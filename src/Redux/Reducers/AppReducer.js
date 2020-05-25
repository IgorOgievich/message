export const SET_LOADING = "Message/reducer/SET-LOADING";


const initialState = {
    loading: false
};

export const loading = () => {
    return {
        type: SET_LOADING,
        loading: false
    }
};


export const AppReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING:
            return {...state, loading: action.loading}
    }
    return state;
};