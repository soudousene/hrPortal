import { Component, OnInit, Inject } from '@angular/core';
import { Absence } from './Absence.Mod';
import { AbsenceService } from './Absence.Serv';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AllEnums } from '../Enumerations';
import { User } from '../User/User.Mod'
import{ BehaviorSubject } from 'rxjs'


@Component({
    selector: 'app-Absence',
    templateUrl: './Absence.View.AddEdit.html',
    styles: []
})

export class AbsenceComponent implements OnInit
{
    absenceList;
    formData: Absence;
	viewState: string = 'tableMode';
    windowTitle: string;


    constructor(
        public allEnums : AllEnums,
		@Inject(MAT_DIALOG_DATA) public data,
        private service: AbsenceService,
            private router: Router,
                private toastr: ToastrService)
    {
        if (this.data.absenceIndex == null)
        this.formData = new Absence()
        else {
            this.formData = Object.assign({}, this.absenceList[this.data.absenceIndex]);
        }
    }

    ngOnInit() {
        this.refreshList();
    }

    refreshList() {
        this.service.getAbsenceList().then(res => {
            this.absenceList = res as Absence[];
            this.viewState = 'tableMode';
            this.windowTitle = "Liste des entrées";
    });
    }

    onAddOrEditItem(index, absenceId) {
        if (index === null) { 
            this.formData = new Absence()
			this.viewState = 'creationMode'
            this.windowTitle = "Création d'une nouvelle entrée"
        }
        else {
            this.formData = this.absenceList[index]
			this.viewState = 'editMode'
            this.windowTitle = "Edition d'une entrée"
        }
		var currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser'))) 
		this.formData.userId = currentUserSubject.value.userId
    }

    onDeleteItem(absenceId: string, index: number) {
        if (confirm('Are you sure to delete this record?')) {
            //this.service.deleteAbsence(id).then(res => {
            //    this.refreshList();
            //    this.toastr.warning("Deleted Successfully", "Restaurent App.");
            //});
        }
    }

    onShowDetails(index){
        this.formData = this.absenceList[index];
        this.viewState = 'detailsMode';
        this.windowTitle = "Détails";
    }

    onSubmit(form: NgForm) {
		var isPostRequest : boolean = true
		this.viewState === 'creationMode' ? isPostRequest = true : isPostRequest = false
		this.service.saveOrUpdateAbsence(this.formData, isPostRequest).then(
			() => this.refreshList()
        )
    }

    onReset(){
        this.refreshList();
    }
}