import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyWidgetComponent } from './my-widget.component';

describe('MyWidgetComponent', () => {
  let component: MyWidgetComponent;
  let fixture: ComponentFixture<MyWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyWidgetComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MyWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
