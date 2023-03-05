import $api from "../API";
import { AxiosResponse } from "axios";
import { AuthResponse } from "../Models/Response/AuthResponse";

export default class AuthService {
    static async login (email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/login', {email, password});
    };

    static async registration (email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/registration', {email, password});
    };

    static async logout (): Promise<void> {
        return $api.post('/logout');
    };
}