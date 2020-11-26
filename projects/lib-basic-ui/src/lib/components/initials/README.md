# lib-component-with-service

Demo component of the [@sanitas-rocket-chat/components](../../../../../../README.md) library

## Usage

### Import

```typescript
import { ChatItemModule } from '@sanitas-rocket-chat/components';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [ChatItemModule],
  providers: [],
})
export class MyModule {}
```

### Component usage

```html
<san-chat-item
  [chatItem]="chatItemTextReceived"
  status="READ"
  [popoverItems]="popoverItems"
  (popoverAction)="popoverReturn($event)"
></san-chat-item>
<san-chat-item
  [chatItem]="chatItemTextSent"
  status="READ"
  [popoverItems]="popoverItems"
  (popoverAction)="popoverReturn($event)"
></san-chat-item>
<san-chat-item
  [chatItem]="chatItemAudioReceived"
  status="READ"
  [popoverItems]="popoverItems"
  (popoverAction)="popoverReturn($event)"
></san-chat-item>
<san-chat-item
  [chatItem]="chatItemAudioSent"
  status="READ"
  [popoverItems]="popoverItems"
  (popoverAction)="popoverReturn($event)"
></san-chat-item>
<san-chat-item
  [chatItem]="chatItemImageReceived"
  status="READ"
  [popoverItems]="popoverItems"
  (popoverAction)="popoverReturn($event)"
></san-chat-item>
<san-chat-item
  [chatItem]="chatItemImageSent"
  status="UNREAD"
  [popoverItems]="popoverItems"
  (popoverAction)="popoverReturn($event)"
></san-chat-item>
<san-chat-item
  [chatItem]="chatItemVideoReceived"
  status="UNREAD"
  [popoverItems]="popoverItems"
  (popoverAction)="popoverReturn($event)"
></san-chat-item>
<san-chat-item
  [chatItem]="chatItemVideoSent"
  status="UNSEND"
  [popoverItems]="popoverItems"
  (popoverAction)="popoverReturn($event)"
></san-chat-item>
<san-chat-item
  [chatItem]="chatItemFileReceived"
  status="UNSEND"
  [popoverItems]="popoverItems"
  (popoverAction)="popoverReturn($event)"
  (downloadAction)="downloadFile($event)"
></san-chat-item>
<san-chat-item
  [chatItem]="chatItemFileSent"
  status="UNSEND"
  [popoverItems]="popoverItems"
  (popoverAction)="popoverReturn($event)"
  (downloadAction)="downloadFile($event)"
></san-chat-item>
```

## Models

