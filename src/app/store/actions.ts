/* tslint:disable:object-literal-shorthand */

import * as actionTypes from './actionTypes';

/* action creators */

export const addLabel = (id: number, name: string) => {
  return {
    type: actionTypes.ADD_LABEL,
    id: id,
    name: name
  };
};

export const delLabel = (id: number) => {
  return {
    type: actionTypes.DEL_LABEL,
    id: id,
  };
};
