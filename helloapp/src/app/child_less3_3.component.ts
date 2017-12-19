import {Input, Component, EventEmitter, Output} from '@angular/core'

@Component({
	selector: 'child_less3_3-comp',
	template: `<input [ngModel] = "userName" (ngModelChange) = "onNameChange($event)"/>
				`
})
export class Child_less3_3_Component{
	@Input() userName:string;
	@Output() userNameChange = new EventEmitter<string>();//для передачи события родительскому компонету которым здесь является свойство onChanged
	//onChanged должно быть выходным, поэтому оно помечается с помощью декоратора @Output.Фактически свойство onChanged будет представлять собой событие, которое вызывается в методе change() по клику на кнопку и передается главному компоненту.
	onNameChange(model:string){
		this.userName = model;
		this.userNameChange.emit(model);
	}
}