
// reducer types
type Item = {
    id?: string,
    title?: string,
    status?: boolean,
    e?: React.FormEvent<HTMLFormElement>
}


export type State = Item[]

type ActionWithPayload = {
    type: string,
    payload: Item
}

type ActionWithoutPayload = {
    type: 'HANDLE_DISPLAY_ALL' | 'HANDLE_CLEAR_COMPLETED' //why can't this also accept type string? This is because gibing it a specific type 
    // tells TypeScript that the action with the type 'HANDLE_DISPLAY_ALL' should not have a payload
}

export type ActionType = ActionWithPayload | ActionWithoutPayload

// dispatch function types

export type HandleSubmitType = {
    ( title: string, status: boolean): void
 }

export type HandleFilter = {
    ( status: boolean): void
}

export type HandleDisplayAll = {
    (): void
}

export type HandleDelete = {
    (id: string): void
}

export type HandleComplete = {
    (id: string): void
}

export type HandleClearCompleted = {
    (): void
}

//context types

export type ValueProp = {
    // dark mode/ light mode
    theme:string
    setTheme:(theme: string) => {}
    elementWidth: number | null
    setElementWidth: React.Dispatch<React.SetStateAction<number | null>>
    state: State
    handleSubmit: HandleSubmitType
    handleStateFilter: HandleFilter
    handleDelete: HandleDelete
    handleComplete: HandleComplete
    handleClearCompleted: HandleClearCompleted;
}

export type ContextProp = {
    children: React.ReactNode
} 

