import { State } from "./types"
import { ActionType } from "./types"

export const reducer = ( state: State, action: ActionType) : State => {
    throw new Error( 'no matching type')
}

