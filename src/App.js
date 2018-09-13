import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './routes/home/index'

//const Home = () => {
//  return <p>首页</p>;
//}
//
//const Test = () => {
//  return <p>测试组件</p>;
//}
//
//const User = () => {
//  return <p>用户页</p>;
//}
//
//const Login = () => {
//  return <p>请登录</p>;
//}
//
//const NotFound = () => {
//  return <p>404 找不到</p>;
//}
//
//const isLogin = false;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          {/*<Route path="/test" exact component={ Test }/>*/}
          {/*<Route path="/login" exact component={ Login }/>*/}
          {/*<Route path="/user" exact render={ () => isLogin ? <User/> : <Redirect to="/login"/> }/>*/}
          {/*<Route path="/" exact component={ Home }/>*/}
          {/*<Route component={ NotFound }/>*/}
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
