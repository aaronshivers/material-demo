import { NgModule } from '@angular/core';
import {
  MatBadgeModule,
  MatButtonModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
} from '@angular/material';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

const MaterialComponents = [
  MatBadgeModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatToolbarModule,
];

@NgModule({
  imports: [ MaterialComponents ],
  exports: [ MaterialComponents ],
})
export class MaterialModule {
}
