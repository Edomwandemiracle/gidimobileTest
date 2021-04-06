/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AdminComponent } from './admin.component';
import { FormBuilder } from '@angular/forms';

describe('AdminComponent', () => {
  let component: AdminComponent;

  beforeEach(() => {
    component = new AdminComponent(new FormBuilder());
  });

  it('should create a form with 3 controls', () => {
    expect(component.newBook.contains('name')).toBeTruthy();
    expect(component.newBook.contains('imageUrl')).toBeTruthy();
    expect(component.newBook.contains('description')).toBeTruthy();
  });

  it('should should make the name control required', () => {
    let control = component.newBook.get('name');
    control?.setValue('');
    expect(control?.valid).toBeFalsy();
  });

  it('should should make the imageUrl control required', () => {
    let control = component.newBook.get('imageUrl');
    control?.setValue('');
    expect(control?.valid).toBeFalsy();
  });

  it('should should make the description control required', () => {
    let control = component.newBook.get('description');
    control?.setValue('');
    expect(control?.valid).toBeFalsy();
  });

  // it('should create a post in an array', () => {
  //   const qouteText = 'This is my first post';
  //   service.addNewQuote(qouteText);
  //   expect(service.quoteList.length).toBeGreaterThanOrEqual(1);
  // });

  // it('should remove a created post from the array of posts', () => {
  //   service.addNewQuote('This is my first post');
  //   service.removeQuote(0);
  //   expect(service.quoteList.length).toBeLessThan(1);
  // });
});
