import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { identity, map, Observable } from 'rxjs';
import { IProperty } from '../Property/Iproperty.interface';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) { }
  public getAllProperties(sellRent:number): Observable<IProperty[]>
  {

    return this.http
      .get('Data/properties.json')
      .pipe(
        map(data =>
          {
            var properties:Array<IProperty> = data as IProperty[];
            var propertiesReturned:Array<IProperty>=[];
            var id:number = 0;

            for(var prop in properties){
              console.log("Sell Rent = "+properties[id].SellRent)

              if(properties[id].SellRent===sellRent)
              {
                propertiesReturned.push(properties[id]);
                var x = properties[id];
                console.log(id);
              }
              id+=1;

            }
            return propertiesReturned

          }
          )
      );
  }
}
