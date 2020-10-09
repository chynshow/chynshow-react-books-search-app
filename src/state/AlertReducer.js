export const SHOW_ALERT = 'SHOW_ALERT';
export const HIDE_ALERT = 'HIDE_ALERT';

export default (state, { type, payload }) => {
  switch (type) {
    case SHOW_ALERT:
      return {
        ...state,
        condition: payload.condition,
        message: payload.message,
      };

    case HIDE_ALERT:
      return {
        ...state,
        message: null,
        condition: null,
      };
    default:
      return state;
  }
};
