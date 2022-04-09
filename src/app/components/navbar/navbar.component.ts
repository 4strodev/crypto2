import { Component, OnInit } from '@angular/core';
import { CoingeckoService } from 'src/app/services/coingecko.service';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
    textSearch: string = '';

    constructor(
        public themeService: ThemeService,
        private coingeckoService: CoingeckoService
    ) {}

    ngOnInit(): void {}

    searchCoin(): void {
        this.coingeckoService.editableCoins =
            this.coingeckoService.coins.filter((coin) => {
                return (
                    coin.name
                        .toLowerCase()
                        .includes(this.textSearch.toLowerCase()) ||
                    coin.name
                        .toLowerCase()
                        .includes(this.textSearch.toLowerCase())
                );
            });
    }
}
