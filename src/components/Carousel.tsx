// import React, {useState, useRef, FC} from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   Dimensions,
//   ScrollView,
// } from 'react-native';
// import Swiper from 'react-native-swiper';

// // Import SVGs as React components
// import Pana1 from '../../assets/images/splash/pana-1.svg';
// import Pana2 from '../../assets/images/splash/pana-2.svg';
// import Pana3 from '../../assets/images/splash/pana-3.svg';
// import ArrowRight from '../../assets/images/splash/arrow-right-01.svg';

// const {width, height} = Dimensions.get('window');

// const slides = [
//   {
//     SVG: Pana1,
//     heading: 'Welcome to FundCirkle',
//     description:
//       'Empowering communities to save and achieve financial goals together through trusted group contributions.',
//   },
//   {
//     SVG: Pana2,
//     heading: 'Join Forces to Achieve More',
//     description:
//       'Start or join a Cirkle to pool resources, support each other, and make financial dreams a reality.',
//   },
//   {
//     SVG: Pana3,
//     heading: 'Easy, Transparent, and Secure',
//     description:
//       'Track your contributions, payments, and payouts effortlessly while we keep your data safe.',
//   },
// ];

// interface CarouselProps {
//   handleClick: () => void; // 👈 make sure this matches the prop you're passing
// }

// const Carousel: FC<CarouselProps> = ({handleClick}) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [enabled, setEnabled] = useState(false);
//   const swiperRef = useRef<Swiper>(null);

//   const handleNext = () => {
//     if (currentIndex === slides.length - 1) {
//       if (enabled) {
//         // navigation.navigate('SignIn' as never);
//         handleClick();
//       } else {
//         setEnabled(true);
//       }
//     } else {
//       swiperRef.current?.scrollBy(1);
//     }
//   };

//   const handlePrev = () => {
//     if (currentIndex > 0) {
//       swiperRef.current?.scrollBy(-1);
//     }
//   };

//   return (
//     <ScrollView contentContainerStyle={styles.scrollContainer}>
//       <View style={styles.wrapper}>
//         <Swiper
//           ref={swiperRef}
//           loop={false}
//           showsPagination={true}
//           onIndexChanged={index => setCurrentIndex(index)}
//           dotColor="#ccc"
//           activeDotColor="#00943F"
//           removeClippedSubviews={false} // avoids clipping during swipe
//           scrollEventThrottle={16} // smoother updates
//           nestedScrollEnabled={true} // improves nested behavior
//           height={height * 0.7}>
//           {slides.map(({SVG, heading, description}, index) => (
//             <View style={styles.slide} key={index}>
//               <View style={styles.svgContainer}>
//                 <SVG width={width * 0.9} height={width * 0.7} />
//               </View>
//               <Text style={styles.heading}>{heading}</Text>
//               <Text style={styles.description}>{description}</Text>
//             </View>
//           ))}
//         </Swiper>

//         {/* Navigation Buttons */}
//         <View style={styles.buttonContainer}>
//           <TouchableOpacity
//             style={styles.backButton}
//             onPress={handlePrev}
//             disabled={currentIndex === 0}>
//             {currentIndex === 0 ? (
//               <Text style={styles.backText}></Text>
//             ) : (
//               <Text style={styles.backText}>Back</Text>
//             )}

//             {/* <Text style={styles.backText}>Back</Text> */}
//           </TouchableOpacity>

//           <TouchableOpacity
//             style={[styles.nextButton, {backgroundColor: '#00943F'}]}
//             onPress={handleNext}>
//             {currentIndex === slides.length - 1 && enabled ? (
//               <Text style={styles.nextText}>Get Started</Text>
//             ) : (
//               <ArrowRight width={20} height={20} />
//             )}
//           </TouchableOpacity>
//         </View>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   scrollContainer: {
//     justifyContent: 'center',
//   },
//   wrapper: {
//     flex: 1,
//     paddingVertical: 10,
//     justifyContent: 'space-evenly',
//     height: height * 0.6,
//   },
//   slide: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingBottom: 20,
//   },
//   svgContainer: {
//     marginBottom: 20,
//   },
//   heading: {
//     fontSize: 22,
//     fontWeight: '600',
//     textAlign: 'center',
//     marginBottom: 10,
//   },
//   description: {
//     fontSize: 14,
//     color: '#666',
//     textAlign: 'center',
//     paddingHorizontal: 20,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     position: 'absolute',
//     bottom: '-30%',
//     width: '100%',
//     paddingHorizontal: 10,
//   },
//   backButton: {
//     padding: 10,
//   },
//   backText: {
//     color: '#00000080',
//     fontSize: 18,
//   },
//   nextButton: {
//     padding: 10,
//     paddingHorizontal: 20,
//     borderRadius: 50,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   nextText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default Carousel;




