import appReducer, {
  FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_FAIL,
  FETCH_BOOKS_SUCCESS,
  SET_MAX_RESULTS,
  SET_START_INDEX,
  SET_SEARCH_PARAMS,
  CLEAR_STATE,
  SET_VIEW,
  HIDE_ALERT,
  SHOW_ALERT,
} from './AppReducer';
import { initialState } from './AppContext';

describe('test app reducer', () => {
  it('test reducer without parameters', () => {
    const res = appReducer([], {});
    expect(res).toEqual([]);
  });

  it('test reducer with initial state', () => {
    const res = appReducer(initialState, {});
    expect(res).toEqual(initialState);
  });

  it('test reducer with FETCH_BOOKS_REQUEST action', () => {
    const action = { type: FETCH_BOOKS_REQUEST };
    const res = appReducer(initialState, action);
    expect(res).toEqual({ ...initialState, loading: true });
  });

  it('test reducer with FETCH_BOOKS_FAIL action', () => {
    const action = { type: FETCH_BOOKS_FAIL };
    const res = appReducer(initialState, action);
    expect(res).toEqual({ ...initialState, totalResults: 0 });
  });

  it('test reducer with FETCH_BOOKS_SUCCESS action', () => {
    const payload = {
      books: [
        { id: 1, title: 'Book title' },
        { id: 2, title: 'Book title' },
        { id: 3, title: 'Book title' },
      ],
      totalResults: 10,
    };
    const action = { type: FETCH_BOOKS_SUCCESS, payload };
    const res = appReducer(initialState, action);
    const output = {
      ...initialState,
      totalResults: action.payload.totalResults,
      books: [...initialState.books, ...action.payload.books],
    };
    expect(res).toStrictEqual(output);
  });

  it('test reducer with SET_MAX_RESULTS action', () => {
    const payload = 11;
    const action = { type: SET_MAX_RESULTS, payload };
    const res = appReducer(initialState, action);
    expect(res).toEqual({ ...initialState, maxResults: action.payload });
  });

  it('test reducer with SET_START_INDEX action', () => {
    const payload = 1;
    const action = { type: SET_START_INDEX, payload };
    const res = appReducer(initialState, action);
    expect(res).toEqual({ ...initialState, startIndex: action.payload });
  });

  it('test reducer with SET_SEARCH_PARAMS action', () => {
    const payload = {
      query: 'Query',
      inauthor: 'Author',
      inpublisher: 'Publisher',
      isbn: 'ISBN',
    };

    const action = { type: SET_SEARCH_PARAMS, payload };
    const res = appReducer(initialState, action);
    expect(res).toEqual({ ...initialState, searchParams: action.payload });
  });

  it('test reducer with CLEAR_STATE action', () => {
    const action = { type: CLEAR_STATE };
    const res = appReducer(initialState, action);
    expect(res).toEqual({ ...initialState, totalResults: 0 });
  });

  it('test reducer with SET_VIEW action', () => {
    const payload = 'one';
    const action = { type: SET_VIEW, payload };
    const res = appReducer(initialState, action);
    expect(res).toEqual({ ...initialState, viewType: action.payload });
  });

  it('test reducer with SHOW_ALERT action', () => {
    const payload = { alertCondition: 'warning', alertMessage: 'alertMessage' };
    const action = { type: SHOW_ALERT, payload };
    const res = appReducer(initialState, action);
    expect(res).toEqual({
      ...initialState,
      alertCondition: action.payload.alertCondition,
      alertMessage: action.payload.alertMessage,
    });
  });

  it('test reducer with HIDE_ALERT action', () => {
    const action = { type: HIDE_ALERT };
    const res = appReducer(initialState, action);
    expect(res).toEqual({
      ...initialState,
      alertMessage: null,
      alertCondition: null,
    });
  });
});
