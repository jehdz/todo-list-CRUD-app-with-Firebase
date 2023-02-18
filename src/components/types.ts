
// reducer types
type Item = {
    id: string,
    title: string,
    status: string,
}

export type State = Item[]

export type ActionType = {
    type: string,
    payload: Item
}

// dispatch function types

export type HandleSubmitType = {
    (id:string, title: string, status: string): void
 }

//context types

export type ValueProp = {
    elementWidth: number | null
    setElementWidth: React.Dispatch<React.SetStateAction<number | null>>
    state: State
    handleSubmit: HandleSubmitType
}

export type ContextProp = {
    children: React.ReactNode
} 