const errorMiddleware = (store) => (next) => (action) => {
    try {
        next(action);
    } catch(e) {
        console.log(e);
    }
}

export default errorMiddleware;