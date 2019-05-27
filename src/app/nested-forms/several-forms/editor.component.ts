import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'form-editor',
    templateUrl: './editor.component.html',
    styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        console.log('EditorComponent');
    }
}
