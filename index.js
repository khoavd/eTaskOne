/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import {FlexBox} from './src/FlexBox';
import {ThreeBoxes} from './src/ThreeBoxes';
import {ThreeBoxesRow} from './src/ThreeBoxesRow';
import {FlexGrid} from './src/FlexGrid';
import NavApp from './src/NavApp';

AppRegistry.registerComponent(appName, () => NavApp);
