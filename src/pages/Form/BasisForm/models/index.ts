import type { Reducer, Effect } from 'umi';
import type { basisFormDataType } from '../data';
import { queryBasisForm, uploadBasisForm } from '../services';

export interface ModalState {
  formList: basisFormDataType;
}

export interface ModelType {
  namespace: string;
  state: ModalState;
  effects: {
    queryBasisForm: Effect;
    uploadBasisForm: Effect;
  };
  reducers: {
    saveData: Reducer<ModalState>;
  };
}

const Model: ModelType = {
  namespace: 'basisForm',

  state: {
    formList: {},
  },

  effects: {
    *queryBasisForm(_, { call, put }) {
      const response = yield call(queryBasisForm);
      yield put({
        type: 'saveData',
        payload: {
          formList: response.data,
        },
      });
    },
    *uploadBasisForm({ payload }, { call, put }) {
      const response = yield call(uploadBasisForm, payload);
      yield put({
        type: 'saveData',
        payload: {
          formList: response.data,
        },
      });
    },
  },

  reducers: {
    saveData(state, action) {
      return {
        ...(state as ModalState),
        ...action.payload,
      };
    },
  },
};

export default Model;
