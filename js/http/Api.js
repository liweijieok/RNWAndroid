/**
 * @author liweijie
 * create on 2018/5/23.
 * email:liweijieok@qq.com
 * desc: 接口请求
 * lastModify:
 */
import * as Const from "../util/Const";
import Log from "../util/Log";


const HEADER = (
    {
        "Content-Type": "multipart/form-data",
        "Connection": "keep-alive",
        "Cache-Control": "no-cache",
        "Accept": "application/json;charset=UTF-8"
    }
);

const UN = "username";
const PW = "password";

/**
 * 设置请求超时
 * @param promise
 * @param timeout
 * @returns {Promise<any>}
 */
function wrapRequest(promise, timeout = 10000) {
    return Promise.race([
        promise,
        new Promise(function (resolve, reject) {
            setTimeout(() => {
                reject({code: -1, message: "请求超时，请检查网络"});
            }, timeout);
        })
    ]).catch(e => {
        return Promise.reject(e);
    });
}

function body(params) {
    Log.i("http params=>" + JSON.stringify(params));
    return {
        method: "POST",
        credentials: "include",
        header: HEADER,
        body: params
    };
}

//发起POST请求
function doPost(params, url) {
    Log.i("http url=>" + url);
    const request = fetch(url, body(params))
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return {code: -2, message: "请求超时，服务器发生错误"};
        })
        .then(json => {
            Log.i("http response =>" + JSON.stringify(json));
            return json;
        })
        .catch(e => {
            Log.i("http error =>" + e);
            return e;
        });
    return wrapRequest(request);
}


export function login(username, password) {
    const params = new FormData();
    params.append(UN, username);
    params.append(PW, password);
    return doPost(params, Const.LOGIN);
}



