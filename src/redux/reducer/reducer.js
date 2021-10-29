const reducer = (state = 'suit Up', action) => {
    switch(action.type) {
        case 'MUSICIANINFO':
            return {
                ...state, 
                musicianinfo: action.data,
            }
        default:
            return state;
    }
};

export default reducer;