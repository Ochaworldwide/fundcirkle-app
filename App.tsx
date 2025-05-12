// import React, {useEffect, useState, useCallback, useRef} from 'react';
// import {
//   useColorScheme,
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   RefreshControl,
//   NativeScrollEvent,
//   NativeSyntheticEvent,
// } from 'react-native';
// import NetInfo from '@react-native-community/netinfo';
// import {Colors} from 'react-native/Libraries/NewAppScreen';
// import WebViewScreen, {WebViewScreenRef} from './screens/screens/WebViewScreen';
// import Intro from './src/components/Intro'; // Make sure you have this
// import SecondIntro from './src/components/SecondIntro';
// import ThirdIntro from './src/components/ThirdIntro';

// function NoInternetScreen() {
//   return (
//     <View style={styles.noInternetContainer}>
//       <Text style={styles.noInternetText}>No Internet Connection</Text>
//     </View>
//   );
// }

// function Prologue({
//   introStep
// }: {
//   introStep: number;
// }) {
//   return (
//     <View
//       style={styles.prologueContainer}
//     >
//       {introStep === 0 && <Intro />}
//       {introStep === 1 && <SecondIntro />}
//     </View>
//   );
// }

// function App(): React.JSX.Element {
//   const [introStep, setIntroStep] = useState(0);
//   const [isConnected, setIsConnected] = useState<boolean | null>(null);
//   const [refreshing, setRefreshing] = useState(false);
//   const [isAtTop, setIsAtTop] = useState(true);
//   const [showWebView, setShowWebView] = useState(false);

//   const webViewRef = useRef<WebViewScreenRef | null>(null);

//   useEffect(() => {
//     const checkConnection = async () => {
//       const state = await NetInfo.fetch();
//       setIsConnected(state.isConnected);
//     };

//     checkConnection();

//     const introTimers = [
//       setTimeout(() => setIntroStep(1), 2000),
//       setTimeout(() => setIntroStep(2), 6000),
//     ];

//     return () => introTimers.forEach(clearTimeout);
//   }, []);

//   useEffect(() => {
//     const unsubscribe = NetInfo.addEventListener(state => {
//       setIsConnected(state.isConnected);
//     });
//     return () => unsubscribe();
//   }, []);

//   const onRefresh = useCallback(() => {
//     if (!isAtTop || !showWebView) return;
//     setRefreshing(true);
//     webViewRef.current?.reloadWebView();
//     setTimeout(() => setRefreshing(false), 1000);
//   }, [isAtTop, showWebView]);

//   const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
//     const {contentOffset} = event.nativeEvent;
//     setIsAtTop(contentOffset.y <= 0);
//   };

//   const handleEnterApp = () => {
//     setShowWebView(true);
//   };

//   return (
//     <View style={{flex: 1}}>
//       {/* Background Content */}
//       <ScrollView
//         contentContainerStyle={styles.container}
//         // refreshControl={
//         //   <RefreshControl
//         //     refreshing={refreshing}
//         //     onRefresh={onRefresh}
//         //     enabled={isAtTop}
//         //   />
//         // }
//         // onScroll={handleScroll}
//         // scrollEventThrottle={16}
//         >
//         {isConnected ? (
//           <WebViewScreen ref={webViewRef} />
//         ) : (
//           <NoInternetScreen />
//         )}
//       </ScrollView>

//       {/* Foreground: Intro Screens */}
//       {!showWebView && introStep < 2 && (
//         <View style={styles.prologueContainer} pointerEvents="auto">
//           <Prologue introStep={introStep} />
//         </View>
//       )}

//       {/* ThirdIntro overlay */}
//       {!showWebView && introStep === 2 && (
//         <View style={styles.prologueContainer} pointerEvents="auto">
//           <ThirdIntro onEnterApp={handleEnterApp} />
//         </View>
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//   },
//   noInternetContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'red',
//   },
//   noInternetText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: 'white',
//   },
//   prologueContainer: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     zIndex: 10,
//     backgroundColor: 'transparent',
//   },
// });

// export default App;

