import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { HousingService } from 'src/app/Services/housing.service';
import { IProperty } from '../Iproperty.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties:Array<IProperty>=[];
  sellRent = 1;
  constructor(private service:HousingService, private route:ActivatedRoute){}

  ngOnInit(): void
  {
    if(this.route.snapshot.url.toString()){
      this.sellRent=2;
    }
    this.service.getAllProperties(this.sellRent)
    .subscribe(
      data=> {
        this.properties = data
      },
      error=> console.log(error)
    );

  }

}
