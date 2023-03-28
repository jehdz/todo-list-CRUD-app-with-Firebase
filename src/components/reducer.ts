import { State } from "./types"
import { ActionType } from "./types"


export const reducer = ( state: State, action: ActionType) : State => {

    switch(action.type) {

        case 'CREATE_NEW_TODO' :      
            const { payload } = action;       
            const { id, title, completed } = payload;
            if(!title) {
              return state;
            }
            
            return [...state, { id, title, completed }]

        case 'HANDLE_STATE_FILTER':
            const filtered = state.filter(item => item.completed === action.payload.completed);
            return [...filtered];  
       
        case 'HANDLE_DISPLAY_ALL':
            return state

        case 'HANDLE_DELETE':
            return state.filter( item => item.id !== action.payload.id )

        case 'HANDLE_COMPLETE':
            return state.map(item => {
                if(item.id === action.payload.id) {
                  console.log(action.payload.completed, action.payload.id)
                  return { ...item, completed: !action.payload.completed }
                }
                else {
                    return item
                }
            })
        case "HANDLE_CLEAR_COMPLETED":
            return state.filter(item => item.completed === false)
    }

        throw new Error( 'no matching type')
}

