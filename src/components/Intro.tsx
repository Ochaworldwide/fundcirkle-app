// import React from 'react';
// import {View, Image, ImageBackground, StyleSheet} from 'react-native';

// const Intro = () => {
//   return (
//     <ImageBackground
//       source={require('../../assets/images/splash/splash-bg-1.svg')}
//       style={styles.background}
//       resizeMode="cover">
//       <View style={styles.logoContainer}>
//         <Image
//           source={require('../../assets/images/splash/fund-logo-1.svg')}
//           style={styles.logo}
//         />
//       </View>
      

//       <View style={styles.logoRow}> 
//         <Image
//           source={require('../../assets/images/splash/fund-logo-2.svg')}
//           style={styles.logo}
//         />
//         <Image
//           source={require('../../assets/images/splash/fund-logo-3.svg')}
//           style={styles.logo}
//         />
//       </View>
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: '100%',
//     height: '100%',
//   },
//   logoContainer: {
//     marginBottom: 16,
//   },
//   logoRow: {
//     flexDirection: 'row',
//     position: 'relative',
//   },
//   logo: {
//     width: 100, // Adjust as needed
//     height: 100, // Adjust as needed
//     resizeMode: 'contain',
//     marginHorizontal: 8,
//   },
// });

// export default Intro;






import React from 'react';
import {View, StyleSheet} from 'react-native';
import FundLogo1 from '../../assets/images/splash/fund-logo-1.svg';
import FundLogo2 from '../../assets/images/splash/fund-logo-2.svg';
import FundLogo3 from '../../assets/images/splash/fund-logo-3.svg';
import SplashBg from '../../assets/images/splash/splash-bg-1.svg'; // Import SVG background
import {SvgXml} from 'react-native-svg'; // Optional for raw SVG strings

const Intro = () => {
  return (
    <View style={styles.background}>
      {/* Render the SVG background */}
      <SplashBg width="100%" height="100%" style={styles.absoluteFill} />

      {/* Logos on top of the background */}
      <View style={styles.logoContainer}>
        <FundLogo1 width={100} height={100} />
      </View>

      <View style={styles.logoRow}>
        <FundLogo2 width={100} height={100} />
        <FundLogo3 width={100} height={100} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  absoluteFill: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  logoContainer: {
    marginBottom: 16,
  },
  logoRow: {
    flexDirection: 'row',
    position: 'relative',
  },
});

export default Intro;



