import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SendResultPageRoutingModule } from './send-result-routing.module';

import { SendResultPage } from './send-result.page';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        SendResultPageRoutingModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
  declarations: [SendResultPage]
})
export class SendResultPageModule {}
