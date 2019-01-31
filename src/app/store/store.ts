import * as actionTypes from './actionTypes';
import {AnyAction} from 'redux';

enum ProjectAction {
  OPEN = 'OPEN',
  CLOSE = 'CLOSE'
}

export interface ProjectLabel {
  id: number;
  name: string;
}

export interface RCPAction {
  id: number;
  label: ProjectLabel;
  action: ProjectAction;
  date: Date;
}

export interface IAppState {
  labels: ProjectLabel[];
}

export const INITIAL_STATE: IAppState = {
  labels: [],
};

export const updateObject = (oldObject, updatedProperties) => ({...oldObject, ...updatedProperties});

/* funkcje wołane przez reduktor */
const addLabel = (state: IAppState, action: AnyAction): IAppState => {
  const newLabel: ProjectLabel = {
    id: action.id,
    name: action.name
  };
  const updatedLabels = state.labels.concat(newLabel);
  return updateObject(state, {labels: updatedLabels});
};

const delLabel = (state: IAppState, action: AnyAction) => {
  return updateObject(state, { labels: state.labels.filter(label => label.id !== action.id)});
};

/* reduktor */
export function rootReducer(state: IAppState, action: AnyAction): IAppState {
  switch (action.type) {
    case actionTypes.ADD_LABEL: return addLabel(state, action);
    case actionTypes.DEL_LABEL: return delLabel(state, action);
  }
  return state;
}

