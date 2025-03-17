import { AccountUser } from "./AccountUser"
import { Role } from "./Role"

export interface AccountUserRole
{
    Id: number
    accountUser: AccountUser
    accountUserId: number
    role: Role
    roleId: number
}