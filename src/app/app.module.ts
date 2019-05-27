import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatDividerModule, MatFormFieldModule, MatInputModule, MatListModule} from '@angular/material';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TeamComponent} from './team/team.component';
import {PlayerComponent} from './team/player/player.component';
import {TeamFormService} from './team/team-form.service';
import {EditorModule} from './nested-forms/several-forms/editor.module';

@NgModule({
    declarations: [
        AppComponent,
        TeamComponent,
        PlayerComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        EditorModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatDividerModule,
        MatListModule,
        NoopAnimationsModule,
        ReactiveFormsModule
    ],
    providers: [TeamFormService],
    bootstrap: [AppComponent]
})

export class AppModule {}
