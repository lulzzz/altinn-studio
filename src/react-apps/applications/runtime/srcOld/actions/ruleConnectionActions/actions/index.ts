import { Action } from 'redux';
import * as ActionTypes from '../ruleConnectionActionTypes';

export interface ICheckIfRuleShouldRun extends Action {
  lastUpdatedComponentId: string;
  lastUpdatedDataBinding: IDataModelFieldElement;
  lastUpdatedDataValue: string;
  repeatingContainerId?: string;
}

export function checkIfRuleShouldRun(
  lastUpdatedComponentId: string,
  lastUpdatedDataBinding: IDataModelFieldElement,
  lastUpdatedDataValue: string,
  repeatingContainerId?: string,
): ICheckIfRuleShouldRun {
  return {
    type: ActionTypes.CHECK_IF_RULE_SHOULD_RUN,
    lastUpdatedComponentId,
    lastUpdatedDataBinding,
    lastUpdatedDataValue,
    repeatingContainerId,
  };
}