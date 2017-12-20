import { Component, OnInit, SimpleChanges, OnDestroy } from '@angular/core';
import { OnChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import {Child_less3_6a_Component} from './child_less3_6a.component';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { ElementAst } from '@angular/compiler';

@Component({
	selector:'my-app',
	template:`
	<child-comp></child-comp>
	<p>Hello {{name}}</p>	
	
	<child2-comp><h2>Добро пожаловать {{name}}!</h2></child2-comp>
	
	<child_less3-comp [userName]="name" [userAge]="age"></child_less3-comp>
	<input type="text" [(ngModel)]="name">
	
	<child_less3_1-comp [userName]="name" [userAge]="age"></child_less3_1-comp>
	<input type="number" [(ngModel)]="age"/>
	
	<h2>Clicks count:{{clicks}}</h2>
	<child_less3_2-comp (onChanged)="onChanged($event)"></child_less3_2-comp>

	<child_less3_3-comp [(userName)]="name"></child_less3_3-comp>
	<div>Выбранное имя:{{name}}</div>

	<child_less3_4-comp [name]="name"></child_less3_4-comp>
	<input type="text" [(ngModel)]="name" />
	<input type="number" [(ngModel)]="age" />

	<child_less3_5-comp [name]="name"></child_less3_5-comp>
	<input type="text" [(ngModel)]="name" />

	<p #userSurName>{{surname}}</p>
	<p>{{userSurName.textContent}}</p>
	<input type="text" [(ngModel)] = "surname" />

	<child_less3_6-comp #counter></child_less3_6-comp>
	<button (click)= "counter.increment()">+</button>
	<button (click)= "counter.decrement()">-</button>

	<child_less3_6a-comp></child_less3_6a-comp>
	<button (click)= "incrementIndex()">+</button>
	<button (click)= "decrementIndex()">-</button>

	3_6-ViewChild 
	<p #fatherName>Father_name: {{father_name}}</p>
	<p>{{fatherName.nameText}}</p>
	<button (click)= "change()">Change f_name</button>

	3_6b
	<child_less3_6b-comp>
		<h3 #headerContent> Welcome {{visiter_name}}!</h3>
	</child_less3_6b-comp>
	`,
	styles:[`h2,p{color:#333;}`]
})
export class AppComponent implements OnInit, OnDestroy, OnChanges{
	//name= 'Genius';
	name:string = "TOM";
	surname:string = "GREEN";
	constructor(){this.log(`constructor`);}

	private log(msg:string){
		console.log(msg);
	}

	ngOnInit(){this.log(`onInit`);}
	//ngOnInit() применяется для какой-то комплексной инициализации компонента. Здесь можно выполнять загрузку данных с сервера или из других источников данных

	ngOnDestroy(){this.log(`onDestroy`);}
	//ngOnDestroy() Метод ngOnDestroy() вызывается перед удалением компонента. И в этом методе можно освобождать те используемые ресурсы, которые не удаляются автоматически сборщиком мусора. Здесь также можно удалять подписку на какие-то события элементов DOM, останавливать таймеры и т.д.

	age:number = 24;
	clicks:number = 0;
	onChanged(increased:any){
		increased == true?this.clicks++: this.clicks--;
	}

	//child3-4
	ngOnChanges(changes: SimpleChanges){
	for(let propName in changes){
		let chng = changes[propName];
		let cur = JSON.stringify(chng.currentValue);
		let prev = JSON.stringify(chng.currentValue);
		this.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`)
	}
	}
	@ViewChild(Child_less3_6a_Component)
		private counterComponent: Child_less3_6a_Component;
		incrementIndex(){
			this.counterComponent.increment();
		}
		decrementIndex(){
			this.counterComponent.decrement();
		}
	
	@ViewChild("fatherName")
	nameParagraph: ElementRef;
	father_name : string = "George";
	change(){
		console.log(this.nameParagraph.nativeElement.textContent);
		this.nameParagraph.nativeElement.textContent = "paradice";
	 }

	 visiter_name : string = "Hiroshi";

}