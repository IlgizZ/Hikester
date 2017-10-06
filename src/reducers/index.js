import { combineReducers } from 'redux';
import AuthReducer from './auth/auth_reducer'
import PhoneReducer from './auth/phone_reducer'
import ProfileSettingReducer from './profile/profile_settings_reducer.js'
import Geolocation from './geolocation/geolocation.js'

const rootReducer = combineReducers({
  user: AuthReducer,
  phone: PhoneReducer,
  profile_settings: ProfileSettingReducer,
  geolocation: Geolocation

});

export default rootReducer;
