import update from 'immutability-helper';
import { Action, Reducer } from 'redux';
import * as deleteActions from '../actions/delete';
import * as fetchActions from '../actions/fetch';
import * as FileUploadActionsTypes from '../actions/types';
import * as uploadActions from '../actions/upload';
import { IAttachments } from '../types';

export interface IFormFileUploadState {
  attachments: IAttachments;
  validationResults: any;
}

const initialState: IFormFileUploadState = {
  attachments: {},
  validationResults: {},
};

const formFileUploadReducer: Reducer<IFormFileUploadState> = (
  state: IFormFileUploadState = initialState,
  action?: Action,
): IFormFileUploadState => {
  if (!action) {
    return state;
  }
  switch (action.type) {
    case (FileUploadActionsTypes.UPLOAD_ATTACHMENT): {
      const { file, attachmentType, tmpAttachmentId, componentId }
        = action as uploadActions.IUploadAttachmentAction;
      if (!state.attachments[attachmentType]) {
        state = update<IFormFileUploadState>(state, {
          attachments: {
            [attachmentType]: { $set: [] },
          },
        });
      }
      return update<IFormFileUploadState>(state, {
        attachments: {
          [attachmentType]: {
            $push: [{ name: file.name, size: file.size, uploaded: false, id: tmpAttachmentId, deleting: false }],
          },
        },
        validationResults: {
          [componentId]: {
            $set: {},
          },
        },
      });
    }

    case (FileUploadActionsTypes.UPLOAD_ATTACHMENT_REJECTED): {
      const { attachmentType, attachmentId, componentId, validationMessages } =
        action as uploadActions.IUploadAttachmentActionRejected;
      return update<IFormFileUploadState>(state, {
        attachments: {
          [attachmentType]: {
            $set: state.attachments[attachmentType].filter((attachment) => attachment.id !== attachmentId),
          },
        },
        validationResults: {
          [componentId]: {
            $set: validationMessages,
          },
        },
      });
    }

    case (FileUploadActionsTypes.UPLOAD_ATTACHMENT_FULFILLED): {
      const { attachment, attachmentType, tmpAttachmentId } =
        action as uploadActions.IUploadAttachmentActionFulfilled;
      const index = state.attachments[attachmentType].findIndex((item) => item.id === tmpAttachmentId);
      if (index < 0) {
        return state;
      }
      return update<IFormFileUploadState>(state, {
        attachments: {
          [attachmentType]: {
            [index]: { $set: attachment },
          },
        },
      });
    }

    case (FileUploadActionsTypes.DELETE_ATTACHMENT_FULFILLED): {
      const { attachmentId: id, attachmentType } = action as deleteActions.IDeleteAttachmentActionFulfilled;
      return update<IFormFileUploadState>(state, {
        attachments: {
          [attachmentType]: {
            $set: state.attachments[attachmentType].filter((attachment) => attachment.id !== id),
          },
        },
      });
    }

    case (FileUploadActionsTypes.DELETE_ATTACHMENT_REJECTED): {
      const { attachment, attachmentType, componentId, validationMessages } =
        action as deleteActions.IDeleteAttachmentActionRejected;
      const newAttachment = { ...attachment, deleting: false };
      const index = state.attachments[attachmentType].findIndex((element) => element.id === attachment.id);
      if (index < 0) {
        return state;
      }
      return update<IFormFileUploadState>(state, {
        attachments: {
          [attachmentType]: {
            [index]: { $set: newAttachment },
          },
        },
        validationResults: {
          [componentId]: {
            $set: validationMessages,
          },
        },
      });
    }

    case (FileUploadActionsTypes.FETCH_ATTACHMENTS_FULFILLED): {
      const { attachments } = action as fetchActions.IFetchAttachmentsActionFulfilled;
      return update<IFormFileUploadState>(state, {
        attachments: {
          $set: attachments,
        },
      });
    }
    default:
      return state;
  }
};

export default formFileUploadReducer;