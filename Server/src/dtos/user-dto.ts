export default class UserDto {
    username: string;
    email: string;
    id: string;
    isActivated: boolean;

    constructor (model: any) {
        this.username = model.username;
        this.email = model.email;
        this.id = model._id;
        this.isActivated = model.isActivated;
    }
}