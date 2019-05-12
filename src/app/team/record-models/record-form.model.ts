import {FormArray} from '@angular/forms';

import {Section} from './section.model';

export class SectionForm {
  items = new FormArray([]);

  constructor(section: Section) {
    if (section.items) {
      section.items.forEach(items => {
        if (items.item) {
          this.items.push(items.item);
        } else {
          this.items.push(
            new FormArray([items])
          );
        }
      });
    }
  }
}



