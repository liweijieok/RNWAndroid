/**
 * @author liweijie
 * create on 2018/5/25.
 * email:liweijieok@qq.com
 * desc: 与本地的交互模块，注意区分ios和Android
 * lastModify:
 */
import {Platform, NativeModules} from "react-native";

const System = NativeModules.System;

export default class Native {

    static isAndroid() {
        return Platform.OS === "android";
    }

    static hideBottomUIMenu() {
        if (this.isAndroid()) {
            System.hideBottomUIMenu();
        }
    }

    static showBottomUiMenu() {
        if (this.isAndroid()) {
            System.showBottomUiMenu();
        }
    }

}
