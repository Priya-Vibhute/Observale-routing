import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {

   constructor(private activateRoute:ActivatedRoute)
  {

  }

  ngOnInit()
  {
    this.activateRoute.queryParamMap.subscribe((params)=>{
      console.log(params)
      console.log(params.get("name"))
    })
  }

}
