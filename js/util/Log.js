/**
 * @author liweijie
 * create on 2018/5/23.
 * email:liweijieok@qq.com
 * desc:
 * lastModify:
 */

const TAG = "RNWAndroid==>";
export default class Log {

    static i(msg){
        console.info(TAG + msg);
    }

    static e(msg){
        console.error(TAG + msg);
    }
}
