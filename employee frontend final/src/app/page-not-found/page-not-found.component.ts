import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent {


  
  
  constructor(private route: ActivatedRoute, private router: Router) { 

  }

  ngOnInit(): void {
    
  }

}
