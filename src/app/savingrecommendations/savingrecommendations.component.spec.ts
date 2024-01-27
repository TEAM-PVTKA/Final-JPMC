import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingrecommendationsComponent } from './savingrecommendations.component';

describe('SavingrecommendationsComponent', () => {
  let component: SavingrecommendationsComponent;
  let fixture: ComponentFixture<SavingrecommendationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SavingrecommendationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SavingrecommendationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
