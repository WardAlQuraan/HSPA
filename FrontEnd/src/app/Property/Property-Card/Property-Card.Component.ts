import { Component, Input } from "@angular/core";
import { PathRoutes } from "src/app/PathRoutes";
import { IProperty } from "../Iproperty.interface";

@Component(
  {
    selector:"app-property-card",
    templateUrl:"Property-Card.Component.html",
    styleUrls:["Property-Card.Component.css"]
  }
)
export class PropertyCardComponent
{
  @Input()
  property!: IProperty;
  detailPropertyPath = '/'+PathRoutes.detailProperty;
}
