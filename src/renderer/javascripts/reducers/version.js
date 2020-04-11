export default (state = null, action) => {
    switch (action.type) {
        case 'SET_VERSION':
            return action.data.version
        default:
            return state
    }
}
