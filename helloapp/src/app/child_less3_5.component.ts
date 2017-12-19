import {Input, Component, OnInit, DoCheck, OnChanges,
		AfterContentInit, AfterContentChecked, 
		AfterViewChecked, AfterViewInit} from '@angular/core'

@Component({
	selector: 'child_less3_5-comp',
	template: `<p>HELLO {{name}}!</p>`
})
export class Child_less3_5_Component implements OnInit, DoCheck,
												OnChanges,AfterContentInit,
												AfterContentChecked, AfterViewChecked,
												AfterViewInit{
@Input() name:string;
count: number = 1;
ngOnInit(){
		this.log('onInit');
	}
ngOnChanges(){
	this.log('onChanges');
	}
ngDoCheck(){
		this.log('ngDoCheck');
	}
ngAfterViewInit(){
	this.log('ngAfterViewInit');
	}
ngAfterViewChecked(){
	this.log('ngAfterViewChecked');
	}
ngAfterContentInit(){
	this.log('ngAfterContentInit');
}
ngAfterContentChecked(){
	this.log('ngAfterContentChecked');
}
	private log(msg:string){
		console.log(this.count + ". " + msg);
		this.count++;
	}
}