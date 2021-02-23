import { object, string } from 'yup';

export const register = object().shape({
	name: string().trim().required(),
	email: string().required().email(),
	password: string().required().min(6),
});

export const login = object().shape({
	email: string().required().email(),
	password: string().required(),
});
