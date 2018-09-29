import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTagsComponent } from './menu-tags.component';

describe('MenuTagsComponent', () => {
  let component: MenuTagsComponent;
  let fixture: ComponentFixture<MenuTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuTagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
