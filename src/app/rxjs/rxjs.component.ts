import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  Observable,
  debounce,
  debounceTime,
  from,
  fromEvent,
  of,
  take,
  takeWhile,
} from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss'],
})
export class RxjsComponent {
  agents: Observable<string>;

  @ViewChild('validate')
  validate: ElementRef;

  studentList = ['Emma', 'oLA'];
  students$: Observable<string[]> = of(this.studentList);
  ordersArray = ['Faishion', 'Elecronics'];
  orders$: Observable<string> = from(this.ordersArray);

  constructor() {}

  ngOnInit(): void {
    //NORMAL OBSERVABLES generate observable from string array and objexts
    this.agents = new Observable((observer) => {
      try {
        observer.next('Emma');
        observer.next('Emm');
      } catch (error) {
        observer.error(error);
      }
    });

    //   this.orders$.subscribe(data => {
    //     const seqNum$ = interval(500);
    //     seqNum$.subscribe(num =>{
    //     if(num < 5) {
    //     console. log(data + num)
    //   }

    // })

    let searchForm: any;
    takeWhile;
    searchForm = new FormGroup({
      name: new FormControl('ola'),
    });

    searchForm
      .get('ola')
      .valueChanges.pipe(
        takeWhile((v) => this.checkCondition('v')),
        debounceTime(3000)
      )
      .subscribe((data: any) => {
        console.log(data);
      });

    this.agents.subscribe((data) => {
      console.log(data);
    });

    //5 OF OBSERVABLE

    this.students$.subscribe((data) => {
      console.log(data);
    });
    //ENDOF OF

    //6 from OBSERVABLE

    this.orders$.subscribe((data) => {
      console.log(data);
    });
    //ENDOF OF

    //from event
  }

  //from event

  rxJsEventbbservable() {
    const butObservable$ = fromEvent(this.validate?.nativeElement, 'click');
    butObservable$.subscribe((data) => {
      console.log(data);
    });
  }
  checkCondition(data: string) {
    return data.length > 5;
  }

  getEventobservable() {
    const linkobservable$ = fromEvent(
      this.validate?.nativeElement,
      'mouseover'
    );
    linkobservable$.subscribe((data) => {
      console.log(data);
    });
  }

  // User should not be allowed to click 3 times
}
