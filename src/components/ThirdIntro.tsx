// import React, {useEffect, useRef} from 'react';
// import {View, StyleSheet, Dimensions, Animated} from 'react-native';
// import FundLogo2 from '../../assets/images/splash/fund-logo-2.svg';
// import FundLogo3 from '../../assets/images/splash/fund-logo-3.svg';
// import Carousel from './Carousel';

// const {width, height} = Dimensions.get('window');

// const ThirdIntro: React.FC = () => {
//   const logoOpacity = useRef(new Animated.Value(0)).current;
//   const splashTranslateY = useRef(new Animated.Value(height)).current;
//   const splashOpacity = useRef(new Animated.Value(0)).current;

//   useEffect(() => {
//     Animated.timing(logoOpacity, {
//       toValue: 1,
//       duration: 1000,
//       useNativeDriver: true,
//     }).start();

//     const timeout = setTimeout(() => {
//       Animated.parallel([
//         Animated.timing(splashTranslateY, {
//           toValue: 0,
//           duration: 2000,
//           useNativeDriver: true,
//         }),
//         Animated.timing(splashOpacity, {
//           toValue: 1,
//           duration: 2000,
//           useNativeDriver: true,
//         }),
//       ]).start();
//     }, 1000);

//     return () => clearTimeout(timeout);
//   }, [logoOpacity, splashTranslateY, splashOpacity]);

//   return (
//     <View style={styles.container}>
//       <Animated.View style={[styles.logoContainer, {opacity: logoOpacity}]}>
//         <View style={{marginRight: 8}}>
//           <FundLogo2 width={100} height={100} />
//         </View>
//         <FundLogo3 width={100} height={100} />
//       </Animated.View>

//       <Animated.View
//         style={[
//           styles.splashContainer,
//           {
//             transform: [{translateY: splashTranslateY}],
//             opacity: splashOpacity,
//           },
//         ]}>
//         {/* Optionally keep splash background image or replace with another SVG if desired */}
//         <Carousel />
//       </Animated.View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: 'white',
//     height: '100%',
//     justifyContent: 'center',
//   },
//   logoContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginBottom: 40,
//     marginTop: 20,
//   },
//   splashContainer: {
//     alignItems: 'center',
//     position: 'relative',
//   },
// });

// export default ThirdIntro;




// import React, {useEffect} from 'react';
// import {View, StyleSheet, Dimensions} from 'react-native';
// import Animated, {
//   useSharedValue,
//   useAnimatedStyle,
//   withTiming,
//   Easing,
// } from 'react-native-reanimated';

// // Import SVGs
// import GreenFundLogo2 from '../../assets/images/splash/green-fund-logo-2.svg';
// import GreenFundLogo3 from '../../assets/images/splash/green-fund-logo-3.svg';
// import SplashBg from '../../assets/images/splash/splash-bg.svg';

// // Custom Carousel component
// import Carousel from './Carousel';

// const {width, height} = Dimensions.get('window');

// const ThirdIntro = () => {
//   const logoOpacity = useSharedValue(0);
//   const splashOpacity = useSharedValue(0);
//   const splashTranslateY = useSharedValue(100); // Start off-screen below

//   useEffect(() => {
//     logoOpacity.value = withTiming(1, {
//       duration: 1000,
//       easing: Easing.out(Easing.ease),
//     });
//     setTimeout(() => {
//       splashOpacity.value = withTiming(1, {duration: 1000});
//       splashTranslateY.value = withTiming(0, {duration: 1000});
//     }, 1000);
//   }, []);

//   const logoStyle = useAnimatedStyle(() => ({
//     opacity: logoOpacity.value,
//   }));

//   const splashStyle = useAnimatedStyle(() => ({
//     opacity: splashOpacity.value,
//     transform: [{translateY: splashTranslateY.value}],
//   }));

//   return (
//     <View style={styles.container}>
//       <Animated.View style={[styles.logoRow, logoStyle]}>
//         <GreenFundLogo2 width={80} height={80} style={styles.logoOffset} />
//         <GreenFundLogo3 width={80} height={80} />
//       </Animated.View>

//       <Animated.View style={[styles.carouselContainer, splashStyle]}>
//         <SplashBg width={width * 0.8} style={styles.splashBackground} />
//         <Carousel />
//       </Animated.View>
//     </View>
//   );
// };

// export default ThirdIntro;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     justifyContent: 'center',
//     // alignItems:'center',
//   },
//   logoRow: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginBottom: 20,
//     marginTop: 10,
//   },
//   logoOffset: {
//     transform: [{translateX: 10}],
//     marginRight: 10,
//   },
//   carouselContainer: {
//     alignItems: 'center',
//     position: 'relative',
//     backgroundColor: 'yellow',
//     // height:400,
//   },
//   splashBackground: {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: [
//       {translateX: -((width * 0.8) / 2)},
//       {translateY: -(height * 0.4)}, // approx -80%
//     ],
//   },
// });









// import React, {useEffect} from 'react';
// import {ScrollView, View, StyleSheet, Dimensions} from 'react-native';
// import Animated, {
//   useSharedValue,
//   useAnimatedStyle,
//   withTiming,
//   Easing,
// } from 'react-native-reanimated';

