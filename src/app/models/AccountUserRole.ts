import { Role } from "./Role"
import { UserInteface } from "./UserInterface"

export interface AccountUserRole
{
    id: number
    accountUser: UserInteface
    accountUserId: number
    role: Role
    roleId: number
}