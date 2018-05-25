package com.github.liweijie.rnwandroid.js;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * @author liweijie
 * create on 2018/5/25.
 * email:liweijie@qq.com
 * desc:
 * lastModify:
 */

public class WAndroidPackage implements ReactPackage {

  @Override public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
    List<NativeModule> modules = new ArrayList<>();
    modules.add(new SystemModule(reactContext));
    return modules;
  }

  @Override public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
    return Collections.emptyList();
  }
}
