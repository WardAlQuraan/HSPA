import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PathRoutes } from 'src/app/PathRoutes';

@Component({
  selector: 'app-Property-Detail',
  templateUrl: './Property-Detail.component.html',
  styleUrls: ['./Property-Detail.component.css']
})
export class PropertyDetailComponent implements OnInit {

  public propertyId:number = 0;
  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.propertyId = parseInt(this.route.snapshot.params['id']);
    this.route.params.subscribe(
      params=>{
        this.propertyId = +params['id'];
      }

    )
  }
  OnSelectNext(){
    this.propertyId+=1;
    this.router.navigate([PathRoutes.detailProperty+"/"+this.propertyId]);
  }

}
