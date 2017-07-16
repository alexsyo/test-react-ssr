import axios from 'axios';

export const fetchStart = () => {
    return {
        type: 'FETCH_START'
    }
};

export const fetchSuccess = (response) => {
    return {
        type: 'FETCH_SUCCESS',
        data: response.data
    }
};

export const fetchFailed = (error) => {
    return {
        type: 'FETCH_FAILED',
        error
    }
};

export const fetch = (url) => {
    return (dispatch) => {

        dispatch(fetchStart());

        axios.get(url)
            .then((response) => {
                dispatch(fetchSuccess(response))
            })
            .catch((error) => {
                dispatch(fetchFailed(error))
            });

    };
}