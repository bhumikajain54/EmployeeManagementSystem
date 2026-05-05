import { DatePipe } from '@angular/common';
import { Validators } from '@angular/forms';

export class Employee {
    id!: number;
    fname!: string;
    lname!: string;authService: any;
;
    email!: string;;
    salary!: number;
    department: string;
    designation:string;
    joiningDate!: string;
    
  
    
   
  constructor() {
    // this.id = 0; 
    // // this.fname="";
    // this.lname="";
    this.email="@gmail.com";
    this.salary=0;
    this.department="";
    this.designation="";
    // this.joiningDate = new Date();
  //  // Set the default date value
  //  const today = new Date();
  //  const year = today.getFullYear();
  //  const month = ('0' + (today.getMonth() + 1)).slice(-2); // Adding 1 because months are zero-based
  //  const day = ('0' + today.getDate()).slice(-2);

  //  this.joiningDate = `${year}-${month}-${day}`;
}
 // Example of access control
  getSalary(): number | undefined {
    // Check if the user has permission to access salary information
    if (this.authService.isUserInRole('admin')) {
      return this.salary;
    } else {
      // User does not have permission to access salary
      return undefined;
    }
  }

  // Example of data validation
  setEmail(email: string): void {
    // Validate email format
    if (Validators.email({ value: email } as any) === null) {
      this.email = email;
    } else {
      throw new Error('Invalid email format');
    }
  }

  // Example of secure defaults
  setDefaultValues(): void {
    // Set default values securely
    this.email = '@gmail.com';
    this.salary = 0;
    this.department = '';
    this.designation = '';
  }
}
