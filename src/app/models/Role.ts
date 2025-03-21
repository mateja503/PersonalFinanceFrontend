import { RoleEnum } from "./enumiration/RoleEnum"
import { UserInteface } from "./UserInterface"

export interface Role
{

    id: number
    userRole: RoleEnum
    accountUsersList: UserInteface[]
}