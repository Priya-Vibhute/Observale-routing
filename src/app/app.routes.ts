import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';

export const routes: Routes = [
    {
        path:"",component:ContactComponent
    }
    ,{
        path:"user",component:UserComponent
    },
    {
        path:"product",component:ProductComponent
    }
];
