import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeAnalyserComponent } from './code-analyser.component';

describe('CodeAnalyserComponent', () => {
  let component: CodeAnalyserComponent;
  let fixture: ComponentFixture<CodeAnalyserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeAnalyserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeAnalyserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
