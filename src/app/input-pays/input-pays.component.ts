import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Observable, debounce, debounceTime, fromEvent, interval, switchMap } from 'rxjs';
import {countryList} from "./variousCountryListFormats"

@Component({
  selector: 'inputPays',
  templateUrl: './input-pays.component.html',
  styleUrls: ['./input-pays.component.css']
})



export class InputPaysComponent implements AfterViewInit{

  @ViewChild('inputPays')
    inputElement!:ElementRef;

  sub:any

  countryList:Array<String>
  currentCountry:Array<String>
  constructor(){
    this.countryList = countryList
    this.currentCountry = [];
  }

  handleClick(event:Event){
    let country = (event.target as HTMLElement).innerText;
    this.inputElement.nativeElement.value = country;
    this.currentCountry = [];
  } 

  ngAfterViewInit(){
    this.sub = fromEvent(this.inputElement.nativeElement,'keyup').pipe(debounceTime(600)).subscribe(_=>{
      let search = this.inputElement.nativeElement.value;
      if(search.length === 0){
        this.currentCountry = [];
        return;
      }
      this.currentCountry = this.countryList.filter(e => e.toLowerCase().startsWith(search.trim().toLowerCase()))
    })
  }  
  handleSearch(){
    let search = this.inputElement.nativeElement.value;
    if(search.length === 0){
      this.currentCountry = [];
      return;
    }
    this.currentCountry = this.countryList.filter(e => e.toLowerCase().startsWith(search.trim().toLowerCase()))
  }
  onBlur(){
    const tmpComposant = this;
    setTimeout(function(){
      tmpComposant.currentCountry = [];
    },200)
  }

  onDestroy(){
    this.sub.unsubscribe()
  }
}
