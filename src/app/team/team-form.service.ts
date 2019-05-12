import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {Team, TeamForm} from './_models';
import {Player, PlayerForm} from './player';
import {Section} from './record-models/section.model';
// @ts-ignore
import record from './record';
import {SectionForm} from './record-models/record-form.model';
import {SectionControls} from './record-models/group-form.model';

@Injectable()
export class TeamFormService {
  private teamForm: BehaviorSubject<FormGroup | undefined> = new BehaviorSubject(this.fb.group(new TeamForm(new Team('Cavaliers'))));
  teamForm$: Observable<FormGroup> = this.teamForm.asObservable();

  recordForm: BehaviorSubject<FormGroup | undefined> =
    new BehaviorSubject(
      this.fb.group(
        new SectionForm(
          new Section()
        )
      )
    );
  recordForm$: Observable<FormGroup> = this.recordForm.asObservable();

  constructor(private fb: FormBuilder) {
    this.recordForm.next(this.setSectionItems(record.recordTemplateItem) as FormGroup);
    console.log('RES', this.setSectionItems(record.recordTemplateItem));
  }

  setSectionItems(recordItem: any) {
    console.log('recordItem', recordItem);
    if (recordItem.elementType === 'Field') {
      return new SectionControls(
        recordItem.items
      );

    } else {
      return this.fb.group(
        new SectionForm(
          new Section(
            recordItem.items
              .map(i => {
                return this.setSectionItems(i);
              })
          )
        )
      );
    }
  }

  addPlayer() {
    const currentTeam = this.teamForm.getValue();
    const currentPlayers = currentTeam.get('players') as FormArray;

    currentPlayers.push(
      this.fb.group(
        new PlayerForm(new Player())
      )
    );

    this.teamForm.next(currentTeam);
  }

  deletePlayer(i: number) {
    const currentTeam = this.teamForm.getValue();
    const currentPlayers = currentTeam.get('players') as FormArray;

    currentPlayers.removeAt(i);

    this.teamForm.next(currentTeam);
  }
}

// function Json kek(Node node) {
//    if node == group {
//      return [
//        node.items
//          .filter
//          .map(nd -> kek(nd));
//      ];
//    } else if node == field {
//      return new Ctrl;
//    } else if
//
// }
