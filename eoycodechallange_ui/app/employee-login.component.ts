import { Component, OnInit } from '@angular/core'
import { AuthService } from './services/auth.service'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { IEmployeeLogin } from './models/employee-login.model'
import { Router } from '@angular/router'

@Component({
    templateUrl: 'app/employee-login.component.html'
})
export class EmployeeLoginComponent implements OnInit {

    employeeNumber: FormControl
    password: FormControl
    signInForm: FormGroup
    validLogin?: Boolean

    validPassword?:Boolean
    validEmployeeNumber?:Boolean

    constructor(private authService: AuthService, private router: Router) {

    }

    ngOnInit() {
        this.employeeNumber = new FormControl(null, Validators.required)
        this.password = new FormControl(null, [Validators.required, Validators.maxLength(10)])
        this.signInForm = new FormGroup({
            employeeNumber: this.employeeNumber,
            password: this.password
        })
    }

    loginEmployee(signInFormValues) {
        if (!this.signInForm.valid) {
            console.log("Invalid form");
            this.validPassword = this.password.valid;
            this.validEmployeeNumber = this.employeeNumber.valid;
        }
        else {
            let employeeLogin: IEmployeeLogin = {
                employeeId: signInFormValues.employeeNumber,
                password: signInFormValues.password
            }
            this.authService
                .login(employeeLogin)
                .subscribe(
                data => {
                    console.log(data)
                    this.validLogin = true;
                    localStorage.setItem("authToken", data.token);

                    //get the logged in user detail
                    this.authService
                        .getCurrentUser()
                        .subscribe(data => {
                            console.log(data);
                            this.authService.currentUser = data;
                        }, error => {
                            console.log(error);
                            if (error.status == 401) {
                                this.validLogin = false;
                            }
                        });

                    this.router.navigate(['employee/dashboard']);
                },
                error => {
                    console.log(error);
                    if (error.status == 401) {
                        this.validLogin = false;
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
}