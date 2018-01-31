import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { AppComponent } from './app.component';
import { EditComponent} from './edit/edit.component';
import { NewComponent } from './new/new.component';
import { Router } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { DetailComponent } from './detail/detail.component';




@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    EditComponent,
    NewComponent,
    IndexComponent,
    DetailComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
   
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
