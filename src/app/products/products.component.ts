import { SlicePipe } from '@angular/common';
import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [SlicePipe,NavbarComponent,FooterComponent,RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
title = 'products';
constructor(public api:ApiService){}
ngOnInit(){
  this.api.getData().subscribe(response=>{this.data=response})
  
}

data: any=[]
}
