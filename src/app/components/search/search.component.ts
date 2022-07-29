import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, tap,debounceTime,distinctUntilChanged, filter } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  inputSearch = new FormControl('');
  @Output () submited = new EventEmitter<string>();

  ngOnInit(): void {
    this.onChange();
  }
  private onChange():void{
    this.inputSearch.valueChanges
    .pipe(
      map((search:any)=>search.trim()),
      debounceTime(830),
      distinctUntilChanged(),
      filter((search:string)=>search !== ''),
      tap((search:string)=>this.submited.emit(search) )
    )
    .subscribe();
  }
}
