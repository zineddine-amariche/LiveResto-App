import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import RootLiveRestoApp from './src/AppStack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View} from 'react-native';
import {COLORS} from './constants/theme';
import { dispatchLoginStorage } from './Redux/Actions/Login';
const App = () => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const {storage} = auth;

  let configHead = {
    headers: {
      'Content-Type': 'application/json',
      'Accept-Language': 'fr',
    },
  };

  const [checkAsyc, setcheckAsyc] = useState(false);
  useEffect(() => {
    setTimeout(async () => {
      try {
        let login = await AsyncStorage.getItem('login');
        let password = await AsyncStorage.getItem('password');
        if (storage) {
          dispatchLoginStorage(dispatch, configHead, login, password);
        }
        setcheckAsyc(true);
      } catch (e) {
        console.log('-------', e);
      }
    }, 4000);
  }, []);

  const Loadin = () => {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="small" color={COLORS.primary} />
      </View>
    );
  };
  return (
    <PaperProvider>
      <NavigationContainer>
        {checkAsyc ? <RootLiveRestoApp /> : <Loadin />}
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;

// const [userToken, setUserToken] = React.useState(null);
// const [donne, setDonne] = React.useState([]);
// const [ordersMap, setOrder] = React.useState([]);

// const [pairedDs, setPairedDs] = useState([]);
// const [foundDs, setFoundDs] = useState([]);

// const [bleOpend, setBleOpend] = useState(false);
// const [loading, setLoading] = useState(true);
// const [boundAddress, setBoundAddress] = useState('');
// const [name, setName] = useState('');
// let [count, setCount] = useState(1);

// if (loginState.isLoading) {
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <ActivityIndicator size="large" color="#000" />
//     </View>
//   );
// }

{
  /* <AuthContext.Provider value={authContext}>
<ImpContext.Provider value={impContext}>
  <CouterContext.Provider value={count}>
  <BoundAddress.Provider value={boundAddress}>
    <Loading.Provider value={loading}>
      <Name.Provider value={name}>
        <PairedDs.Provider value={pairedDs}>
          <BleOpend.Provider value={bleOpend}>
            <FoundDs.Provider value={foundDs}>
              <DataContext.Provider value={donne}>
                <ShowDataOpen.Provider value={openData}>
                </ShowDataOpen.Provider>
                      </DataContext.Provider>
                    </FoundDs.Provider>
                  </BleOpend.Provider>
                </PairedDs.Provider>
              </Name.Provider>
            </Loading.Provider>
          </BoundAddress.Provider>
          </CouterContext.Provider>
        </ImpContext.Provider>
      </AuthContext.Provider> */
}
