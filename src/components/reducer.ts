import { State } from "./types"
import { ActionType } from "./types"

export const reducer = ( state: State, action: ActionType) : State => {

    switch(action.type) {

        case 'CREATE_NEW_TODO' :      
            const { payload } = action;       
            const { id, title, status } = payload;
            if(!title) {
              return state;
            }
            
            return [...state, { id, title, status }]

        case 'HANDLE_STATE_FILTER':
            const filtered = state.filter(item => item.title === action.payload.title);
            return [...filtered];  
       
        case 'HANDLE_DISPLAY_ALL':
            return state

        case 'HANDLE_DELETE':
            return state.filter( item => item.id !== action.payload.id )
    }

    throw new Error( 'no matching type')
}

