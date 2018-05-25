/**
 * @author liweijie
 * create on 2018/5/25.
 * email:liweijieok@qq.com
 * desc:
 * lastModify:
 */
import React from "react";
import {
    Scene,
    Router,
    Lightbox
} from "react-native-router-flux";
import SplashPage from "./page/SplashPage";
import HomePage from "./page/HomePage";


export const FRouters = () => {
    return (
        <Router

        >
            <Lightbox>
                <Scene key={"root"}>
                    <Scene key={"SplashPage"} component={SplashPage} initial={true} hideNavBar/>
                    <Scene key={"HomePage"} component={HomePage}/>
                </Scene>
            </Lightbox>

        </Router>
    );
};
