import { createBrowserHistory } from 'history';

const history = createBrowserHistory();


history.listen(() => {
  return window.scrollTo(0, 0)
});


export default history;