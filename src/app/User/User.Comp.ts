import { Component, OnInit, Inject } from '@angular/core';
import { User } from './User.Mod';
import { UserService } from './User.Serv';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AllEnums } from '../Enumerations';


@Component({
    selector: 'app-User',
    templateUrl: './User.View.AddEdit.html',
    styles: []
})

export class UserComponent implements OnInit
{
    userList;
    formData: User;
	viewState: string = 'tableMode';
    windowTitle: string;


    constructor(
        public allEnums : AllEnums,
		@Inject(MAT_DIALOG_DATA) public data,
        private service: UserService,
            private router: Router,
                private toastr: ToastrService)
    {
        if (this.data.userIndex == null)
        this.formData = new User()
        else {
            this.formData = Object.assign({}, this.userList[this.data.userIndex]);
        }
    }

    ngOnInit() {
        this.refreshList();
    }

    refreshList() {
        this.service.getUserList().then(res => {
            this.userList = res as User[];
            this.viewState = 'tableMode';
            this.windowTitle = "Liste des entrées";
    });
    }

    onAddOrEditItem(index, userId) {

        if (index === null) {
            this.formData = new User();
            this.windowTitle = "Creation d'une nouvelle entrée";
        }
        else {
            this.formData = this.userList[index];
            this.windowTitle = "Creation d'une entrée";
        }
        this.viewState = 'creationEditMode';
    }

    onDeleteItem(userId: string, index: number) {
        if (confirm('Are you sure to delete this record?')) {
            //this.service.deleteAbsence(id).then(res => {
            //    this.refreshList();
            //    this.toastr.warning("Deleted Successfully", "Restaurent App.");
            //});
        }
    }

    onShowDetails(index){
        this.formData = this.userList[index];
        this.viewState = 'detailsMode';
        this.windowTitle = "Détails";
    }

    onSubmit(form: NgForm) {
        this.refreshList();
    }

    onReset(){
        this.refreshList();
    }
}