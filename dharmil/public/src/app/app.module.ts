import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
// vendor
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Custom Modules


import {
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatBadgeModule,
  MatSidenavModule,
  MatListModule,
  MatGridListModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatRadioModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatChipsModule,
  MatTooltipModule,
  MatTableModule,
  MatCardModule,
  MatPaginatorModule,
  MAT_RADIO_DEFAULT_OPTIONS,
  MatCheckboxModule,
} from '@angular/material';
import { FormComponent } from './form/form.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CardComponent } from './card/card.component';
import { FileComponent } from './file/file.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'forms', component: FormComponent},
  { path: 'card', component: CardComponent },
  { path: 'file', component: FileComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    CardComponent,
    FileComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatBadgeModule,
    MatListModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    MatTooltipModule,
    MatTableModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatCheckboxModule
  ],
  exports: [RouterModule],
  providers: [
    {
      provide: MAT_RADIO_DEFAULT_OPTIONS,
      useValue: { color: 'primary' }
    }
],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