import React, {useEffect, useState, useCallback, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  RefreshControl,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';
import WebViewScreen, {WebViewScreenRef} from './screens/screens/WebViewScreen';
import Intro from './src/components/Intro';
import SecondIntro from './src/components/SecondIntro';
import ThirdIntro from './src/components/ThirdIntro';
import NoInternetScreen from './src/components/NoInternetScreen';

function Prologue({introStep}: {introStep: number}) {
  return (
    <View style={styles.prologueContainer}>
      {introStep === 0 && <Intro />}
      {introStep === 1 && <SecondIntro />}
    </View>
  );
}

function App(): React.JSX.Element {
  const [introStep, setIntroStep] = useState(0);
  const [isConnected, setIsConnected] = useState<boolean | null>(null);
  const [refreshing, setRefreshing] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [showWebView, setShowWebView] = useState(false);
  const [isFirstTime, setIsFirstTime] = useState<boolean | null>(null);

  const webViewRef = useRef<WebViewScreenRef | null>(null);

  useEffect(() => {
    const checkConnection = async () => {
      const state = await NetInfo.fetch();
      setIsConnected(state.isConnected);
    };

    // const init = async () => {
    //   const hasLaunched = await AsyncStorage.getItem('hasLaunched');
    //   if (hasLaunched === null) {
    //     await AsyncStorage.setItem('hasLaunched', 'true');
    //     setIsFirstTime(true);
    //     setIntroStep(0);
    //     setTimeout(() => setIntroStep(1), 2000);
    //     setTimeout(() => setIntroStep(2), 6000);
    //   } else {
    //     setIsFirstTime(false);
    //     setIntroStep(0);
    //     setTimeout(() => setShowWebView(true), 2000);
    //   }
    // };
    const init = async () => {
      const hasLaunched = await AsyncStorage.getItem('hasLaunched');
      if (hasLaunched === null) {
        await AsyncStorage.setItem('hasLaunched', 'true');
        setIsFirstTime(true);
        setIntroStep(0);
        setTimeout(() => setIntroStep(1), 2000);
        setTimeout(() => setIntroStep(2), 6000);
      } else {
        setIsFirstTime(false);
        setIntroStep(0);
        setTimeout(() => {
          setShowWebView(true);
          webViewRef.current?.reloadWebView(); // 👈 Reload the WebView for returning users
        }, 2000);
      }
    };

    checkConnection();
    init();
  }, []);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });
    return () => unsubscribe();
  }, []);

  const onRefresh = useCallback(() => {
    if (!isAtTop || !showWebView) return;
    setRefreshing(true);
    webViewRef.current?.reloadWebView();
    setTimeout(() => setRefreshing(false), 1000);
  }, [isAtTop, showWebView]);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const {contentOffset} = event.nativeEvent;
    setIsAtTop(contentOffset.y <= 0);
  };

  const handleEnterApp = () => {
    setShowWebView(true);
  };

  const handleRetry = async () => {
    const state = await NetInfo.fetch();
    setIsConnected(state.isConnected);

    if (state.isConnected) {
      // Optionally trigger reload or continue intro logic
      if (!showWebView && !isFirstTime) {
        setShowWebView(true);
      }
    }
  };

  return (
    <View style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={styles.container}
        // refreshControl={
        //   <RefreshControl
        //     refreshing={refreshing}
        //     onRefresh={onRefresh}
        //     enabled={isAtTop}
        //   />
        // }
        onScroll={handleScroll}
        scrollEventThrottle={16}>
        {isConnected ? (
          <WebViewScreen ref={webViewRef} />
        ) : (
          <NoInternetScreen onRetry={handleRetry} />
        )}
      </ScrollView>

      {/* Foreground: Intro Screens */}
      {isFirstTime && !showWebView && introStep < 2 && (
        <View style={styles.prologueContainer} pointerEvents="auto">
          <Prologue introStep={introStep} />
        </View>
      )}

      {/* ThirdIntro overlay */}
      {isFirstTime && !showWebView && introStep === 2 && (
        <View style={styles.prologueContainer} pointerEvents="auto">
          <ThirdIntro onEnterApp={handleEnterApp} />
        </View>
      )}

      {/* Returning users */}
      {!isFirstTime && !showWebView && introStep === 0 && (
        <View style={styles.prologueContainer} pointerEvents="auto">
          <Intro />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  noInternetContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  noInternetText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  prologueContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 10,
    backgroundColor: 'transparent',
  },
});

export default App;
