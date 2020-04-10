import * as enums_ from '../Enumerations';

export class User {
	userId: string;
	firstName: string;
	lastName: string;
	password: string;
	role: string;
	managerId: string;
	departmentId: number;
	isEditable: boolean;
	token: string;
}
