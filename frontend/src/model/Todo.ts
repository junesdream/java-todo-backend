
export type Todo = {
    id: string,
    description: string,
    status: "OPEN" | "IN_PROGRESS" | "DONE"
}

export type NewTodo = {
    description: string,
    status: "OPEN"
}