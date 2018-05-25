/**
 *
 * 作者：黎伟杰 on 2018/3/23.
 * 邮箱：liweijieok@qq.com
 * description：
 * update by:
 * update day:
 */
import {combineReducers} from "redux";


// 原始默认state
const defaultState = {};

function actionHandle(state = defaultState, action) {
    switch (action.type) {
        default:
            return state;
    }
}

export default combineReducers({
    actionHandle
});
