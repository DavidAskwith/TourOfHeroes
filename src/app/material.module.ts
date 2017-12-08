import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverlayModule } from '@angular/cdk/overlay';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatMenuModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatChipsModule,
  MatIconModule,
  MatDialogModule,
  MatTabsModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatChipsModule,
    MatIconModule,
    MatDialogModule,
    MatMenuModule,
    MatTabsModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatChipsModule,
    MatIconModule,
    MatDialogModule,
    MatMenuModule,
    MatTabsModule
  ],
  declarations: []
})
export class MaterialModule { }
