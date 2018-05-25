/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from "react";
import {FRouters} from "./js/Router";
import {Provider} from "react-redux";
import store from "./js/store/store";

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                {FRouters()}
            </Provider>
        );
    }
}
