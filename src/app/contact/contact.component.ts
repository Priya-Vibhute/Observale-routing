import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  constructor(private activateRoute:ActivatedRoute,private router:Router)
  {

  }

  navigateToUser(data:string)
  {
     this.router.navigate(["/user",123])
  }

  ngOnInit()
  {
    this.activateRoute.params.subscribe((params)=>{
      console.log(params)
    })
  }
}
