import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { AuthenticationService } from '../serives/authentication.service';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  employee: Employee = new Employee();

  constructor(
    private employeeService: EmployeeService,
    private authService: AuthenticationService,
    private router: Router
  ) {}

  saveEmployee() {
    if (this.authService['isAuthenticated']()) {
      this.employeeService.addEmployee(this.employee).subscribe(
        data => {
          console.log(data);
          this.goToEmployeeList();
        },
        error => console.log(error)
      );
    } else {
      console.log('Unauthorized access to add employee!');
      // Redirect or display an error message for unauthorized access
    }
  }

  goToEmployeeList() {
    this.router.navigate(['/show-all-employees']);
  }
  addEmployee(): void {
    if (this.authService.isAuthenticated()) {
      // Proceed with adding employee logic
      this.employeeService.addEmployee(this.employee).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['/employee-list']); // Redirect to employee list after adding employee
        },
        error => console.log(error)
      );
    } else {
      // Unauthorized access, redirect to login page
      this.router.navigate(['/employees-list']);
    }
  }
  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Form submitted successfully!');
      this.saveEmployee();
    } else {
      console.log('Form is invalid!');
    }
  }
}
