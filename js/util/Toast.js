/**
 * @author liweijie
 * create on 2018/5/23.
 * email:liweijieok@qq.com
 * desc:
 * lastModify:
 */
import {ToastAndroid, Platform} from "react-native";

export default class Toast {

    static showShort(msg) {
        this.show(msg, ToastAndroid.SHORT);
    }

    static showLong(msg) {
        this.show(msg, ToastAndroid.LONG);
    }

    static show(msg, duration) {
        if (Platform.OS === "android") {
            ToastAndroid.show(msg, duration);
        }
    }
}
