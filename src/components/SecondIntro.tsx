// import React from 'react';
// import {View, Image, StyleSheet} from 'react-native';
// import Animated, {
//   Easing,
//   useSharedValue,
//   useAnimatedStyle,
//   withTiming,
// } from 'react-native-reanimated';

// const SecondIntro = () => {
//   const opacity1 = useSharedValue(0);
//   const opacity2 = useSharedValue(0);
//   const opacity3 = useSharedValue(0);

//   React.useEffect(() => {
//     opacity1.value = withTiming(1, {
//       duration: 1000,
//       easing: Easing.out(Easing.quad),
//     });
//     setTimeout(() => {
//       opacity2.value = withTiming(1, {
//         duration: 1000,
//         easing: Easing.out(Easing.quad),
//       });
//       opacity3.value = withTiming(1, {
//         duration: 1000,
//         easing: Easing.out(Easing.quad),
//       });
//     }, 2000);
//   }, []);

//   const animatedStyle1 = useAnimatedStyle(() => ({opacity: opacity1.value}));
//   const animatedStyle2 = useAnimatedStyle(() => ({
//     opacity: opacity2.value,
//     transform: [{translateX: 10}],
//   }));
//   const animatedStyle3 = useAnimatedStyle(() => ({
//     opacity: opacity3.value,
//     transform: [{translateX: -10}],
//   }));

//   return (
//     <View style={styles.container}>
//       <Animated.View style={[styles.logoContainer, animatedStyle1]}>
//         <Image
//           source={require('../../assets/images/splash/green-fund-logo-1.svg')}
//           style={styles.logo}
//         />
//       </Animated.View>
//       <View style={styles.logoRow}>
//         <Animated.View style={animatedStyle2}>
//           <Image
//             source={require('../../assets/images/splash/green-fund-logo-2.svg')}
//             style={styles.logo}
//           />
//         </Animated.View>
//         <Animated.View style={animatedStyle3}>
//           <Image
//             source={require('../../assets/images/splash/green-fund-logo-3.svg')}
//             style={styles.logo}
//           />
//         </Animated.View>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   logoContainer: {
//     marginBottom: 20,
//   },
//   logoRow: {
//     flexDirection: 'row',
//     position: 'relative',
//   },
//   logo: {
//     width: 100,
//     height: 100,
//     resizeMode: 'contain',
//   },
// });

// export default SecondIntro;




import React from 'react';
import {View, StyleSheet} from 'react-native';
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import Logo1 from '../../assets/images/splash/green-fund-logo-1.svg';
import Logo2 from '../../assets/images/splash/green-fund-logo-2.svg';
import Logo3 from '../../assets/images/splash/green-fund-logo-3.svg';

const SecondIntro = () => {
  const opacity1 = useSharedValue(0);
  const opacity2 = useSharedValue(0);
  const opacity3 = useSharedValue(0);

  React.useEffect(() => {
    opacity1.value = withTiming(1, {
      duration: 1000,
      easing: Easing.out(Easing.quad),
    });
    setTimeout(() => {
      opacity2.value = withTiming(1, {
        duration: 1000,
        easing: Easing.out(Easing.quad),
      });
      opacity3.value = withTiming(1, {
        duration: 1000,
        easing: Easing.out(Easing.quad),
      });
    }, 2000);
  }, []);

  const animatedStyle1 = useAnimatedStyle(() => ({opacity: opacity1.value}));
  const animatedStyle2 = useAnimatedStyle(() => ({
    opacity: opacity2.value,
    transform: [{translateX: 10}],
  }));
  const animatedStyle3 = useAnimatedStyle(() => ({
    opacity: opacity3.value,
    // transform: [{translateX: -10}],
  }));

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.logoContainer, animatedStyle1]}>
        <Logo1 width={100} height={100} />
      </Animated.View>
      <View style={styles.logoRow}>
        <Animated.View style={animatedStyle2}>
          <Logo2 width={100} height={100} />
        </Animated.View>
        <Animated.View style={animatedStyle3}>
          <Logo3 width={100} height={100} />
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    marginBottom: 20,
  },
  logoRow: {
    flexDirection: 'row',
    position: 'relative',
    
  },
});

export default SecondIntro;


