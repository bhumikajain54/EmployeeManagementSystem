import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent {


  
  id: number
  employee!: Employee
  constructor(private route: ActivatedRoute, private employeeService: EmployeeService, private router: Router) { 

    this.id=0
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.employee = new Employee();
   this.employeeService.getEmployeeById(this.id)
      .pipe(
        catchError(error => {
          console.log('Error occurred:', error);
          if (error.status === 404) {
            // Handle 404 error (Resource Not Found)
            this.router.navigate(['page-not-found']);
          }
          // Rethrow the error to propagate it to the subscriber
          return throwError(error);
        })
      )
      .subscribe(data => {
        // Handle successful response
        this.employee = data;
        console.log(data);
      });
   
    
  }

}
