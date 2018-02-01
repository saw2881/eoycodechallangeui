import {Component, OnInit} from '@angular/core'
import {AuthService} from './services/auth.service'
import {IEmployeeDetail} from './models/employee-detail.model'
import {PagerService} from './services/pager.service'

@Component({
    selector:'employee-dashboard',
    templateUrl: 'app/employee-dashboard.component.html'
})
export class EmployeeDashboardComponent implements OnInit{

    private employeeDetailsArray:IEmployeeDetail[]
    // array of all items to be paged
    private allItems: any[];

    // pager object
    pager: any = {};

    // paged items
    pagedItems: any[];

    constructor(private authService: AuthService, private pagerService:PagerService){

    }

    ngOnInit(){
        this.authService
        .allEmployeeDetails()
        .subscribe(
                data => {
                    console.log(data);
                    this.employeeDetailsArray = data;
                    // set items to json response
                this.allItems = data;

                // initialize to page 1
                this.setPage(1);
                }, 
                error =>{
                    console.log(error);
                }
            );
    }

    setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }

        // get pager object from service
        this.pager = this.pagerService.getPager(this.allItems.length, page);

        // get current page of items
        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }
}