export const initalState = {
    total: 0,
    meals: []
}

const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD": 
            return {
                ...state,
                meals: action.payload
            }
        case "REMOVE":
            return {
                ...state,
                meals: action.payload
            }
        case "UPDATE_PRICE":
            return {
                ...state,
                total: action.payload
            }
        default: throw Error("Cannot match cases in reducer")
    }
}

export default cartReducer 