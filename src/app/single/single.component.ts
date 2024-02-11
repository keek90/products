import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, SlicePipe } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-single',
  standalone: true,
  imports: [SlicePipe,NavbarComponent,FooterComponent,CommonModule],
  templateUrl: './single.component.html',
  styleUrl: './single.component.css'
})
export class SingleComponent {
  apiService: any;
  constructor(private routeId: ActivatedRoute, private api: ApiService){}
    data: any=[]
    /*rating: number=0
    items: any[] = [];*/
    ngOnInit(){
      this.api.getData().subscribe((res: any)=>{
       let id = this.routeId.snapshot.paramMap.get('id')
        let response=res
        let product=response.filter((e: any)=>e.id==id)
        this.data=product[0]
       
      })
    }
    
    getStars(rating: number) {
      const stars = new Array(5).fill(false);
      for (let i = 0; i < rating; i++) {
        stars[i] = true;
      }
      return stars;
    }
}
function round(rating:number){
  throw new Error('f');
}