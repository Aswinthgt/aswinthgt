import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileProfileImageComponent } from './mobile-profile-image.component';

describe('MobileProfileImageComponent', () => {
  let component: MobileProfileImageComponent;
  let fixture: ComponentFixture<MobileProfileImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileProfileImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileProfileImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
