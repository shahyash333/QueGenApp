import { NgModule} from '@angular/core';
import {QuestionPaperGenratorPage} from './question-paper-genrator'
import { IonicPageModule } from 'ionic-angular';
import { Service } from '../../service/service';
import {GenerateModalPage} from './generate-modal/generate-modal'
@NgModule({
    declarations: [QuestionPaperGenratorPage,GenerateModalPage],
    imports: [  IonicPageModule.forChild({QuestionPaperGenratorPage,GenerateModalPage}) ],
    exports: [],
    providers: [Service],
    entryComponents:[GenerateModalPage]
})
export class QuestionPaperModule {}