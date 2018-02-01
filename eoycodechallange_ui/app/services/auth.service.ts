import { Injectable } from '@angular/core'
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs'
import { IEmployeeRegistration } from '../models/employee-registration.model'
import { IEmployeeLogin } from '../models/employee-login.model'
import { IEmployeeDetail } from '../models/employee-detail.model'
import { CustomRequestOptions } from '../shared/custom-request-options'

@Injectable()
export class AuthService {
    currentUser: IEmployeeDetail
    
    constructor(private http: Http, private customRequestOptions: RequestOptions) {

    }

    register(newEmployee: IEmployeeRegistration):Observable<Response> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let requestBody: String = JSON.stringify(newEmployee);

        return this.http
            .post("http://localhost:3000/api/auth/register", requestBody, options)
            .map((res: Response) => res.json());
    }

    login(loginEmployee: IEmployeeLogin) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append("x-access-token", "SS");
        let options = new RequestOptions({ headers: headers });
        let requestBody: String = JSON.stringify(loginEmployee);

        return this.http
            .post("http://localhost:3000/api/auth/login", requestBody, options)
            .map((res: Response) => res.json());
    }

    allEmployeeDetails(): Observable<IEmployeeDetail[]> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('x-access-token', localStorage.getItem("authToken"));
        let options = new RequestOptions({ headers: headers });

        return this.http
            .post("http://localhost:3000/api/user/all", null, options)
            .map(response => {
                var index = 0;
                console.log(response.json());
                let allEmployees = response.json().map(
                    employee => {
                        return {
                            serialNo: ++index,
                            employeeName: employee.employeeName,
                            employeeId: employee.employeeId,
                            designation: employee.designation,
                            serviceLine: employee.serviceLine,
                            role: employee.role,
                        }
                    }
                );
                return allEmployees;
            });
    }

    getCurrentUser(): Observable<IEmployeeDetail> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('x-access-token', localStorage.getItem("authToken"));
        let options = new RequestOptions({ headers: headers });

        return this.http
            .post("http://localhost:3000/api/user/me", null, options)
            .map(response => {
                console.log(response.json());
                return response.json();
            });
    }

    logout(){
        this.currentUser = null;
        localStorage.removeItem("authToken");
    }
}