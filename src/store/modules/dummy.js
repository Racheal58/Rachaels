import { toast } from 'react-toastify';

export const dummyAction = () => async () => {
  try {
    toast.success('Your dummy action');
  } catch (error) {
    toast.error(`${error.response.data.message}`);
  }
};

const DEFAULT_STATE = {
  error: {},
  isLoading: false,
};

export const dummyReducer = (state = DEFAULT_STATE, { type }) => {
  switch (type) {
    default:
      return state;
  }
};
