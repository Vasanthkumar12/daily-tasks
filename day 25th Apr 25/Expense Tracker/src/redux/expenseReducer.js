import { ADD_EXPENSE, SET_BUDGET } from "./actionTypes"

const initialState = {
    total_budget: 0,
    total_expense: 0,
    remaining: 0,
    expenses: []
}

export const expenseReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_BUDGET:
            return { ...state, total_budget: action.payload, remaining: action.payload }
        case ADD_EXPENSE:
            return { ...state, total_expense: total_expense + action.payload }
        default:
            return state
    }
}