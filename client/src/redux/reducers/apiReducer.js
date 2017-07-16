const initialState = {
    isFetching: false,
    data: null,
    error: null
};

const apiReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_START':
            state = { ...state, isFetching: true, data: null };
            break;
        case 'FETCH_SUCCESS':
            state = { ...state, isFetching: false, data: action.data };
            break;
        case 'FETCH_FAILED':
            state = { ...state, isFetching: false, error: action.error };
            break;
        default:
            break;
    }

    return state;
}

export default apiReducer;