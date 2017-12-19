import {Input, Component, EventEmitter, Output} from '@angular/core'

@Component({
	selector: 'child_less3_2-comp',
	template: `<button (click)="change(true)">+</button>
	<button (click)="change(false)">-</button>`
})
export class Child_less3_2_Component{
	@Output()onChanged = new EventEmitter<boolean>();//для передачи события родительскому компонету которым здесь является свойство onChanged
	//onChanged должно быть выходным, поэтому оно помечается с помощью декоратора @Output.Фактически свойство onChanged будет представлять собой событие, которое вызывается в методе change() по клику на кнопку и передается главному компоненту.
	change(increased:any){
		this.onChanged.emit(increased);
	}
}