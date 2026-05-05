import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { AuthenticationService } from '../serives/authentication.service';


@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id!: number;
  employee: Employee = new Employee();

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private authService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Check if the user is authenticated
    if (!this.authService.isAuthenticated()) {
      // Redirect to the login page or display an error message
      this.router.navigate(['/login']);
      return;
    }

    this.id = this.route.snapshot.params['id'];

    // Fetch employee details by ID
    this.employeeService.getEmployeeById(this.id).subscribe(
      data => {
        this.employee = data;
      },
      error => {
        console.log(error);
        // Handle error (e.g., display an error message)
      }
    );
  }

  onSubmit(): void {
    // Check authentication status
    if (!this.authService.isAuthenticated()) {
      // Redirect to the logiid: number, employee: Employee, token: anysage
      this.router.navigate(['/login']);
      return;
    }

    // Use token for authorization (if required)
    const token = this.authService.getToken();
    if (!token) {
      // Handle token absence (e.g., redirect to login page or display an error message)
      return;
    }

    // Update employee details with the authentication token
    this.employeeService.updateEmployee(this.id, this.employee).subscribe(
      data => {
        // Redirect to the employee list page
        this.goToEmployeeList();
      },
      error => {
        console.log(error);
        // Handle error (e.g., display an error message)
      }
    );
  }

  goToEmployeeList(): void {
    this.router.navigate(['/show-all-employees']);
  }
}
