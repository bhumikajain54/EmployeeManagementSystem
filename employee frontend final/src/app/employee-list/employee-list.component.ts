import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '../serives/authentication.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];
  EnteredID!: number;
  isAuthenticated: boolean = false; // Initialize isAuthenticated to false

  constructor(
    private employeeService: EmployeeService,
    private authService: AuthenticationService,
    private router: Router
  ) {
    this.employees = [];
  }

  ngOnInit(): void {
    this.isAuthenticated = this.checkAuthentication();
    this.getEmployees();
  }

  // Check if the user is authenticated
  private checkAuthentication(): boolean {
    const token = localStorage.getItem('token');
    return token !== null; // Return true if token is present, false otherwise
  }

  // Check if the user has permission to update/delete employees
  private hasPermission(): boolean {
    // Implement this method based on your application's logic
    // For example, you can check the user's role or permissions stored in the token
    // You can access the token using localStorage.getItem('token')
    // Return true or false based on the user's permissions
    return true;
  }

  goToEmployee() {
    console.log(this.EnteredID);
    this.router.navigate(['details-of-employee', this.EnteredID]);
  }

  getEmployees(): void {
    this.employeeService.getEmployeesList().subscribe(data => { this.employees = data; });
  }

  updateEmployee(id: number) {
    if (this.hasPermission()) {
      this.router.navigate(['updating-by-id', id]);
    } else {
      // Redirect or display an error message for unauthorized access
    }
  }

  deleteEmployee(id: number) {
    if (this.hasPermission()) {
      if (confirm("Are you sure to delete Employee ID: " + id)) {
        this.employeeService.deleteEmployee(id).subscribe(data => {
          console.log(data);
          this.getEmployees();
        })
      }
    } else {
      // Redirect or display an error message for unauthorized access
    }
  }

  detailsOfEmployee(id: number) {
    this.router.navigate(['details-of-employee', id]);
  }
}
