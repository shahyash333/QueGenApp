import { NgModule} from '@angular/core';
import {BlueprintPage} from './blueprint'
import { IonicPageModule } from 'ionic-angular';
import { Service } from '../../service/service';
import {BlueprintModalPage} from './blueprint.modal/blueprint-modal'
@NgModule({
    declarations: [BlueprintPage,BlueprintModalPage],
    imports: [  IonicPageModule.forChild({BlueprintPage,BlueprintModalPage}) ],
    exports: [],
    providers: [Service],
    entryComponents:[BlueprintModalPage]
})
export class BlueprintModule {}