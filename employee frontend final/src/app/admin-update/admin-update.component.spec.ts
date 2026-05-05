import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminUpdateComponent } from './admin-update.component'; // Update import

describe('AdminUpdateComponent', () => { // Update component name
  let component: AdminUpdateComponent; // Update component reference
  let fixture: ComponentFixture<AdminUpdateComponent>; // Update component fixture reference

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminUpdateComponent]
    });
    fixture = TestBed.createComponent(AdminUpdateComponent); // Update component creation
    component = fixture.componentInstance; // Update component reference
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

