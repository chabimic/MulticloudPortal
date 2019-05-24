import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatMenuModule,
  MatCardModule,
  MatToolbarModule,
  MatTabsModule,
  MatStepperModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule
} from '@angular/material';

import { RouterModule } from '@angular/router';
import appRoutes from './routerConfig';
import { AppComponent } from './app.component';
import { HorizontalMenuComponent } from './horizontal-menu/horizontal-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddTenantComponent } from './add-tenant/add-tenant.component';
import { HomeComponent } from './home/home.component';
import { AddRegionComponent } from './add-region/add-region.component';
import {BackendCommunicationService} from './backend-communication.service';


@NgModule({
  declarations: [
    AppComponent,
    HorizontalMenuComponent,
    AddTenantComponent,
    HomeComponent,
    AddRegionComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    MatMenuModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatTabsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [BackendCommunicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

