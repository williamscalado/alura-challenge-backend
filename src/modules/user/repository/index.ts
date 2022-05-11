import { IUser } from "../../../domain/user";
import { userDb } from "../repository/model";

const findById = async (id: number): Promise<IUser> => {
	await userDb.sync();
	const result = (await userDb.findByPk(id).then((data) => data)) as IUser;
	return result;
};

const getAllUsers = async (): Promise<any> => {
	await userDb.sync();
	const result = await userDb.findAll({
		where: {
			userLevel: 2,
		},
		attributes: {
			exclude: ["createdAt", "updatedAt", "password"],
		},
	});
	return result;
};

const findByEmail = async (email: string) => {
	try {
		await userDb.sync();
		const result = await userDb.findOne({
			where: {
				email: email,
			},
		});

		if (!result) return false;

		const Data: IUser = result.get();
		return Data;
	} catch (error: Error | any) {
		throw new Error(error?.message);
	}
};

const createUser = async (data: IUser) => {
	try {
		await userDb.sync();
		return userDb.create(data);
	} catch (error) {}
};
const updateUser = async (data: IUser, id: number) => {
	await userDb.sync();
	return await userDb.update(data, {
		where: {
			id: id,
		},
	});
};

export const userRepository = {
	createUser,
	findByEmail,
	getAllUsers,
	findById,
	updateUser,
};