```typescriptdate = new Date();

public popoverItems: Array<PopoverItemInterface> = [
  {
    popoverText: 'Reenviar',
    popoverIcon: 'arrow-redo',
    popoverType: CHAT_ITEM_MENU_ACTIONS.RESEND,
  },
  {
    popoverText: 'Citar',
    popoverIcon: 'arrow-undo',
    popoverType: CHAT_ITEM_MENU_ACTIONS.QUOTE,
  },
  {
    popoverText: 'Copiar',
    popoverIcon: 'copy',
    popoverType: CHAT_ITEM_MENU_ACTIONS.COPY,
  },
  {
    popoverText: 'Información',
    popoverIcon: 'information-circle-outline',
    popoverType: CHAT_ITEM_MENU_ACTIONS.INFO,
  },
];

public chatItemTextReceived: MessageInterface = {
  _id: '1',
  rid: 'room-1',
  msg: 'Buenos días. ¿Cómo se encuentra mi familiar?',
  ts: this.date.toISOString(),
  u: '',
  _updatedAt: this.date.toISOString(),
};

public chatItemTextSent: MessageInterface = {
  _id: '2',
  rid: 'room-1',
  msg: 'Su familiar se encuentra bien.',
  ts: new Date(this.date.setSeconds(this.date.getSeconds() + 10)).toISOString(),
  u: 'Sr. Cuidador',
  _updatedAt: new Date(this.date.setSeconds(this.date.getSeconds() + 10)).toISOString(),
};

public chatItemAudioReceived: MessageInterface = {
  _id: '3',
  rid: 'room-1',
  msg: '',
  ts: new Date(this.date.setSeconds(this.date.getSeconds() + 15)).toISOString(),
  u: 'Sr. Cuidador',
  _updatedAt: new Date(this.date.setSeconds(this.date.getSeconds() + 15)).toISOString(),
  attachments: [
    {
      text: '',
      ts: new Date(this.date.setSeconds(this.date.getSeconds() + 15)).toISOString(),
      thumb_url: '',
      author_name: '',
      title: '',
      title_link: '',
      title_link_download: false,
      image_url: '',
      audio_url: 'http://www.hochmuth.com/mp3/Haydn_Cello_Concerto_D-1.mp3',
      video_url: '',
    },
  ],
};

public chatItemAudioSent: MessageInterface = {
  _id: '4',
  rid: 'room-1',
  msg: '',
  ts: new Date(this.date.setSeconds(this.date.getSeconds() + 20)).toISOString(),
  u: '',
  _updatedAt: new Date(this.date.setSeconds(this.date.getSeconds() + 20)).toISOString(),
  attachments: [
    {
      text: '',
      ts: new Date(this.date.setSeconds(this.date.getSeconds() + 20)).toISOString(),
      thumb_url: '',
      author_name: '',
      title: '',
      title_link: '',
      title_link_download: false,
      image_url: '',
      audio_url: 'http://www.hochmuth.com/mp3/Tchaikovsky_Rococo_Var_orch.mp3',
      video_url: '',
    },
  ],
};

public chatItemImageReceived: MessageInterface = {
  _id: '5',
  rid: 'room-1',
  msg: '',
  ts: new Date(this.date.setSeconds(this.date.getSeconds() + 25)).toISOString(),
  u: 'Sr. Cuidador',
  _updatedAt: new Date(this.date.setSeconds(this.date.getSeconds() + 25)).toISOString(),
  attachments: [
    {
      text: '',
      ts: new Date(this.date.setSeconds(this.date.getSeconds() + 25)).toISOString(),
      thumb_url: 'https://dummyimage.com/300x200/000/fff',
      author_name: '',
      title: '',
      title_link: '',
      title_link_download: false,
      image_url: 'https://dummyimage.com/600x400/000/fff',
      audio_url: '',
      video_url: '',
    },
  ],
};

public chatItemImageSent: MessageInterface = {
  _id: '6',
  rid: 'room-1',
  msg: '',
  ts: new Date(this.date.setSeconds(this.date.getSeconds() + 30)).toISOString(),
  u: '',
  _updatedAt: new Date(this.date.setSeconds(this.date.getSeconds() + 35)).toISOString(),
  attachments: [
    {
      text: '',
      ts: new Date(this.date.setSeconds(this.date.getSeconds() + 30)).toISOString(),
      thumb_url: 'https://dummyimage.com/200x300/fff/000',
      author_name: '',
      title: '',
      title_link: '',
      title_link_download: false,
      image_url: 'https://dummyimage.com/400x600/fff/000',
      audio_url: '',
      video_url: '',
    },
  ],
};

public chatItemVideoReceived: MessageInterface = {
  _id: '7',
  rid: 'room-1',
  msg: '',
  ts: new Date(this.date.setSeconds(this.date.getSeconds() + 35)).toISOString(),
  u: 'Sr. Cuidador',
  _updatedAt: new Date(this.date.setSeconds(this.date.getSeconds() + 35)).toISOString(),
  attachments: [
    {
      text: '',
      ts: new Date(this.date.setSeconds(this.date.getSeconds() + 35)).toISOString(),
      thumb_url: '',
      author_name: '',
      title: '',
      title_link: '',
      title_link_download: false,
      image_url: '',
      audio_url: '',
      video_url: 'http://techslides.com/demos/sample-videos/small.mp4',
    },
  ],
};

public chatItemVideoSent: MessageInterface = {
  _id: '8',
  rid: 'room-1',
  msg: '',
  ts: new Date(this.date.setSeconds(this.date.getSeconds() + 45)).toISOString(),
  u: '',
  _updatedAt: new Date(this.date.setSeconds(this.date.getSeconds() + 45)).toISOString(),
  attachments: [
    {
      text: '',
      ts: new Date(this.date.setSeconds(this.date.getSeconds() + 45)).toISOString(),
      thumb_url: '',
      author_name: '',
      title: '',
      title_link: '',
      title_link_download: false,
      image_url: '',
      audio_url: '',
      video_url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    },
  ],
};

public chatItemFileReceived: MessageInterface = {
  _id: '9',
  rid: 'room-1',
  msg: '',
  ts: new Date(this.date.setSeconds(this.date.getSeconds() + 47)).toISOString(),
  u: 'Sr. Cuidador',
  _updatedAt: new Date(this.date.setSeconds(this.date.getSeconds() + 47)).toISOString(),
  attachments: [
    {
      text: '',
      ts: new Date(this.date.setSeconds(this.date.getSeconds() + 47)).toISOString(),
      thumb_url: '',
      author_name: '',
      title: 'Dummy PDF',
      title_link: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      title_link_download: true,
      image_url: '',
      audio_url: '',
      video_url: '',
    },
  ],
};

public chatItemFileSent: MessageInterface = {
  _id: '10',
  rid: 'room-1',
  msg: '',
  ts: new Date(this.date.setSeconds(this.date.getSeconds() + 50)).toISOString(),
  u: '',
  _updatedAt: new Date(this.date.setSeconds(this.date.getSeconds() + 50)).toISOString(),
  attachments: [
    {
      text: '',
      ts: new Date(this.date.setSeconds(this.date.getSeconds() + 50)).toISOString(),
      thumb_url: '',
      author_name: '',
      title: 'Dummy PDF',
      title_link: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
      title_link_download: true,
      image_url: '',
      audio_url: '',
      video_url: '',
    },
  ],
};

popoverReturn(result: PopoverActionInterface) {
  console.log(result);
}

downloadFile(result: DownloadActionInterface) {
  console.log(result);
}
```

## API

### Inputs

| name         | type                        | default | description                          |
| ------------ | --------------------------- | ------- | ------------------------------------ |
| chatItem     | MessageInterface            |         | All component data                   |
| popoverItems | Array<PopoverItemInterface> |         | Popover options when longpress event |
| status       | CHAT_ITEM_STATUS            |         | Double-check (READ                   | UNREAD | UNSENT) |

### Outputs

| name           | type                                 | default | description                                           |
| -------------- | ------------------------------------ | ------- | ----------------------------------------------------- |
| popoverAction  | EventEmitter<PopoverActionInterface> |         | Return popover option selected and the component data |
| downloadAction | EventEmitter<PopoverActionInterface> |         | Return url to download and the component data         |
