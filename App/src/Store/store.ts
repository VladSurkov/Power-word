import { makeAutoObservable } from "mobx";
import { IUser } from "../Models/IUser";
import AuthService from "../Services/AuthService";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Store {
    user= {} as IUser;
    isAuth = false;

    constructor () {
        makeAutoObservable (this);
    }

    setAuth(bool: boolean) {
        this.isAuth = bool;
    }

    setUser(user: IUser) {
        this.user = user;
    }

    async login (email: string, password: string) {
        try {
            const response = await AuthService.login(email, password);
            console.log(response);
            // await AsyncStorage.setItem('token', response.data.accessToken);
            // this.setAuth(true);
            // this.setUser(response.data.user);
        } catch (e) {
            console.error(e);
            // console.error(e.response?.data?.message);
        }
    }

    async registration (username: string, email: string, password: string) {
        const response = await AuthService.registration(username, email, password);
        console.log(response);
        // try {
        //     const response = await AuthService.registration(username, email, password);
        //     await AsyncStorage.setItem('token', response.data.accessToken);
        //     this.setAuth(true);
        //     this.setUser(response.data.user);
        // } catch (e: any) {
        //     console.log(e);
        // }
    }

    async logout () {
        try {
            const response = await AuthService.logout();
            await AsyncStorage.removeItem('token');
            this.setAuth(false);
            this.setUser({} as IUser);
        } catch (e: any) {
            console.log(e.response?.data?.message);
        }
    }
}