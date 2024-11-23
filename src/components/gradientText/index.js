import React from 'react';
import MaskedView from '@react-native-masked-view/masked-view';
import Wrapper from '../wrapper';
import LinearGradient from 'react-native-linear-gradient';
import Text from '../text';
import { colors } from '../../services';


const GradientText = ({ text, start, end, color, style, textStyle }) => {
  return (
    <Wrapper alignItemsCenter justifyContentCenter>
      <MaskedView maskElement={<Text style={[textStyle, { backgroundColor: colors.transparent }]}>{text}</Text>}>
        <LinearGradient
          start={start}
          end={end}
          colors={color}
        >
          <Text style={[textStyle, { opacity: 0 }]}>{text}</Text>
        </LinearGradient>
      </MaskedView>
    </Wrapper>

  );
};

// const styles = StyleSheet.create({
//   container: {
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

export default GradientText;
