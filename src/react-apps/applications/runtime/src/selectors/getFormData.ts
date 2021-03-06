import { createSelector, createSelectorCreator, defaultMemoize } from 'reselect';
const isEqual = require('lodash.isequal');

const formDataSelector = (state: IAppState) => {
  return state.formFiller.formData;
};

const formDataForContainerSelector = (state: IAppState, props: any, index?: number) => {
  const layout = state.formDesigner.layout;
  const componentsInContainer = Object.keys(layout.components).filter(
    (componentId: string) => {
      return layout.order[props.id].indexOf(componentId) > -1;
    },
  );

  const container = layout.containers[props.id];
  const filteredFormData: any = {};

  for (const componentId of componentsInContainer) {
    const component = layout.components[componentId];
    if (!component.dataModelBindings) {
      continue;
    }
    for (const dataModelKey in component.dataModelBindings) {
      if (!dataModelKey) {
        continue;
      }
      let formDataKey = component.dataModelBindings[dataModelKey];
      if (!formDataKey) {
        continue;
      }
      if (container.repeating && container.dataModelGroup && index != null) {
        formDataKey = formDataKey.replace(container.dataModelGroup, `${container.dataModelGroup}[${index}]`);
      }
      const formData = state.formFiller.formData;
      if (formData[formDataKey]) {
        filteredFormData[component.dataModelBindings[dataModelKey]] = formData[formDataKey];
      }
    }
  }
  return filteredFormData;
};

const createDeepEqualSelector = createSelectorCreator(
  defaultMemoize,
  isEqual,
);

const unsavedChangesSelector = (state: IAppState) => {
  return state.formFiller.unsavedChanges;
};

const validationErrorsSelector = (state: IAppState) => {
  return state.formFiller.validationResults;
};

const getFormData = () => {
  return createDeepEqualSelector(
    [formDataForContainerSelector],
    (formData: any) => {
      if (!formData) {
        return [];
      }
      return formData;
    },
  );
};

const getFormDataCount = () => {
  return createSelector(
    [formDataSelector],
    (formData: any) => {
      return Object.keys(formData).length;
    },
  );
};

const getUnsavedChanges = () => {
  return createSelector(
    [unsavedChangesSelector],
    (unsavedChanges: boolean) => {
      return unsavedChanges;
    },
  );
};

const getValidationErrors = () => {
  return createSelector(
    [validationErrorsSelector],
    (validationResults: IValidationResults) => {
      return validationResults;
    },
  );
};

export const makeGetFormDataSelector = getFormData;
export const makeGetFormDataCountSelector = getFormDataCount;
export const makeGetUnsavedChangesSelector = getUnsavedChanges;
export const makeGetValidationErrorsSelector = getValidationErrors;
