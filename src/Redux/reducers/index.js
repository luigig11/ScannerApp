const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_QRLIST':
            return {
                ...state,
                QrString: [...state.QrString, action.payload]
            }
        case 'SET_SCANNED':
            return {
                ...state,
                scanned: action.payload
            }
        case 'SET_FOCUS':
            return {
                ...state,
                focus: action.payload
            }
        case 'SET_HASPERMISSION':
            return {
                ...state,
                hasPermission: action.payload
            }
        case 'SET_QUERY':
            return {
                ...state,
                query: action.payload
            }
        case 'SET_FILTEREDLIST':
            return {
                ...state,                
                filteredList: state.QrString.filter((data) =>{
                    return data.toLowerCase().includes(action.payload.toLowerCase())
                } )
                
            } 
        default:
            return state;
    }
}

export default reducer;