import { AccountUser } from "./AccountUser"
import { RoleEnum } from "./enumiration/RoleEnum"

export interface Role
{

    id: number
    userRole: RoleEnum
    accountUsersList: AccountUser[]
}