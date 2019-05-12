import {FormControl} from '@angular/forms';

export class SectionControls {
  item = new FormControl();

  constructor(items: any) {
    if (items) {
      items.forEach((item: any) => {
        this.item.setValue(item);
      });
    }
  }
}
