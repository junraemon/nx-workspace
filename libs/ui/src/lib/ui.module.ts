import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatIconModule } from '@angular/material';

import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [CommonModule, MatToolbarModule, MatIconModule],
  declarations: [NavbarComponent],
  exports: [NavbarComponent]
})
export class UiModule {}
