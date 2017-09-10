import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksCssComponent } from './links-css.component';

describe('LinksCssComponent', () => {
  let component: LinksCssComponent;
  let fixture: ComponentFixture<LinksCssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinksCssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinksCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
