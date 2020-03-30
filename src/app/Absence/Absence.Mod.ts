import * as enums_ from '../Enumerations';

export class Absence {
	absenceId: string;
	userId: string;
	absenceTypeEnum: number;
	startDate: Date;
	startPartOfDay: number;
	endDate: Date;
	endPartOfDay: number;
	validationStatus: number;
	requesterComment: string;
	managerComment: string;
	isEditable: boolean;
}
