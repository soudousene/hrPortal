import { Component, OnInit, Inject } from '@angular/core';
import { Department } from './Department.Mod';
import { DepartmentService } from './Department.Serv';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AllEnums } from '../Enumerations';


@Component({
    selector: 'app-Department',
    templateUrl: './Department.View.AddEdit.html',
    styles: []
})

export class DepartmentComponent implements OnInit
{
    departmentList;
    formData: Department;
	viewState: string = 'tableMode';
    windowTitle: string;


    constructor(
        public allEnums : AllEnums,
		@Inject(MAT_DIALOG_DATA) public data,
        private service: DepartmentService,
            private router: Router,
                private toastr: ToastrService)
    {
        if (this.data.departmentIndex == null)
        this.formData = new Department()
        else {
            this.formData = Object.assign({}, this.departmentList[this.data.departmentIndex]);
        }
    }

    ngOnInit() {
        this.refreshList();
    }

    refreshList() {
        this.service.getDepartmentList().then(res => {
            this.departmentList = res as Department[];
            this.viewState = 'tableMode';
            this.windowTitle = "Liste des entrées";
    });
    }

    onAddOrEditItem(index, departmentId) {
        if (index === null) { 
            this.formData = new Department()
			this.viewState = 'creationMode'
            this.windowTitle = "Création d'une nouvelle entrée"
        }
        else {
            this.formData = this.departmentList[index]
			this.viewState = 'editMode'
            this.windowTitle = "Edition d'une entrée"
        }
		
    }

    onDeleteItem(departmentId: string, index: number) {
        if (confirm('Are you sure to delete this record?')) {
            //this.service.deleteAbsence(id).then(res => {
            //    this.refreshList();
            //    this.toastr.warning("Deleted Successfully", "Restaurent App.");
            //});
        }
    }

    onShowDetails(index){
        this.formData = this.departmentList[index];
        this.viewState = 'detailsMode';
        this.windowTitle = "Détails";
    }

    onSubmit(form: NgForm) {
		var isPostRequest : boolean = true
		this.viewState === 'creationMode' ? isPostRequest = true : isPostRequest = false
		this.service.saveOrUpdateDepartment(this.formData, isPostRequest).then(
			() => this.refreshList()
        )
    }

    onReset(){
        this.refreshList();
    }
}