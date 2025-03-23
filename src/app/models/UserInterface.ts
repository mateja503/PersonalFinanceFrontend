import { AccountUserBudget } from "./AccountUserBudget"
import { AccountUserFinancialGoals } from "./AccountUserFInancialGoals"
import { AccountUserRole } from "./AccountUserRole"
import { Auth } from "./Auth"
import { Role } from "./Role"

export interface UserInteface 
{
    name:string
    surname:string
    email:string
    amount:number
    roles:AccountUserRole[]
    accountUserFinancialGoalList: AccountUserFinancialGoals[]
    userAuthentication: Auth
    accountUserBudgetList: AccountUserBudget[]
}