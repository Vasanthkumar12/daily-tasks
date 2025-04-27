import { SET_BUDGET } from "./actionTypes"

export const setTotalBudget = (budget) => {
    return {
        type: SET_BUDGET, payload: budget
    }
}