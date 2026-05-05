import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-update',
  templateUrl: './admin-update.component.html',
  styleUrls: ['./admin-update.component.css']
})
export class AdminUpdateComponent implements OnInit {
  adminData: any = {}; // Define an object to store admin data
  confirmPassword: string = '';
  formData: any = {
     password: '',
    confirmPassword: ''
  };
  
  constructor(private adminService: AdminService, private router: Router) {}

  ngOnInit(): void {
    // You can initialize data or perform any initialization logic here
  }

  updateAdmin(): void {
    // Call the updateAdmin method from the AdminService to update admin data
    this.adminService.updateAdmin(this.adminData.id, this.adminData).subscribe(
      (response) => {
        console.log('Admin updated successfully:', response);
        // Redirect to the desired route after successful update
        this.router.navigate(['/admin-profile']);
      },
      (error) => {
        console.error('Error updating admin:', error);
        // Handle error appropriately, e.g., display error message to user
      }
    );
  }
   passwordsMatch(): boolean {
    return this.adminData.password === this.confirmPassword;
  }
}
