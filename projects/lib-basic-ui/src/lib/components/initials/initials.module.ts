import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InitialsComponent } from './initials.component';


@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [
    InitialsComponent,
  ],
  exports: [InitialsComponent],
  providers: [],
})
export class InitialsModule {}
