import { ComponentFixture, TestBed } from "@angular/core/testing";

import { WcStylingComponent } from "./wc-styling.component";

describe("WcStylingComponent", () => {
  let component: WcStylingComponent;
  let fixture: ComponentFixture<WcStylingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WcStylingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WcStylingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
