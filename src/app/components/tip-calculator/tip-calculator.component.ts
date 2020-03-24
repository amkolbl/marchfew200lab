import { Component, OnInit } from '@angular/core';
import { TippingService } from 'src/app/services/tipping.service';

@Component({
  selector: 'app-tip-calculator',
  templateUrl: './tip-calculator.component.html',
  styleUrls: ['./tip-calculator.component.css']
})
export class TipCalculatorComponent implements OnInit {

  billAmount = 0;
  tipPercentage = .2;
  amountOfTip = 0;
  totalToBePaid = 0;
  constructor(private service: TippingService) { }

  ngOnInit(): void {
  }

  updateAmount(amount: number) {
    this.billAmount = amount;
    this.updateData();
  }

  changeTipAmount(tipPercentage: number) {
    this.tipPercentage = tipPercentage;
    this.updateData();
  }

  updateData() {
    this.amountOfTip = this.billAmount * this.tipPercentage;
    this.totalToBePaid = +this.amountOfTip + this.billAmount;
  }
  saveMeal() {
    this.service.addItem(Date.now(), this.billAmount, this.tipPercentage, this.amountOfTip, this.totalToBePaid);
  }
}
