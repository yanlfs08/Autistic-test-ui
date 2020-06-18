import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SendResultPage } from './send-result.page';

describe('SendResultPage', () => {
  let component: SendResultPage;
  let fixture: ComponentFixture<SendResultPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendResultPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SendResultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
