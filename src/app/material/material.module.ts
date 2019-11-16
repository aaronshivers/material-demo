import { NgModule } from '@angular/core';
import { MatBadgeModule, MatButtonModule } from '@angular/material';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';

const MaterialComponents = [
  MatBadgeModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule
];

@NgModule({
  imports: [ MaterialComponents ],
  exports: [ MaterialComponents ],
})
export class MaterialModule {
}
