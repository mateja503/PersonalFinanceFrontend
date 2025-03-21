import { FinancialGoals } from "./FinancialGoals"
import { UserInteface } from "./UserInterface"

export interface AccountUserFinancialGoals
{
    id: number
    accountUser: UserInteface
    accountUserId: number
    financialGoal: FinancialGoals
    financialGoalId: number

}