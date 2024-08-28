import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
 @Input() records:Array<any>=[];
 @Input() headers:Array<any> = [];
 @Input() header = 'Title';
}