import React, {useState, useRef, FC} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Platform,
} from 'react-native';
import Swiper from 'react-native-swiper';

// Import SVGs as React components
import Pana1 from '../../assets/images/splash/pana-1.svg';
import Pana2 from '../../assets/images/splash/pana-2.svg';
import Pana3 from '../../assets/images/splash/pana-3.svg';
import ArrowRight from '../../assets/images/splash/arrow-right-01.svg';

const {width, height} = Dimensions.get('window');

// Android slides
const androidSlides = [
  {
    SVG: Pana1,
    heading: 'Welcome to FundCirkle',
    description:
      'Empowering communities to save and achieve financial goals together through trusted group contributions.',
  },
  {
    SVG: Pana2,
    heading: 'Join Forces to Achieve More',
    description:
      'Start or join a Cirkle to pool resources, support each other, and make financial dreams a reality.',
  },
  {
    SVG: Pana3,
    heading: 'Easy, Transparent, and Secure',
    description:
      'Track your contributions, payments, and payouts effortlessly while we keep your data safe.',
  },
];

// iOS slides (customize or reuse existing ones)
const iosSlides = [
  {
    SVG: Pana1,
    heading: 'Welcome to FundCirkle',
    description:
      'Empowering communities to save and achieve financial goals together through trusted group contributions.',
  },
  {
    SVG: Pana2,
    heading: 'Join Forces to Achieve More',
    description:
      'Start or join a Cirkle to pool resources, support each other, and make financial dreams a reality.',
  },
  {
    SVG: Pana3,
    heading: 'Easy, Transparent, and Secure',
    description:
      'Track your contributions, payments, and payouts effortlessly while we keep your data safe.',
  },
];

const slides = Platform.OS === 'ios' ? iosSlides : androidSlides;

interface CarouselProps {
  handleClick: () => void;
}

const Carousel: FC<CarouselProps> = ({handleClick}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [enabled, setEnabled] = useState(false);
  const swiperRef = useRef<Swiper>(null);

  const handleNext = () => {
    if (currentIndex === slides.length - 1) {
      if (enabled) {
        handleClick();
      } else {
        setEnabled(true);
      }
    } else {
      swiperRef.current?.scrollBy(1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      swiperRef.current?.scrollBy(-1);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.wrapper}>
        <Swiper
          ref={swiperRef}
          loop={false}
          showsPagination={true}
          onIndexChanged={index => setCurrentIndex(index)}
          dotColor="#ccc"
          activeDotColor="#00943F"
          removeClippedSubviews={false}
          scrollEventThrottle={16}
          nestedScrollEnabled={true}
          height={height * 0.7}>
          {slides.map(({SVG, heading, description}, index) => (
            <View style={styles.slide} key={index}>
              <View style={styles.svgContainer}>
                <SVG width={width * 0.9} height={width * 0.7} />
              </View>
              <Text style={styles.heading}>{heading}</Text>
              <Text style={styles.description}>{description}</Text>
            </View>
          ))}
        </Swiper>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={handlePrev}
            disabled={currentIndex === 0}>
            <Text style={styles.backText}>
              {currentIndex === 0 ? '' : 'Back'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.nextButton, {backgroundColor: '#00943F'}]}
            onPress={handleNext}>
            {currentIndex === slides.length - 1 && enabled ? (
              <Text style={styles.nextText}>Get Started</Text>
            ) : (
              <ArrowRight width={20} height={20} />
            )}
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    justifyContent: 'center',
  },
  wrapper: {
    flex: 1,
    paddingVertical: 10,
    justifyContent: 'space-evenly',
    height: height * 0.6,
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
  },
  svgContainer: {
    marginBottom: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 0 : '-30%',
    width: '100%',
    paddingHorizontal: 10,
  },
  backButton: {
    padding: 10,
  },
  backText: {
    color: '#00000080',
    fontSize: 18,
  },
  nextButton: {
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nextText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Carousel;
