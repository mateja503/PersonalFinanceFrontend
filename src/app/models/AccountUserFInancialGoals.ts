import { AccountUser } from "./AccountUser"
import { FinancialGoals } from "./FinancialGoals"

export interface AccountUserFinancialGoals
{
    id: number
    accountUser: AccountUser
    accountUserId: number
    financialGoal: FinancialGoals
    financialGoalId: number

}