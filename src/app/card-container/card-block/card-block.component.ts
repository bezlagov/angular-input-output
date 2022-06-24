import { Component, OnInit, Input, Output, EventEmitter, ContentChild, ElementRef, AfterContentInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-card-block',
  templateUrl: './card-block.component.html',
  styleUrls: ['./card-block.component.css']
})
export class CardBlockComponent implements OnInit, AfterViewChecked {

  @Input()
  itemId = '';
  @Input()
  itemPrice = '';
  @Input()
  itemDiscount = '';
  @Input()
  itemName = '';
  itemPriceWithDiscount: number = Number(this.itemPrice);

  @Output()
  updateSelected: EventEmitter<string> = new EventEmitter();

  @ContentChild('elem') elem: ElementRef;

  constructor() {   }

  ngOnInit(): void {

  }

  ngOnChanges() {
    this.itemPriceWithDiscount = Number(this.itemPrice) - Number(this.itemPrice) * Number(this.itemDiscount) / 100;
  }
  ngAfterViewChecked(): void {
    this.elem.nativeElement.style.backgroundColor = this.elem.nativeElement.textContent;
  }

  onItemSelect() {
    this.updateSelected.emit(this.itemId);
  }

}

