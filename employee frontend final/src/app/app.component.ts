import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  public myFlag: boolean = false;
  constructor(private router: Router) { 
    if (localStorage.getItem('token')) {
    this.isLoggedIn = true;
  }
  }
   // Define a property to track the authentication status
  isLoggedIn: boolean = false;
  ngOnInit() {
}
  // Define a method to check if the user is logged in
  checkLoggedIn(): boolean {
    // Your authentication logic here
   
    return this.isLoggedIn;
  }

  // Define a method to handle logout
  logout(): void {
    // Your logout logic here
    this.isLoggedIn = false;
    // Navigate to the admin login page
    localStorage.clear();
    this.router.navigateByUrl('/admin-login');
  }

}