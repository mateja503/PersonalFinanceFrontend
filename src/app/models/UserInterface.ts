import { AccountUserBudget } from "./AccountUserBudget"
import { AccountUserFinancialGoals } from "./AccountUserFInancialGoals"
import { Auth } from "./Auth"
import { Role } from "./Role"

export interface UserInteface 
{
    name:string
    surname:string
    email:string
    amount:number
    roles:Role[]
    accountUserFinancialGoalList: AccountUserFinancialGoals[]
    userAuthentication: Auth
    accountUserBudgetList: AccountUserBudget[]
}