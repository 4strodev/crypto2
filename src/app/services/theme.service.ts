import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ThemeService {
    private darkMode: boolean = false;

    constructor() {}

    toggleDarkMode(): void {
        this.darkMode = !this.darkMode;
    }

    getDarkFlag(): boolean {
        return this.darkMode;
    }
}
