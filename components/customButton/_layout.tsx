
import React from 'react';
import { Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';

import { VIDEOICON } from '@/assets/svg';
import styles from './styles';
import strings from '@/constants/Strings';
import { ms } from '@/utils/scalling';

export type props = {
    title?: string,
    tochableStyle?: ViewStyle
    iconWidth?: number,
    iconHeight?: number,
    onTouchablePress?: () => void,
    lableStyle?: TextStyle,

}

const customButton: React.FC<props> = ({
    title,
    tochableStyle,
    iconWidth = 21,
    iconHeight = 12,
    onTouchablePress,
    lableStyle
}) => {

    
    return (
        <TouchableOpacity
            onPress={onTouchablePress}
            style={[styles.tochableStyle, { ...tochableStyle }]}>
            <VIDEOICON
                width={ms(iconWidth)}
                height={ms(iconHeight)} />
            <Text style={[styles.lableStyle,{...lableStyle}]}>{strings.upload}</Text>
        </TouchableOpacity>
    );
}

export default customButton


