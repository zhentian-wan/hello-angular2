/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ContactDetailComponent } from './contact-detail-component.component';

describe('Component: ContactDetailComponent', () => {
  it('should create an instance', () => {
    let component = new ContactDetailComponent();
    expect(component).toBeTruthy();
  });
});
