/**
 * Created by guoshuyu on 2017/11/7.
 */
import {createStore, applyMiddleware, compose} from "redux";
import createLogger from "redux-logger";
import handler from "./redecers/WReduces";

const configureStore = preloadedState => {
    return createStore(
        handler,
        preloadedState,
        compose(
            applyMiddleware(createLogger)
        )
    );
};

const store = configureStore();

export default store;
