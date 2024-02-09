import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './api.service';
import { SlicePipe } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SlicePipe,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'products';
  constructor(public api:ApiService){}
  ngOnInit(){
    this.api.getData().subscribe(response=>{this.data=response})
  }
  data: any=[]
}
