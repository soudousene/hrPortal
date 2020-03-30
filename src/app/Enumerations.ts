import{ Injectable } from '@angular/core'
@Injectable()
export class AllEnums{	AbsenceTypeEnum = [
	{ id: 0, name: 'Congé' },
	{ id: 1, name: 'RTT' },
	{ id: 2, name: 'Congé sans solde' },
	{ id: 3, name: 'Maladie' },
	{ id: 4, name: 'Naissance' },
	{ id: 5, name: 'Mariage/Pacs' },
	{ id: 6, name: 'Deces' }
]

	PartOfDayEnum = [
	{ id: 0, name: 'Matin' },
	{ id: 1, name: 'Midi' },
	{ id: 2, name: 'Après-midi' }
]

	ValidationStatus = [
	{ id: 0, name: 'Demande non soumise' },
	{ id: 1, name: 'Demande annulée' },
	{ id: 2, name: 'En attente de validation' },
	{ id: 3, name: 'Demande annulée' },
	{ id: 4, name: 'Demande rejetée' }
]

}