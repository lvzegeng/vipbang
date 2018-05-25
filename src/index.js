import dva from 'dva';
import createBrowserHistory from 'history/createBrowserHistory';
import createLoading from 'dva-loading';
import { message } from 'antd';
import './index.css';

// 1. Initialize
const app = dva({
  ...createLoading({
    effects: true,
  }),
  // history: createBrowserHistory(),
  onError(error) {
    message.error(error.message);
  },
});

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
