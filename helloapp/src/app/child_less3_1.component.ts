import {Input, Component} from '@angular/core'

@Component({
	selector: 'child_less3_1-comp',
	template: `UserName {{userName}}
				<p>UserAge {{userAge}}</p>`
})
export class Child_less3_1_Component{
	@Input()userName: string;
	_userAge: number;
	
	@Input()
	set userAge(age:number){
		if(age<0)
			this._userAge = 0;
		else if(age>100)
			this._userAge = 100;
		else
			this._userAge = age;
	}
	get userAge(){return this._userAge;}
}