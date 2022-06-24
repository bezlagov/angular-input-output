import { Component, OnInit, ContentChildren, QueryList, ViewChildren } from '@angular/core';
import { CardBlockComponent } from './card-block/card-block.component';
@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
  styleUrls: ['./card-container.component.css']
})
export class CardContainerComponent implements OnInit {

  private discountValue: number = 15;
  currentDiscount: number = 0;
  productDescription: string = "";
  private currentId: number = -1;
  products = [
    { id: 1, name: 'product 1', price: 110, description: 'product 1 text description', color: 'red' },
    { id: 2, name: 'product 2', price: 120, description: 'product 2 text description', color: 'green' },
    { id: 3, name: 'product 3', price: 130, description: 'product 3 text description', color: 'blue' },
  ];
  @ViewChildren(CardBlockComponent) blocks: QueryList<CardBlockComponent> = new QueryList();

  constructor() { }

  ngOnInit(): void {
  }


  setItemDescription(newId: any) {
    if (newId == this.currentId) {
      this.currentId = -1;
      this.productDescription = '';
      return;
    }
    this.currentId = Number(newId);
    this.productDescription = this.products[this.currentId - 1].description;
  }

  applyDiscount() {
    if (this.currentDiscount == this.discountValue) {
      this.currentDiscount = 0;
    } else {
      this.currentDiscount = this.discountValue;
    }
    console.dir(this.products);
    console.dir(this.blocks);
  }
}
