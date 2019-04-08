import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http'
import { BlockUIModule } from 'ng-block-ui';
import { CustomTrimDirective } from './custom-trim.directive';
import { FormsModule} from'@angular/forms';
  import { from } from 'rxjs';
 @NgModule({
  declarations: [
    AppComponent,
    CustomTrimDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BlockUIModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
