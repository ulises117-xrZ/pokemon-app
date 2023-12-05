import { NgModule } from "@angular/core";
import * as fromComponents from './components/index';
import { MaterialModule } from "./material.module";


@NgModule({
  declarations: [
    ...fromComponents.components,
  ],
  imports: [
    MaterialModule
  ],
  exports: [
    MaterialModule,
    ...fromComponents.components,
  ],
})

export class SharedModule { }
