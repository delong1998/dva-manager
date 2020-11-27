import dva from 'dva';
import './index.css';

// 1. Initialize
// import createHistory from 'history/createBrowserHistory';
// import { createBrowserHistory as createHistory } from 'history'
const createBrowserHistory  = require("history").createBrowserHistory;
const app = dva({
  history: createBrowserHistory(),
});

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);
app.model(require('./models/products').default);
app.model(require('./models/user').default);
app.model(require('./models/books').default);
app.model(require('./models/login').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
