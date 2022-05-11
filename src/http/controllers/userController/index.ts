import { Request, Response } from "express";
import { userUseCase } from "../../../modules/user/useCase";

const createUser = async (req: Request, res: Response) => {
	try {
		const { email, name } = req.body;
		if (!email || !name) {
			throw "Dados inválidos";
		}
		const data = {
			fullName: name,
			email,
		};
		await userUseCase.createUser(data);
		res.status(200).json({
			error: false,
			message: "Usuarios criado com sucesso",
		});
	} catch (error: Error | any) {
		res.status(400).json({
			error: true,
			message: error.message,
		});
	}
};
const updateUser = async (req: Request, res: Response) => {
	try {
		const idUser = req.params.id;

		const { email, name, password } = req.body;
		if (!email || !name) {
			throw "Dados inválidos";
		}
		const data = {
			fullName: name,
			email,
			password,
		};
		await userUseCase.updateUser(data, +idUser);
		res.status(200).json({
			error: false,
			message: "Usuarios atualizado com sucesso com sucesso",
		});
	} catch (error: Error | any) {
		res.status(400).json({
			error: true,
			message: error,
		});
	}
};

const getAllUsers = async (req: Request, res: Response) => {
	try {
		const result = await userUseCase.getAllUsers();
		res.status(200).json(result);
	} catch (error) {
		res.status(400).json({
			error: true,
			message: "Nenhum usuário encontrado",
		});
	}
};

export const userController = {
	createUser,
	getAllUsers,
	updateUser,
};
