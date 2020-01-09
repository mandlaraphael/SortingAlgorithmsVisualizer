import { Component, OnInit } from '@angular/core';
import {SortingServiceService} from '../../services/sorting-service.service';
import RangeNumbers from '../../modal/RangeNumbers';
import {log} from 'util';

@Component({
  selector: 'app-merge-sort',
  templateUrl: './merge-sort.component.html',
  styleUrls: ['./merge-sort.component.scss']
})
export class MergeSortComponent implements OnInit {

  public unSortedList: [] = null;
  public sortedList: [] = null;
  public size;

  constructor(
    private readonly sortService: SortingServiceService
  ) { }

  ngOnInit() {
    const numbers: RangeNumbers = {
      start: 5,
      end: 730,
    };

    this.sortService.generateNumbers(numbers).subscribe((listOfNumbers: []) => {
      this.unSortedList = listOfNumbers;
      this.sortedList = this.unSortedList;
      this.size = this.unSortedList.length;
    });
  }

  sortList(): void {
    this.displayList(this.getMergeSortAnimations(this.sortedList));
    // const type = 'MERGESORT';
    // this.sortService.sort(type, this.unSortedList).subscribe((sortedNumbers: []) => {
    //   this.displayList(sortedNumbers);
    // });
  }

  private displayList(list: any[]): void {
    for (let i = 0; i < list.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar') as HTMLCollectionOf<HTMLElement>;
      const isColorChange = i % 3 !== 2;

      if (isColorChange) {
        const elements = list[i];
        const color = i % 3 === 0 ? 'blue' : 'aqua';

        setTimeout(() => {
          arrayBars[elements[0]].style.background = color;
          arrayBars[elements[1]].style.background = color;
        }, i * 1);
      } else {
        setTimeout(() => {
          const elements = list[i];
          arrayBars[elements[0]].style.height = elements[1] + 'px';
        }, i * 1);
      }
    }
  }

  getMergeSortAnimations(array): any[] {
    const animations = [];
    if (array.length <= 1) {
      return array;
    }
    const auxiliaryArray = array.slice();
    this.mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
  }

  mergeSortHelper(mainArray, startIdx, endIdx, auxiliaryArray, animations) {
    if (startIdx === endIdx) {
      return;
    }
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    this.mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    this.mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    this.doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
  }

  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;

    while (i <= middleIdx && j <= endIdx) {
      animations.push([i, j]);
      animations.push([i, j]);
      if (auxiliaryArray[i] <= auxiliaryArray[j]) {
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
      } else {
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
      }
    }
    while (i <= middleIdx) {
      animations.push([i, i]);
      animations.push([i, i]);
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
      animations.push([j, j]);
      animations.push([j, j]);
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }


}
