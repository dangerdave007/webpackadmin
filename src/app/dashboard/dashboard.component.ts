import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-dashboard',
    template: require('./dashboard.component.html'),
    styles: [require('./dashboard.component.scss')]
})
export class DashboardComponent implements OnInit {
    constructor() {
        
     }

    ngOnInit() { 
        console.log('Hello Dashboard'); 
        
    }
    
}