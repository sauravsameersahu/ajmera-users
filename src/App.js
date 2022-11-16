// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { store } from './redux/store';
import { Provider } from "react-redux"
import UserList from './components/userList';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={props => <UserList {...props} />} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
