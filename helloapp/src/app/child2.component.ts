import {Component} from '@angular/core'

@Component({
	selector: 'child2-comp',
	template: `<ng-content></ng-content>
				<p>Hello{{name}}</p>`,
	styles:[`h2, p {color:navy;}`]
})
export class Child_2_Component{
	name= "Eugene Serjovi4";
}