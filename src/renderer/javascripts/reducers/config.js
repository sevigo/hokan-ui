export default (state = null, action) => {
    switch (action.type) {
        case 'CONFIG_ADD_DIR':
            return action.data
        case 'CONFIG_DIR_MENU':
            return { scope: 'dir' }
        case 'CONFIG_TARGET':
            return { scope: 'target' }
        default:
            return state
    }
}
