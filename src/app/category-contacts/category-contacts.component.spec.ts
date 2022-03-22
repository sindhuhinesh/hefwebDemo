import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryContactsComponent } from './category-contacts.component';

describe('CategoryContactsComponent', () => {
  let component: CategoryContactsComponent;
  let fixture: ComponentFixture<CategoryContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryContactsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
