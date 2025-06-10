import React from 'react';
import {View, StyleSheet, Platform, Text} from 'react-native';
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

      {/* <View style={styles.logoRow}>
        <FundLogo2 width={100} height={100} />
        <FundLogo3 width={100} height={100} />
      </View> */}

      {Platform.OS === 'android' && (
        <View style={styles.logoRow}>
          <FundLogo2 width={100} height={100} />
          <FundLogo3 width={100} height={100} />
        </View>
      )}

      {Platform.OS === 'ios' && (
        <View style={styles.iosSection}>
          {/* Example: render a single logo or a different layout */}
          <FundLogo2 width={100} height={100} />
          <FundLogo3 width={100} height={100} />
          {/* <Text style={styles.iosText}>Welcome iOS User!</Text> */}
        </View>
      )}
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
  iosSection: {
    alignItems: 'center',
    marginTop: 10,
  },
  iosText: {
    marginTop: 8,
    fontSize: 16,
    color: '#fff',
  },
});

export default Intro;



