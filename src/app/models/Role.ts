import { AccountUser } from "./AccountUser"
import { RoleEnum } from "./enumiration/RoleEnum"

export interface Role
{

    Id: number
    userRole: RoleEnum
    accountUsersList: AccountUser[]
}