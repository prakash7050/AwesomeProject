import React, { useEffect, useRef } from 'react';
import { LogBox } from 'react-native';
import AnimateLoadingButton from 'react-native-animate-loading-button';

const LoadingButton = ({
    isLoading=false,
    width,
    height,
    title,
    titleColor,
    titleFontFamily,
    titleFontSize,
    backgroundColor,
    borderWidth,
    borderRadius,
    activityIndicatorColor,
    onPress,
    ...res
  }) =>{
    let loading = useRef().current;
    
    useEffect(() => {
        LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
        if(isLoading){
            loading.showLoading(true);
        }else{
            loading.showLoading(false);
        }
    }, [isLoading])
    
    return(
        <AnimateLoadingButton
            ref={c => (loading = c)}
            width={width || 300}
            height={height || 50}
            title={title || 'Button'}
            titleFontSize={titleFontSize || 16}
            titleColor={titleColor || 'rgb(255,255,255)'}
            backgroundColor={backgroundColor || 'green'}
            borderRadius={borderRadius || 10}
            onPress={onPress}
            {...res}
        />
    )
}

export default LoadingButton;
