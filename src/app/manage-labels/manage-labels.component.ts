import { NgRedux, select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { IAppState } from '../store/store';
import * as actions from '../store/actions';

@Component({
  selector: 'app-manage-labels',
  templateUrl: './manage-labels.component.html',
  styleUrls: ['./manage-labels.component.css']
})
export class ManageLabelsComponent implements OnInit {
  @select() labels;
  newLabel = '';
  nextId = 1;


  createNewLabel() {
    this.ngRedux.dispatch(actions.addLabel(this.nextId, this.newLabel));
    this.nextId++;
    this.newLabel = '';
  }

  deleteLabel(id: number) {
    this.ngRedux.dispatch(actions.delLabel(id));
  }

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
  }

}

