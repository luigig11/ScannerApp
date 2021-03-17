const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_LIST':
            return {
                ...state,
                scannedList: [state.scannedList]
            }
        case 'BEGIN_SCANN':
            return {
                ...state,
                scanned: true
            }
    
        default:
            return state;
    }
}

export default reducer;