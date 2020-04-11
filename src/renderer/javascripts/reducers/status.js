export default (state = null, action) => {
    switch (action.type) {
        case 'SET_STATUS_OK':
            return 'ok'
        case 'SET_STATUS_ERROR':
            return 'error'
        default:
            return state
    }
}
