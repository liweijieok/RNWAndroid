/**
 * @author liweijie
 * create on 2018/5/25.
 * email:liweijieok@qq.com
 * desc: 开屏页
 * lastModify:
 */

import React from "react";
import {View, Image, Dimensions} from "react-native";
import * as Const from "../util/Const";
import Native from "../native/Native";
import {Actions} from "react-native-router-flux";

export default class SplashPage extends React.Component {

    constructor(props) {
        super(props);
        Native.hideBottomUIMenu();
        this.timer = setTimeout(() => {
            Native.showBottomUiMenu();
            //跳转
            Actions.HomePage();
        }, 2000);
    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }

    render() {
        return (
            <View style={{
                flex: 1,
                width: Dimensions.get("window").width,
                height: Dimensions.get("window").height,
                backgroundColor: Const._0091ea,
                justifyContent: "center",
                alignSelf: "center",
                padding: 0,
                margin: 0
            }}>
                <Image
                    resizeMode={"center"}
                    source={require("../../res/ic_logo.png")}/>
            </View>
        );
    }
}
