import { AccountUserFinancialGoals } from "./AccountUserFInancialGoals"

export interface FinancialGoals
{

    id?: number
    goalText: string
    goalReachInTime: string
    amountGoal: number
    accountUserFinancialGoalsList?: AccountUserFinancialGoals[]
    year?: number
    month?: number
    

}