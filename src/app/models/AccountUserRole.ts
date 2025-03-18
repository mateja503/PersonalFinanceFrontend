import { AccountUser } from "./AccountUser"
import { Role } from "./Role"

export interface AccountUserRole
{
    id: number
    accountUser: AccountUser
    accountUserId: number
    role: Role
    roleId: number
}