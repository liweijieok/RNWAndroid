/**
 * @author liweijie
 * create on 2018/5/23.
 * email:liweijieok@qq.com
 * desc: 首页
 * lastModify:
 */
import React, {Component} from "react";
import {login} from "../http/Api";

import {View, Text} from "react-native";

export default class HomePage extends Component {
    componentDidMount(){
        login("liweijie", "liweijie");
    }
    render() {
        return (
            <View>
                <Text>RNWAndroid</Text>
            </View>
        );
    }
}
