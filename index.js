import { of } from 'rxjs';
import { map, filter } from 'rxjs/operators';

const numbers$ = of(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);

numbers$.pipe(
  filter(number => number % 2 !== 0) 
).subscribe({
  next: (number) => {
    console.log(number); 
  }
});