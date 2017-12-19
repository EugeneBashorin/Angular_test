import {Input, Component, OnChanges, SimpleChanges} from '@angular/core'
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { log } from 'util';

@Component({
	selector: 'child_less3_4-comp',
	template: `<p>HELLO {{name}}!</p>`
})
export class Child_less3_4_Component implements OnInit, OnChanges{
	@Input() name:string;

ngOnInit(){
		this.log('onInit');
	}
ngOnChanges(changes:SimpleChanges){
	for(let propName in changes){
		let chng = changes[propName];
		let cur = JSON.stringify(chng.currentValue);
		let prev = JSON.stringify(chng.previousValue);
		this.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`)
	}
}
	private log(msg:string){
		console.log(msg);
	}
}