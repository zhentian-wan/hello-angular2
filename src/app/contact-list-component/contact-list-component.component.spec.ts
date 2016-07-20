/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ContactListComponent } from './contact-list-component.component';

describe('Component: ContactListComponent', () => {
  it('should create an instance', () => {
    let component = new ContactListComponent();
    expect(component).toBeTruthy();
  });
});
