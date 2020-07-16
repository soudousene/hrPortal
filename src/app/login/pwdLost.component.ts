import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService } from './authentication.service';



@Component({ templateUrl: 'pwdLost.html' })
export class PwdLostComponent implements OnInit {
    lostpwdForm: FormGroup;
    loading = false;
    submitted = false;
    error = '';

    constructor(private formBuilder: FormBuilder,
        private authenticationService: AuthenticationService)
    {}

    ngOnInit() {
        this.lostpwdForm = this.formBuilder.group({
            email: ["", Validators.compose([Validators.required, Validators.email])]
        });

        // get return url from route parameters or default to '/'
    }

    // convenience getter for easy access to form fields
    get f() { return this.lostpwdForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.lostpwdForm.invalid) {
            return;
        }

        //this.loading = true;
    }
}
