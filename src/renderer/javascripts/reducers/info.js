export default (state = null, action) => {
    switch (action.type) {
        case 'SET_VERSION':
            return action.data.version
        case 'SET_INFO':
            return action.data
        default:
            return state
    }
}
