import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'nested-forms',
    templateUrl: './nested-forms.component.html',
    styleUrls: ['./nested-forms.component.scss']
})
export class NestedFormsComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        console.log('NestedFormsComponent');
    }
}
