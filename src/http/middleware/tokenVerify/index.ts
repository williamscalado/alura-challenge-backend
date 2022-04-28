import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const isAuthenticatedVeryfi = (req: Request, res: Response, next: NextFunction) => {

    try {
        const token: string | any = req.headers['x-access-token'];
        if (!token) throw 'Token is not valid!'
        const tokenVerify = jwt.verify(token, `${process.env.PRIVATEKEY}`)
        if (!tokenVerify) throw 'Expired token!'
        next()
    } catch (error) {
        res.status(401).json({
            tokenError: true,
            error
        })
    }

}