import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';

export const routes: Routes = [
    {
        path:"",component:ContactComponent,title:"home"
    }
    ,{
        path:"user",component:UserComponent,title:"user"
    },
    {
        path:"product",component:ProductComponent,title:"product"
    },
    {
        path:"user/:id",component:ContactComponent,title:"user"
    },
];
