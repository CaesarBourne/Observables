import { Component } from '@angular/core';
import { Observable, from, of } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss'],
})
export class RxjsComponent {
  agents: Observable<string>;

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

    this.agents.subscribe((data) => {
      console.log(data);
    });

    //5 OF OBSERVABLE

    this.students$.subscribe((data) => {
      console.log(data);
    });
    //ENDOF OF

    //6 OF OBSERVABLE

    this.orders$.subscribe((data) => {
      console.log(data);
    });
    //ENDOF OF
  }
}
