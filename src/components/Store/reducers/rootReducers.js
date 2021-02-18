
const initialState = {
    count: 0
}

function rootReducer(state = initialState, action){

    switch(action.type){

        case 'ADD':{
            return{
                count: state.count + 1
            }
        }

        case 'SUB':{
            return{
                count: state.count - 1
            }
        }

        case 'CLR':{
            return{
                count: state.count * 0
            }
        }

        default: return state
    }


    return initialState
}

export default rootReducer;