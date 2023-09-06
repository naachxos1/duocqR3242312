import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChatCorreoPage } from './chat-correo.page';

describe('ChatCorreoPage', () => {
  let component: ChatCorreoPage;
  let fixture: ComponentFixture<ChatCorreoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChatCorreoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
