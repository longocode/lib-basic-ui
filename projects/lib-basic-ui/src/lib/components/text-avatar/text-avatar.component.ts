import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { TEXT_AVATAR_TYPE } from './enums/text-avatar-type.enum';

export const COMPONENT_INITIALS = 'bui-text-avatar';

@Component({
  selector: COMPONENT_INITIALS,
  templateUrl: './text-avatar.template.html',
  styleUrls: ['./text-avatar.styles.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class TextAvatarComponent implements OnInit, AfterViewInit {

  private _text: string;
  get text(): string {
    return this._text;
  }
  @Input() set text(value: string) {
    this._text = value;
  }

  @Input() viewBox = '0 0 30 30';
  @Input() backColor: string;
  @Input() textColor: string;
  @Input() formatType = TEXT_AVATAR_TYPE.F_L;
  @Input() width = '100%';
  @Input() height = '100%';
  @Input() borderRadius = '100%';

  public finalText: string;
  public hasOneInitial = false;

  private randomColorRadixBase = 16;
  private randomColorConst = 16777215;
  private hexToBWLimitConst = 150;
  private hexToBWRConst = 0.299;
  private hexToBWGConst = 0.587;
  private hexToBWBConst = 0.114;
  private colorWhite = '#FFFFFF';
  private colorBlack = '#000000';

  constructor() {}

  ngOnInit() {
    this.backColor = (!this.backColor) ? this.getRandomColor() : this.backColor;
    this.textColor = (!this.textColor) ? this.convertHexToBW(this.backColor) : this.textColor;
    this.finalText = this.extractInitials(this._text);
  }

  ngAfterViewInit() {
  }

  public styleObject(): object {
    return {
      'background-color': this.backColor,
      width: this.width,
      height: this.height,
      'border-radius': `${this.borderRadius}`
    };
  }

  private extractInitials(name: string): string {

    let initials = this.extractFirstAndLast(name);

    console.log(this.formatType);

    if (this.formatType === TEXT_AVATAR_TYPE.F_L) {
      initials = this.extractFirstAndLast(name);
    }

    if (this.formatType === TEXT_AVATAR_TYPE.F_F) {
      initials = this.extractFirstAndFirst(name);
    }

    if (initials.length === 1) {
      this.hasOneInitial = true;
    }

    return initials;
  }

  private extractFirstAndLast(name: string): string {

    const initials = name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').match(/\b\w/g) || [];

    return ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
  }

  private extractFirstAndFirst(name: string): string {

    const initials = name.match(/\b\w/g) || [];

    const first = initials.shift();
    initials.shift();
    const second = initials.shift();

    return ((first || '') + (second || '')).toUpperCase();
  }

  private getRandomColor(): string {

    let randomColorHex = '#' + Math.floor(Math.random() * this.randomColorConst).toString(this.randomColorRadixBase);

    if (randomColorHex === this.colorWhite) { randomColorHex = this.getRandomColor(); }

    return randomColorHex;
  }

  private convertHexToBW(hex: string): string {

    if (hex.indexOf('#') === 0) { hex = hex.slice(1); }

    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    return (r * this.hexToBWRConst + g * this.hexToBWGConst + b * this.hexToBWBConst) > this.hexToBWLimitConst
        ? this.colorBlack
        : this.colorWhite;
  }
}
