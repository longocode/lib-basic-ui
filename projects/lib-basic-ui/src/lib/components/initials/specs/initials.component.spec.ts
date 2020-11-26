import { ChangeDetectorRef } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularDelegate, IonicModule, PopoverController } from '@ionic/angular';
import { RocketChatService } from 'projects/components/src/lib/shared';
import { WebsocketApiService } from 'projects/components/src/lib/shared/services/websocket-api.service';
import { RocketChatServiceMock } from '../../../shared/services/test/rocket-chat.service.mock';
import { INITIALS_TYPE } from '../enums/initials-type.enum';
import { InitialsComponent } from '../initials.component';

describe('initials.component.ts', () => {
  let component: InitialsComponent;
  let fixture: ComponentFixture<InitialsComponent>;
  let popoverController: PopoverController;
  let rocketChatService: RocketChatService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InitialsComponent],
      imports: [IonicModule],
      providers: [
        PopoverController,
        AngularDelegate,
        ChangeDetectorRef,
        {
          provide: RocketChatService,
          useClass: RocketChatServiceMock,
        },
        WebsocketApiService,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(InitialsComponent);
    component = fixture.componentInstance;
    popoverController = TestBed.inject(PopoverController);
    rocketChatService = TestBed.inject(RocketChatService);

    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set name', () => {

    const name = 'Nombre de Prueba';

    component.name = name;

    const actualName = component.name;

    expect(actualName).toEqual(name);
    expect(component.initials).toEqual('NP');
  });

  it('should set name with type F_L ', () => {
    component.extractType = INITIALS_TYPE.F_L;
    component.name = 'Nombre de Prueba';
    expect(component.initials).toEqual('NP');
  });

  it('should set name with type F_F ', () => {
    component.extractType = INITIALS_TYPE.F_F;
    component.name = 'Nombre de Prueba';
    expect(component.initials).toEqual('NP');
  });

  it('should set name with one initial', () => {
    component.name = 'Nombre';
    expect(component.initials).toEqual('N');
  });

  it('should set name with no text', () => {
    component.name = '';
    expect(component.initials).toEqual('');
  });

  it('should set name with type F_F with no text ', () => {
    component.extractType = INITIALS_TYPE.F_F;
    component.name = '';
    expect(component.initials).toEqual('');
  });

  it('should init with custom colors', () => {

    const getRandomColorSpy = spyOn((component as any), 'getRandomColor').and.callThrough();
    const convertHexToBWSpy = spyOn((component as any), 'convertHexToBW').and.callThrough();

    component.backColor = '#FFFFFF';
    component.textColor = '#000000';
    component.ngOnInit();

    expect(getRandomColorSpy).not.toHaveBeenCalled();
    expect(convertHexToBWSpy).not.toHaveBeenCalled();
  });

  it('should convert hex to black and white whit no #', () => {
    (component as any).convertHexToBW('FFFFFF');
  });
});
