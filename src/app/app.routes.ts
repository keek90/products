import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { SingleComponent } from './single/single.component';

export const routes: Routes = [
    {path: '',component:HomeComponent},
{path: 'contact',component:ContactComponent},
{path: 'products',component:ProductsComponent},
{path: 'products/:id',component:SingleComponent},
];
