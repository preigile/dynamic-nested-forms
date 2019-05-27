import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

import {EditorComponent} from './editor.component';
import {NestedFormsComponent} from '../nested-forms.component';
import {SectionComponent} from './section/section.component';
import {FieldComponent} from './field/field.component';

@NgModule({
    declarations: [
        NestedFormsComponent,
        EditorComponent,
        SectionComponent,
        FieldComponent
    ],
    imports: [
        ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [EditorComponent]
})

export class EditorModule {}
