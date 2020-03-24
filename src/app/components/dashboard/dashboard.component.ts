import { Component, OnInit } from '@angular/core';
import { TippingService } from 'src/app/services/tipping.service';
import { MealItemModel } from 'src/app/services/models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  numberOfMeals = 0;
  listOfMeals: MealItemModel[] = [];
  constructor(private service: TippingService) { }

  ngOnInit(): void {
    this.numberOfMeals = this.service.getCount();
    this.listOfMeals = this.service.getItems();
  }
}
