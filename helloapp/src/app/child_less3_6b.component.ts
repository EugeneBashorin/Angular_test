import {Component} from '@angular/core';
import {ContentChild} from '@angular/core';
import {ElementRef} from '@angular/core';


@Component({
	selector: 'child_less3_6b-comp',
	template: `<ng-content></ng-content>
	<button (click)="change()">Change</button>`
})
export class Child_less3_6b_Component {
	@ContentChild("headerContent")
	header: ElementRef;
	change(){
		console.log(this.header);
		this.header.nativeElement.textContent = "Hello, friend!";
	}
}