// // Import SVGs
// import GreenFundLogo2 from '../../assets/images/splash/green-fund-logo-2.svg';
// import GreenFundLogo3 from '../../assets/images/splash/green-fund-logo-3.svg';
// import SplashBg from '../../assets/images/splash/splash-bg.svg';

// // Custom Carousel component
// import Carousel from './Carousel';

// const {width, height} = Dimensions.get('window');

// interface ThirdIntroProps {
//   onEnterApp: () => void;
// }

// const ThirdIntro: React.FC<ThirdIntroProps> = ({onEnterApp}) => {
//   const logoOpacity = useSharedValue(0);
//   const splashOpacity = useSharedValue(0);
//   const splashTranslateY = useSharedValue(100);

//   useEffect(() => {
//     logoOpacity.value = withTiming(1, {
//       duration: 1000,
//       easing: Easing.out(Easing.ease),
//     });
//     setTimeout(() => {
//       splashOpacity.value = withTiming(1, {duration: 1000});
//       splashTranslateY.value = withTiming(0, {duration: 1000});
//     }, 1000);
//   }, []);

//   const logoStyle = useAnimatedStyle(() => ({
//     opacity: logoOpacity.value,
//   }));

//   const splashStyle = useAnimatedStyle(() => ({
//     opacity: splashOpacity.value,
//     transform: [{translateY: splashTranslateY.value}],
//   }));

//   return (
//     <ScrollView contentContainerStyle={styles.scrollContainer}>
//       <View style={styles.innerContainer}>
//         <Animated.View style={[styles.logoRow, logoStyle]}>
//           <GreenFundLogo2 width={80} height={80} style={styles.logoOffset} />
//           <GreenFundLogo3 width={80} height={80} />
//         </Animated.View>

//         <Animated.View style={[styles.carouselContainer, splashStyle]}>
//           <SplashBg width={width * 0.8} style={styles.splashBackground} />
//           <Carousel handleClick={onEnterApp} />
//         </Animated.View>
//       </View>
//     </ScrollView>
//   );
// };

// export default ThirdIntro;

// const styles = StyleSheet.create({
//   scrollContainer: {
//     flexGrow: 1,
//     // height:height,
//     justifyContent: 'center',
//     backgroundColor: 'white',
//   },
//   innerContainer: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 40,
//   },
//   logoRow: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     // marginBottom: 20,
//     marginTop: '40%',
    
//   },
//   logoOffset: {
//     transform: [{translateX: 10}],
//     marginRight: 10,
//   },
//   carouselContainer: {
//     alignItems: 'center',
//     position: 'relative',
//   },
//   splashBackground: {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: [
//       {translateX: -((width * 0.8) / 2)},
//       {translateY: -(height * 0.4)},
//     ],
//   },
// });

















import React, {useEffect} from 'react';
import {ScrollView, View, StyleSheet, Dimensions, Platform} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';

// Import SVGs
import GreenFundLogo2 from '../../assets/images/splash/green-fund-logo-2.svg';
import GreenFundLogo3 from '../../assets/images/splash/green-fund-logo-3.svg';
import SplashBg from '../../assets/images/splash/splash-bg.svg';
import SplashBgIOS from '../../assets/images/splash/splash-bg.svg'; // 👈 Add iOS-specific background if available

// Custom Carousel component
import Carousel from './Carousel';

const {width, height} = Dimensions.get('window');

interface ThirdIntroProps {
  onEnterApp: () => void;
}

const ThirdIntro: React.FC<ThirdIntroProps> = ({onEnterApp}) => {
  const logoOpacity = useSharedValue(0);
  const splashOpacity = useSharedValue(0);
  const splashTranslateY = useSharedValue(100);

  useEffect(() => {
    logoOpacity.value = withTiming(1, {
      duration: 1000,
      easing: Easing.out(Easing.ease),
    });
    setTimeout(() => {
      splashOpacity.value = withTiming(1, {duration: 1000});
      splashTranslateY.value = withTiming(0, {duration: 1000});
    }, 1000);
  }, []);

  const logoStyle = useAnimatedStyle(() => ({
    opacity: logoOpacity.value,
  }));

  const splashStyle = useAnimatedStyle(() => ({
    opacity: splashOpacity.value,
    transform: [{translateY: splashTranslateY.value}],
  }));

  const SplashComponent = Platform.OS === 'ios' ? SplashBgIOS : SplashBg;

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.innerContainer}>
        <Animated.View style={[styles.logoRow, logoStyle]}>
          <GreenFundLogo2 width={80} height={80} style={styles.logoOffset} />
          <GreenFundLogo3 width={80} height={80} />
        </Animated.View>

        <Animated.View style={[styles.carouselContainer, splashStyle]}>
          <SplashComponent
            width={width * 0.8}
            style={styles.splashBackground}
          />
          <Carousel handleClick={onEnterApp} />
        </Animated.View>
      </View>
    </ScrollView>
  );
};

export default ThirdIntro;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
  },
  logoRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '40%',
  },
  logoOffset: {
    transform: [{translateX: 10}],
    marginRight: 10,
  },
  carouselContainer: {
    alignItems: 'center',
    position: 'relative',
  },
  splashBackground: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: [
      {translateX: -((width * 0.8) / 2)},
      {translateY: -(height * 0.4)},
    ],
  },
});
