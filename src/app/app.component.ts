import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,ContactComponent,UserComponent,ProductComponent,RouterLinkActive,RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'routing';
}
