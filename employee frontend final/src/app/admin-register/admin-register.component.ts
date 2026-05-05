import { Component,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { Admin } from '../admin';
import { NgForm } from '@angular/forms';
import { yearsPerPage } from '@angular/material/datepicker';
@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent {
  admin: Admin = { name: '', email: '', password: '' };
  confirmPassword: string = '';
  formData: any = {
     password: '',
    confirmPassword: ''
  };
  @ViewChild('RegisterAdminForm') RegisterAdminForm!: NgForm;

  constructor(private router: Router, private adminService: AdminService) {}

  // Method to compare password and confirm password
  passwordsMatch(): boolean {
    return this.admin.password === this.confirmPassword;
  }

  registerAdmin(): void {
    // Check if passwords match before proceeding
    if (!this.passwordsMatch()) {
      // If passwords don't match, handle the error (e.g., display a message to the user)
      console.error('Passwords do not match');
      return;
    }

    // Proceed with registration if passwords match
    this.adminService.registerAdmin(this.admin).subscribe(
      () => {
        console.log('Admin registered successfully');
        // Optionally, navigate to a different page upon successful registration
        this.router.navigate(['/admin-login']);
      },
      error => {
        console.error('Failed to register admin:', error);
        // Optionally, display a user-friendly error message to the user
        // You can also handle different types of errors separately
      }
   );
  }
  goToRegisterPage(): void {
    this.router.navigate(['/register']);
  }
  navigateToRegisterPage() {
    // Add logic to navigate to the register page
    this.router.navigate(['/register']);
  }
   onSubmit() {
    if (this.RegisterAdminForm.valid && this.formData.password === this.formData.confirmPassword) {
      // Your form submission logic goes here
      console.log('Form submitted successfully!');
    } else {
      console.log('Form is invalid!');
    }
  }
   
}
