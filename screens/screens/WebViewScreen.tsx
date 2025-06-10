
import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useEffect,
  useState,
} from 'react';
import {
  Alert,
  BackHandler,
  PermissionsAndroid,
  Platform,
  SafeAreaView,
  Share,
  ShareContent,
  StyleSheet,
} from 'react-native';
import {WebView, WebViewMessageEvent} from 'react-native-webview';

export type WebViewScreenRef = {
  reloadWebView: () => void;
};

const WebViewScreen = forwardRef<WebViewScreenRef>((props, ref) => {
  const webViewRef = useRef<WebView | null>(null);
  const [canGoBack, setCanGoBack] = useState(false);

  useImperativeHandle(ref, () => ({
    reloadWebView: () => {
      if (webViewRef.current) {
        webViewRef.current.reload();
      }
    },
  }));

  const handleBackPress = () => {
    if (canGoBack && webViewRef.current) {
      webViewRef.current.goBack();
      return true; // prevent app from exiting
    }
    return false; // allow default behavior (exit app or go back)
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleBackPress,
    );

    return () => backHandler.remove();
  }, [canGoBack]);

  const handleWebMessage = async (event: WebViewMessageEvent) => {
    try {
      const data = JSON.parse(event.nativeEvent.data);

      if (data.type === 'share') {
        const shareData: ShareContent = {
          message: `${data.text} ${data.url}`,
        };

        await Share.share(shareData);
      }
    } catch (error) {
      console.error('Sharing failed or invalid message format:', error);
      Alert.alert(
        'Share Error',
        error instanceof Error ? error.message : String(error),
      );

    }
  };


  return (
    <SafeAreaView style={styles.container}>
      <WebView
        ref={webViewRef}
        source={{uri: 'https://fundcirkle.com/home'}}
        javaScriptEnabled
        domStorageEnabled
        allowFileAccess={true}
        allowFileAccessFromFileURLs={true}
        allowUniversalAccessFromFileURLs={true}
        setSupportMultipleWindows={false}
        onNavigationStateChange={navState => {
          setCanGoBack(navState.canGoBack);
        }}
        onShouldStartLoadWithRequest={event => {
          if (event.url.startsWith('blob:')) {
            Alert.alert(
              'File Upload Blocked',
              'File uploads are not supported.',
            );
            return false;
          }
          return true;
        }}
        onMessage={event => {
          console.log('WebView Message:', event.nativeEvent.data);
          handleWebMessage(event);
        }}
      />
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default WebViewScreen;
