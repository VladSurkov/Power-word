import { Request, Response, NextFunction } from 'express';
import ApiError from '../Exceptions/api-error';
import tokenService from '../Services/token-service';

export default function (req: any, res: Response, next: NextFunction) {
    try {
        const authorizationHeader = req.headers.authorization;

        if (!authorizationHeader) {
            return next(ApiError.UnauthorizedError());
        };

        const accessToken = authorizationHeader.split(' ')[1];

        if (!accessToken) {
            return next(ApiError.UnauthorizedError());
        };

        const userData = tokenService.validateAccessToken(accessToken);

        if (!userData) {
            return next(ApiError.UnauthorizedError());
        };

        req.user = userData;
        next();
    } catch (e) {
        return next(ApiError.UnauthorizedError());
    }
}