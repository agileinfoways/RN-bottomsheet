
# react-native-bottom-sheet

## Getting started
`$ npm install react-navigation --save`
`$ npm install react-native-gesture-handler --save`
`$ npm install react-native-reanimated --save`
`$ npm install reanimated-bottom-sheet --save`

### Installation

##### Javascript
1. Open package.json file and check for following dependenices and dev-dependencies:
- Versions may differ but make sure whatever version you use that must be compatible with one another.

   ```
    "dependencies": {
      "react": "16.8.3",
      "react-native": "0.59.3",
      "react-native-gesture-handler": "^1.3.0",
      "react-native-reanimated": "^1.1.0",
      "react-navigation": "^3.11.1",
      "reanimated-bottom-sheet": "^1.0.0-alpha.13"
     },
    "devDependencies": {
      "@babel/core": "^7.5.5",
      "@babel/plugin-proposal-decorators": "^7.4.4",
      "@babel/runtime": "^7.5.5",
      "babel-jest": "^24.8.0",
      "jest": "^24.8.0",
      "metro-react-native-babel-preset": "^0.55.0",
      "react-test-renderer": "16.8.3"
	  },
    
   ```
   
2. Open babel.config.js inside your main project folder and check for following code:
   ```
	module.exports = {
        presets: ['module:metro-react-native-babel-preset'],
        "plugins": [
          [
            "@babel/plugin-proposal-decorators",
            {
              "legacy": true
            }
          ]
        ]
  	};
   ```
3. Open terminal with your main project path and 
- Do following commands
 - npm install

### Mostly automatic installation

`$ react-native link`

### Manual installation

#### Android
   
1. Append the following lines to `android/settings.gradle`:
  	```
    include ':react-native-reanimated'
    project(':react-native-reanimated').projectDir = new File(rootProject.projectDir,   '../node_modules/react-native-reanimated/android')
    include ':react-native-gesture-handler'
    project(':react-native-gesture-handler').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-gesture-handler/android')    
  	```
2. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
    implementation project(':react-native-reanimated')
    implementation project(':react-native-gesture-handler')
  	``` 

3. Open up `android/app/src/main/java/[...]/MainActivity.java`
- Add following lines to the imports at the top of the file. 
	```
	import com.facebook.react.ReactActivityDelegate;
	import com.facebook.react.ReactRootView;
	import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;
    ```
 
 - Add following method for make gestures enable.

	```
      @Override
	  protected ReactActivityDelegate createReactActivityDelegate() {
        return new ReactActivityDelegate(this, getMainComponentName()) {
            @Override
            protected ReactRootView createRootView() {
                return new RNGestureHandlerEnabledRootView(MainActivity.this);
            }
        };
    }
  	```   
    
4. Open up `android/app/src/main/java/[...]/MainApplication.java`
- Add following lines to the imports at the top of the file. 
	```
	import com.swmansion.reanimated.ReanimatedPackage;
	import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
    ```
 
 - Update following method

	```
    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
          new ReanimatedPackage(),
          new RNGestureHandlerPackage()
          ...
      );
    }
  	```   
## Usage
This is demo for bottom swipable sheet using gesture handler.

```javascript
import BottomSheet from "reanimated-bottom-sheet";

<BottomSheet
	snapPoints={["20%", "90%"]}
	renderContent={this.renderInner}
	renderHeader={this.renderHeader}
	initialSnap={0}
/>

```

Checkout render method of `home.component.js` for more details.

We have done conditional rendering for TouchableOpacity click events, as with bottom sheet touchableOpacity onPress event is fired on longPress in android automatically as we have enabled gestures.

Please check `renderRowForAndroid and  renderRowForIOS ` for more details. 
