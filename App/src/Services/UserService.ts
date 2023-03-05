import $api from "../API";
import { AxiosResponse } from "axios";
import { IUser } from "../Models/IUser";

export default class UserService {
    static fetchUsers (): Promise<AxiosResponse<IUser[]>> {
        return $api.get<IUser[]>('/users');
    }
}