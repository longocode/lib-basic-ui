import { Component } from '@angular/core';
import { TEXT_AVATAR_TYPE } from 'projects/lib-basic-ui/src/lib/components/text-avatar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'libraries';
  textAvatarType = TEXT_AVATAR_TYPE;
}
