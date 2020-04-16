export default (state = { name: 'xxx' }, action) => {
    switch (action.type) {
        case 'FLOW_SETUP_DIR':
            console.log("trigger: FLOW_SETUP_DIR")
            return { ...state, name: 'setup:dir' }
        case 'FLOW_SETUP_TARGET':
            return { ...state, name: 'setup:target' }
        case 'FLOW_MAIN':
            return { ...state, name: 'main' }
        default:
            return state
    }
}
