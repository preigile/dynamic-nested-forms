import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'form-field',
    templateUrl: './field.component.html',
    styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        console.log('FieldComponent');
    }
}
