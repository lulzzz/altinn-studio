import { Action } from 'redux';
import * as ActionTypes from '../../formDesignerActionTypes';

export interface IUpdateFormComponentOrderActionRejected extends Action {
  error: Error;
}

export interface IUpdateFormComponentOrderAction extends Action {
  id: string;
  newPositionIndex: number;
  sourceContainerId: string;
  destinationContainerId: string;
}

export interface IUpdateFormComponentOrderActionFulfilled extends Action {
  updatedOrder: any;
  containerId?: string;
}

export function updateFormComponentOrderActionFulfilled(updatedOrder: any, containerId?: string):
  IUpdateFormComponentOrderActionFulfilled {
  return {
    type: ActionTypes.UPDATE_FORM_COMPONENT_ORDER_FULFILLED,
    updatedOrder,
    containerId,
  };
}

export function updateFormComponentOrderActionRejected(error: Error): IUpdateFormComponentOrderActionRejected {
  return {
    type: ActionTypes.UPDATE_FORM_COMPONENT_ORDER_REJECTED,
    error,
  };
}

export function updateFormComponentOrderAction(
  id: string,
  newPositionIndex: number,
  destinationContainerId: string,
  sourceContainerId: string,
):
  IUpdateFormComponentOrderAction {
  return {
    type: ActionTypes.UPDATE_FORM_COMPONENT_ORDER,
    id,
    newPositionIndex,
    destinationContainerId,
    sourceContainerId,
  }
}
