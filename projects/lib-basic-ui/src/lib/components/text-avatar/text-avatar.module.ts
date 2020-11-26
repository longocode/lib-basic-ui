import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TextAvatarComponent } from './text-avatar.component';


@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [
    TextAvatarComponent,
  ],
  exports: [TextAvatarComponent],
  providers: [],
})
export class TextAvatarModule {}
