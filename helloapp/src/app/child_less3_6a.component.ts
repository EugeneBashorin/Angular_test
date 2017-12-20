import {Component} from '@angular/core';

@Component({
	selector: 'child_less3_6a-comp',
	template: `<p>Clicks: {{counter}}</p>`
})
export class Child_less3_6a_Component {
	counter: number = 0;
	increment(){
		this.counter ++;
	}
	decrement(){
		this.counter--;
	}
}