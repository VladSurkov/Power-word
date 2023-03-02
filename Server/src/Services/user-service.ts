import bcrypt from 'bcrypt'; // hash password
import { v4 as uuidv4 } from 'uuid'; // link generation
import UserDto from "../dtos/user-dto";
import ApiError from '../Exceptions/api-error';

// Models 
import userModel from "../Models/user-model";

// Services
import mailService from "./mail-service";
import tokenService from "./token-service";

class UserService {
    async registration (email: string, password: string) {
        const candidate = await userModel.findOne({ email });
        
        if (candidate) {
            throw ApiError.BadRequest(`A user with a ${email} postal address already exists`);
        };

        const hashPassword = await bcrypt.hash(password, 3);
        const activationLink = uuidv4();

        const user = await userModel.create({ email, password: hashPassword, activationLink });
        await mailService.sendActivationMail(email, `${process.env.API_URL}/api/activate/${activationLink}`);

        const userDto = new UserDto(user); // id email isActivated
        const tokens = tokenService.generateTokens({...userDto});
        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return { ...tokens, user: userDto }
    }

    async activate (activationLink: string) {   
        const user = await userModel.findOne({ activationLink });

        if (!user) {
            throw ApiError.BadRequest('Incorrect activation link');
        }

        user.isActivated = true;
        await user.save();
    }

    async login (email: string, password: string) {
        const user = await userModel.findOne({ email });

        if (!user) {
            throw ApiError.BadRequest('User with this email was found');
        }

        const isPasswordEqual = await bcrypt.compare(password, user.password);

        if (!isPasswordEqual) {
            throw ApiError.BadRequest('Incorrect password');
        }

        const userDto = new UserDto(user);
        const tokens = await tokenService.generateTokens({ ...userDto });
        await tokenService.saveToken(userDto.id, tokens.refreshToken);
        return { ...tokens, user: userDto }
    }

    async logout (refreshToken: string) {
        const token = await tokenService.removeToken(refreshToken);
        return token;
    }

    async refresh (refreshToken: string) {
        if (!refreshToken) {
            throw ApiError.UnauthorizedError();
        }

        const userData = tokenService.validateRefreshToken(refreshToken);
        const tokenFromDb = await tokenService.findToken(refreshToken);

        if (!userData || !tokenFromDb) {
            throw ApiError.UnauthorizedError();
        }

        const user = await userModel.findById(userData.id);
        const userDto = new UserDto(user);
        const tokens = await tokenService.generateTokens({ ...userDto });
        await tokenService.saveToken(userDto.id, tokens.refreshToken);
        return { ...tokens, user: userDto }
    }

    async getAllUsers () {
        const users = await userModel.find();
        return users;
    }
}

export default new UserService();