import { Component, Injectable, Input,OnInit } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  @Input() isLoading = false;
  constructor() { }

  ngOnInit(): void {
  }

}
