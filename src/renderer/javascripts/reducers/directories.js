export default (state = null, action) => {
    switch (action.type) {
        case 'GET_DIR_LIST':
            return action.data.files
        default:
            return state
    }
}
