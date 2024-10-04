import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomPrevComponent } from './room-prev.component';

describe('RoomPrevComponent', () => {
  let component: RoomPrevComponent;
  let fixture: ComponentFixture<RoomPrevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoomPrevComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomPrevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
