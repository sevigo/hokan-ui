export default (state = null, action) => {
    switch (action.type) {
        case 'GET_TARGET_FILE_LIST':
            return action.data.files
        default:
            return state
    }
}
