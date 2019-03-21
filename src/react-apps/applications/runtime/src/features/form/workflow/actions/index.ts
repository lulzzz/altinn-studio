import {
  ActionCreatorsMapObject,
  bindActionCreators,
  Action,
} from 'redux';
import { store } from '../../../../store';
import { WorkflowSteps } from '../typings';

import * as WorkflowStateActions from './workflowState';

export interface IFormWorkflowActions extends ActionCreatorsMapObject {
  getCurrentState: (url: string) => WorkflowStateActions.IGetCurrentState;
  getCurrentStateFulfilled: (state: WorkflowSteps) => WorkflowStateActions.IGetCurrentStateFulfilled;
  getCurrentStateRejected: (error: Error) => WorkflowStateActions.IGetCurrentStateRejected;
  setCurrentState: (url: string, state: WorkflowSteps) => WorkflowStateActions.ISetCurrentState;
  setCurrentStateFullfilled: () => Action;
  setCurrentStateRejected: (error: Error) => WorkflowStateActions.ISetCurrentStateRejected;
}

const actions: IFormWorkflowActions = {
  getCurrentState: WorkflowStateActions.getCurrentState,
  getCurrentStateFulfilled: WorkflowStateActions.getCurrentStateFulfilled,
  getCurrentStateRejected: WorkflowStateActions.getCurrentStateRejected,
  setCurrentState: WorkflowStateActions.setCurrentState,
  setCurrentStateFullfilled: WorkflowStateActions.setCurrentStateFulfilled,
  setCurrentStateRejected: WorkflowStateActions.setCurrentStateRejected,
}

const WorkflowActions: IFormWorkflowActions = bindActionCreators<any, any>(actions, store.dispatch);

export default WorkflowActions;