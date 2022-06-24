import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardContainerComponent } from './card-container/card-container.component';
import { CardBlockComponent } from './card-container/card-block/card-block.component';
import { UnorderedListComponent } from './unordered-list/unordered-list.component';
import { ListItemComponent } from './unordered-list/list-item/list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CardContainerComponent,
    CardBlockComponent,
    UnorderedListComponent,
    ListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
