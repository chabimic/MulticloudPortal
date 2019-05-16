import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MatButtonModule, MatMenuModule, MatCardModule, MatToolbarModule, MatTabsModule, MatStepperModule, MatFormFieldModule, MatInputModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HorizontalMenuComponent } from './horizontal-menu/horizontal-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddTenantComponent } from './add-tenant/add-tenant.component';

@NgModule({
  declarations: [
    AppComponent,
    HorizontalMenuComponent,
    AddTenantComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatTabsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

