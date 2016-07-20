

import {ContactListComponent} from "./contact-list-component.component";
import {ContactDetailComponent} from "./contact-detail-component/contact-detail-component.component";
export const ContactsAppRoutes = [
  { path: 'contacts', component: ContactListComponent },
  { path: 'contacts/:id', component: ContactDetailComponent }
];
