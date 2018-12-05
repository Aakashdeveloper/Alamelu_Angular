import { Component } from '@angular/core';
import { Employee } from '../models/employee.model';
import { NgForm } from '@angular/forms';
import { FormPosterService } from '../services/formPoster.Service';

@Component({
    selector: 'app-forms',
    templateUrl: './customerForms.component.html'
})

export class CustomerFormComponent {
    languages: any[] = ['NodeJs', 'ReactJs', 'AngularJS', 'GO'];
    hasCodeLangError: Boolean = false;
    model = new Employee('John', 'Andrew', 'a@a.com', true, 'male', 'NodeJs');

    constructor(private _formPoster: FormPosterService) {}

    firstToUpper(value: string): void {
        if (value.length > 0) {
            this.model.firstName = value.charAt(0).toUpperCase() + value.slice(1);
        } else {
            this.model.firstName = value;
        }
    }

    validateCodelang(event): void {
        if (this.model.codelang === 'default') {
            this.hasCodeLangError = true;
        } else {
            this.hasCodeLangError = false;
        }
    }

    submitForm(form: NgForm): void {
        // console.log(form.value);
        this._formPoster.postEmployee(form.value)
            .subscribe((data) => console.log('success', data));
    }

}




/*
ng-pristine    ng-untouched  ng-valid
ng-dirty       ng-touched   ng-invalid

*/
