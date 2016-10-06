import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PeopleComponent } from './people.component';
import { ProfileComponent } from './profile/profile.component';
import { NewPersonComponent } from './new-person/new-person.component';

import { PeopleService } from './people.service';
@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    PeopleComponent
  ],
  providers: [ 
    PeopleService 
  ],
  declarations: [PeopleComponent, ProfileComponent, NewPersonComponent]
})
export class PeopleModule { }
