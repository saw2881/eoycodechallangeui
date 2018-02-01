import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators, Validator } from '@angular/forms'
import { AuthService } from './services/auth.service'
import { IEmployeeRegistration } from './models/employee-registration.model'

@Component({
    templateUrl: 'app/employee-register.component.html',
    selector: 'employee-register'
})
export class EmployeeRegisterComponent implements OnInit {

    employeeName: FormControl
    employeeNumber: FormControl
    password: FormControl
    designation: FormControl
    serviceLine: FormControl
    role: FormControl
    signUpForm: FormGroup

    validEmployeeName?: Boolean
    validEmployeeNumber?: Boolean
    validPassword?: Boolean
    validDesignation?: Boolean
    validServiceLine?: Boolean
    validRole?: Boolean
    userAlreadyExists?: Boolean
    registrationSuccess?: Boolean

    constructor(private authService: AuthService) {

    }

    ngOnInit() {
        this.authService.logout();
        this.employeeName = new FormControl(null, Validators.required)
        this.employeeNumber = new FormControl(null, Validators.required)
        this.password = new FormControl(null, Validators.required)
        this.designation = new FormControl(null, Validators.required)
        this.serviceLine = new FormControl(null, Validators.required)
        this.role = new FormControl(null, Validators.required)
        this.signUpForm = new FormGroup({
            employeeName: this.employeeName,
            employeeNumber: this.employeeNumber,
            password: this.password,
            designation: this.designation,
            serviceLine: this.serviceLine,
            role: this.role
        })
    }

    registerEmployee(signUpFormValues) {
        if (!this.signUpForm.valid) {
            console.log("Invalid Form");

            this.validEmployeeName = this.employeeName.valid
            this.validEmployeeNumber = this.employeeNumber.valid
            this.validPassword = this.password.valid
            this.validDesignation = this.designation.valid
            this.validServiceLine = this.serviceLine.valid
            this.validRole = this.role.valid
        }
        else {
            let newEmployee: IEmployeeRegistration = {
                employeeName: signUpFormValues.employeeName,
                employeeId: signUpFormValues.employeeNumber,
                password: signUpFormValues.password,
                designation: signUpFormValues.designation,
                serviceLine: signUpFormValues.serviceLine,
                role: signUpFormValues.role
            };

            this.authService.register(newEmployee)
                .subscribe(
                data => {
                    console.log(data);
                    this.registrationSuccess = true;
                    this.userAlreadyExists = false;
                },
                error => {
                    console.log(error.status);
                    if (error.status === 400){
                        this.userAlreadyExists = true;
                        this.registrationSuccess = false;
                    }
                });
        }
    }

    numericKeyPressOnlyEvent(keyPressEvent: any) {
        const pattern = /[0-9]/;
        let inputChar = String.fromCharCode(keyPressEvent.charCode);

        if (!pattern.test(inputChar)) {
            keyPressEvent.preventDefault();
        }
    }

    alphaKeyPressOnlyEvent(keyPressEvent: any) {
        const pattern = /[A-Za-z\s]/;
        let inputChar = String.fromCharCode(keyPressEvent.charCode);

        if (!pattern.test(inputChar)) {
            keyPressEvent.preventDefault();
        }
    }
}