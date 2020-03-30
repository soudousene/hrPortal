import { Component, OnInit, Inject } from '@angular/core';
import { Absence } from './Absence.Mod';
import { AbsenceService } from './Absence.Serv';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AllEnums } from '../Enumerations';


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
            this.windowTitle = "Liste des entr�es";
    });
    }

    onAddOrEditItem(index, absenceId) {

        if (index === null) {
            this.formData = new Absence();
            this.windowTitle = "Creation d'une nouvelle entr�e";
        }
        else {
            this.formData = this.absenceList[index];
            this.windowTitle = "Creation d'une entrée";
        }
        this.viewState = 'creationEditMode';
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
        this.windowTitle = "D�tails";
    }

    onSubmit(form: NgForm) {
        this.refreshList();
    }

    onReset(){
        this.refreshList();
    }
}