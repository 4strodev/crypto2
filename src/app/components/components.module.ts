import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { CurrencySelectorComponent } from './currency-selector/currency-selector.component';

@NgModule({
    declarations: [NavbarComponent, CurrencySelectorComponent],
    imports: [CommonModule, FormsModule],
    exports: [NavbarComponent],
})
export class ComponentsModule {}
