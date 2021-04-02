import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { TestComponent } from './test/test.component';
import { New1Component } from './new1/new1.component';
import { Test123Component } from './test123/test123.component';
import { Test12Component } from './test12/test12.component';
import { Sec1Component } from './sec1/sec1.component';
import { Comp1Component } from './comp1/comp1.component';
import { Main12Component } from './main12/main12.component';
import { Home1Component } from './home1/home1.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    TestComponent,
    New1Component,
    Test123Component,
    Test12Component,
    Sec1Component,
    Comp1Component,
    Main12Component,
    Home1Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
