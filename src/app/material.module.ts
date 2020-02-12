import { NgModule } from '@angular/core';
import { MatToolbarModule, MatMenuModule, MatCardModule, MatButtonModule } from '@angular/material';

const materialModules = [
    MatToolbarModule,
    MatMenuModule,
    MatCardModule,
    MatButtonModule,
];

@NgModule({
    imports: materialModules,
    exports: materialModules
})
export class MaterialModule { }