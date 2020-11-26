import {
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
export class TextAvatarComponent implements OnInit {

  _name: string;
  get name(): string {
    return this._name;
  }
  @Input() set name(value: string) {
    this._name = value;
    this.initials = this.extractInitials(value);
  }

  @Input() backColor: string;
  @Input() textColor: string;
  @Input() extractType: string;

  public initials: string;
  public fontSize: number;
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
  }

  private extractInitials(name: string): string {

    let initials = this.extractFirstAndLast(name);

    if (this.extractType === TEXT_AVATAR_TYPE.F_L) {
      initials = this.extractFirstAndLast(name);
    }

    if (this.extractType === TEXT_AVATAR_TYPE.F_F) {
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
