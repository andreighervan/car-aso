import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { SharedComponent } from './shared.component';

@NgModule({
  declarations: [HeaderComponent, SharedComponent],
  imports: [
    CommonModule
  ],
  exports:[HeaderComponent, CommonModule]
})
export class SharedModule { }
