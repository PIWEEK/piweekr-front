import { Component } from '@angular/core';
import countdown from "countdown";

@Component({
    selector: "countdown",
    templateUrl: "./app/components/countdown/countdown.component.html",
    styleUrls: ["./app/components/countdown/countdown.component.css"]
})

export class CountDownComponent {
    countdown;
    ngOnInit() {
        setTimeout(
            this.calculateCountdown( new Date(2016, 12, 15) ),
            60000
        );
    }
    calculateCountdown(date) {
        let start = date;
        let end = undefined;
        let units = undefined;
        let max = 4;
        this.countdown = countdown(start, end, units, max).toString();
    }
}
