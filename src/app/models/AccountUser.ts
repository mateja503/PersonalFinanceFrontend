import { AccountUserBudget } from "./AccountUserBudget"
import { AccountUserFinancialGoals } from "./AccountUserFInancialGoals"
import { Auth } from "./Auth"
import { Role } from "./Role"

export interface AccountUser
{

    Id: number
    name: string
    surname: string
    email: string
    amount: number
    roles: Role[]
    accountUserFinancialGoalList: AccountUserFinancialGoals[]
    auth: Auth
    accountUserBudgetList: AccountUserBudget[]
}