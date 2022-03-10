import axios from 'axios';
import {
  DELETE_MESSAGES,
  LOADING,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
} from '../../Types/Login';

import AsyncStorage from '@react-native-async-storage/async-storage';

export const dispatchLogin = async (dispatch, configHead, values) => {
  // let url = `https://${process.env.REACT_APP_URL}/authenticate`;
  let url = 'https://dev500.live-resto.fr/apiv2e/establishments/authenticate';
  dispatch({type: LOADING});
  await axios
    .post(url, values, configHead)
    .then(res => {
      return (
        res,
        console.log('res1'),
        dispatch({type: LOGIN_SUCCESS, payload: res}),
        dispatch({type: DELETE_MESSAGES}),
        AsyncStorage.setItem('login', values.login),
        AsyncStorage.setItem('password', values.password)
      );
    })
    .catch(error => {
      return (
        error,
        dispatch({type: LOGIN_FAILED, payload: 'échec de connexion !'}),
        console.log('error.message', error.message)
      );
    });
};

export const dispatchLoginStorage = async (dispatch, configHead, userLogin,userPassword) => {
  dispatch({type: LOADING});
  let url = 'https://dev500.live-resto.fr/apiv2e/establishments/authenticate';
  let body =JSON.stringify( {
    login: userLogin,
    password: userPassword,
  });
  await axios
    .post(url, body, configHead)
    .then(res => {
      return (
        res,
        console.log('resAsync'),
        dispatch({type: LOGIN_SUCCESS, payload: res}),
        dispatch({type: DELETE_MESSAGES})
      );
    })
    .catch(error => {
      return (
        error,
        dispatch({type: LOGIN_FAILED, payload: 'échec de connexion !'}),
        console.log('error.message', error.message)
      );
    });
};

//   let url = 'https://dev500.live-resto.fr/apiv2e/establishments/authenticate';
//   dispatch({type: LOADING});
//   try {
//     // if (firstLogin) {
//       let response = await fetch(url, configHead,values);
//       response = await response.json();
//       dispatch({ type: LOGIN_SUCCESS, payload: response });
//     // }
//   } catch (error) {
//     dispatch({ type: LOGIN_FAILED, payload: error });
//   }
// };

// export const signOut = async () => {
//     return {
//         type: LOGOUT,
//       };
// };
// export const LoginFailed = data => {
//   console.log('data', data);
//   return {
//     type: LOGIN_FAILED,
//     payload: data,
//   };
// };
// export const LoginLoading = data => {
//   return {
//     type: LOADING,
//     payload: data,
//   };
// };
// export const reConnect = ( )=>{
//   setTimeout(async () => {
//     let userToken;
//     userToken = null;
//     try {
//       userToken = await AsyncStorage.getItem('userToken');
//       userLogin = await AsyncStorage.getItem('login');
//       userPassword = await AsyncStorage.getItem('password');
//       await fetch(
// 'https://dev500.live-resto.fr/apiv2e/establishments/authenticate',
//         {
//           method: 'POST',
//           headers: {
//             accept: 'application/json',
//             'Content-type': 'application/json',
//           },
//           body: JSON.stringify({
//             login: userLogin,
//             password: userPassword,
//           }),
//         },
//       )
//         .then(res => {
//           if (!res.ok) {
//             throw new Error('Network response was not ok');
//           }
//           return res.json();
//         })
//         .then(resData => {
//           console.log(
//             'resData.establishment.title |||||||||||||2 ',
//             resData.establishment.id,
//           );
//           console.log(
//             'resData.establishment.token |||||||||||||2 ',
//             resData.establishment.token,
//           );
//           setDonne(resData);
//           setUserToken('fgkj');
//         });
//     } catch (e) {
//       console.log(e);
//     }
//     dispatch({type: 'RETRIEVE_TOKEN', tokenId: userToken});
//   }, 1000);
// }

// export const dispatchLoginTest = async (values) => {
//   let userToken;
//   userToken = null;

//   if (login !== '' && password !== '') {
//     console.log(login, password, 'nom et password');
//     await fetch(
//       'https://dev500.live-resto.fr/apiv2e/establishments/authenticate',
//       {
//         method: 'POST',
//         headers: {
//           accept: 'application/json',
//           'Content-type': 'application/json',
//         },
//         body: JSON.stringify({
//           login: login,
//           password: password,
//         }),
//       },
//     )
//       .then(res => {
//         if (!res.ok) {
//           alert('Erreur de connection ');
//           throw new Error('Network response was not ok');
//         }
//         return res.json();
//       })

//       .then(resData => {
//         console.log(
//           'resData.establishment.title ||||||||||||| ',
//           resData.establishment.id,
//         );
//         console.log(
//           'resData.establishment.token ||||||||||||| ',
//           resData.establishment.token,
//         );
//         setDonne(resData);
//         try {
//           userToken = 'fgkj';
//           AsyncStorage.setItem('userToken', userToken);
//           AsyncStorage.setItem('login', login);
//           AsyncStorage.setItem('password', password);
//           console.log('user token fcnt', userToken, login, password);
//         } catch (e) {
//           console.log(e);
//         }

//         //setItemasync(userToken,login,password)
//         dispatch({
//           type: 'LOGIN',
//           id: login,
//           tokenId: userToken,
//           idPass: password,
//         });
//       });
//   }
// }
// const myHeaders = new Headers();
// const token = '8576b257-8e65-4d1b-95c2-47afba421c21';
// myHeaders.append('Content-Type', 'application/json');
// myHeaders.append('Authorization', 'Bearer ' + token);

// const authContext = React.useMemo(
//   () => ({

//     signOut: async () => {
//       // setUserToken(null);
//       // setIsLoading(false);
//       try {
//         await AsyncStorage.removeItem('userToken');
//       } catch (e) {
//         console.log(e);
//       }
//       dispatch({type: 'LOGOUT'});
//     },
//     signUp: () => {
//       setUserToken('fgkj');
//       setIsLoading(false);
//     },
//     toggleOpen: () => {
//       setOpenData({
//         ...openData,
//         visible: true,
//         ferme: false,
//         visiblealr: true,
//         btn: false,
//         heur: 'fermé a 21:00',
//         msg: 'Live Resto est ouvert',
//       });
//     },
//     toggleOff: () =>
//       setOpenData({
//         ...openData,
//         visible: false,
//         visiblealr: false,
//         ferme: true,
//         btn: true,
//         heur: "N'oubliez pas d'ouvrir à 12:00",
//         msg: 'Votre restaurant est fermé',
//       }),
//     toggleOffAlert: () =>
//       setOpenData({
//         ...openData,
//         ferme: false,
//         visiblealr: false,

//         visible: false,
//         btn: true,
//         heur: "N'oubliez pas d'ouvrir à 12:00",
//         msg: 'Votre restaurant est fermé',
//       }),
//     toggleOpenAlertOpen: () =>
//       setOpenData({
//         ...openData,
//         ferme: false,
//         visible: true,
//         visiblealr: false,
//         btn: false,
//       }),
//   }),
//   [],
// );
