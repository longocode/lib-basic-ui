import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InitialsModule, LibBasicUiModule } from '../../projects/lib-basic-ui/src';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LibBasicUiModule,
    InitialsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
