// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'dateCount'
// })
// export class DateCountPipe implements PipeTransform {

//   transform(value: any, ...args: any[]): any {
//     return null;
//   }

// }
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): number {
    let today:any = new Date();

    var difference =Math.abs(today-value)
    const secondsPerDay= 86400;

    var dateDifferenceSeconds=difference*0.001;

    var dateCount = Math.round(dateDifferenceSeconds/secondsPerDay);


    if (dateCount >= 1){
        return dateCount - 1;
    }else{
        return 0;
    }
  }

}