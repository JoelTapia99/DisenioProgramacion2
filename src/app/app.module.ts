import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonasComponent } from './componentes/personas/personas.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from "@angular/common/http";
import { FooterComponent } from './componentes/footer/footer.component';
import { BlockUIModule } from 'ng-block-ui';

@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BlockUIModule.forRoot()
  ],
  providers: [NgbModalConfig, NgbModal],
  bootstrap: [AppComponent]
})
export class AppModule { }
