import {Input, Component} from '@angular/core'

@Component({
	selector: 'child_less3-comp',
	template: `UserName {{userName}}
				<p>UserAge {{userAge}}</p>`
})
export class Child_less3_Component{
	@Input()userName:string;
	@Input()userAge:number;
}