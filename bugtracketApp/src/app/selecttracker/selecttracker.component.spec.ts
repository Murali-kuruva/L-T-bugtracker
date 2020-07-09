import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecttrackerComponent } from './selecttracker.component';

describe('SelecttrackerComponent', () => {
  let component: SelecttrackerComponent;
  let fixture: ComponentFixture<SelecttrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelecttrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecttrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
