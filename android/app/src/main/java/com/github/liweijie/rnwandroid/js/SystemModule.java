package com.github.liweijie.rnwandroid.js;

import android.os.Build;
import android.view.View;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * @author liweijie
 * create on 2018/5/25.
 * email:liweijie@qq.com
 * desc:
 * lastModify:
 */

public class SystemModule extends ReactContextBaseJavaModule {

  public SystemModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Override public String getName() {
    return "System";
  }

  /**
   * 隐藏虚拟按键，并且全屏
   */
  @ReactMethod public void hideBottomUIMenu() {
    //隐藏虚拟按键，并且全屏
    getCurrentActivity().runOnUiThread(new Runnable() {
      @Override public void run() {
        if (Build.VERSION.SDK_INT >= 16 && Build.VERSION.SDK_INT < 19) { // lower api
          View v = getCurrentActivity().getWindow().getDecorView();
          v.setSystemUiVisibility(View.GONE);
        } else if (Build.VERSION.SDK_INT >= 19) {
          //for new api versions.
          View decorView = getCurrentActivity().getWindow().getDecorView();
          int uiOptions = View.SYSTEM_UI_FLAG_HIDE_NAVIGATION
              | View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY
              | View.SYSTEM_UI_FLAG_FULLSCREEN;
          decorView.setSystemUiVisibility(uiOptions);
        }
      }
    });
  }

  @ReactMethod public void showBottomUiMenu() {
    //隐藏虚拟按键，并且全屏
    getCurrentActivity().runOnUiThread(new Runnable() {
      @Override public void run() {
        if (Build.VERSION.SDK_INT >= 16 && Build.VERSION.SDK_INT < 19) { // lower api
          View v = getCurrentActivity().getWindow().getDecorView();
          v.setSystemUiVisibility(View.VISIBLE);
        } else if (Build.VERSION.SDK_INT >= 19) {
          //for new api versions.
          View decorView = getCurrentActivity().getWindow().getDecorView();
          decorView.setSystemUiVisibility(View.SYSTEM_UI_FLAG_VISIBLE);
        }
      }
    });
  }
}
