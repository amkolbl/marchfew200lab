import { Injectable } from '@angular/core';
import { MealItemModel } from './models';

export class TippingService {

  private items: MealItemModel[] = [];
  constructor() { }

  getItems() {
    return this.items;
  }

  getCount() {
    return this.items.length;
  }

  addItem(date: number, billAmount: number, tipPercent: number, tipAmount: number, total: number) {
    this.items = [{ date, billAmount, tipPercent, tipAmount, total }, ...this.items];
  }
}
