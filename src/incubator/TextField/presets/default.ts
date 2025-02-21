import {StyleSheet} from 'react-native';
import {Colors, Spacings, Typography} from '../../../style';

const colorByState = {
  focus: Colors.$textPrimary,
  error: Colors.$textDangerLight,
  disabled: Colors.$textDisabled
};

const styles = StyleSheet.create({
  field: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.$outlineNeutralMedium,
    paddingBottom: Spacings.s2
  },
  input: {
    ...Typography.text70,
    lineHeight: undefined,
    height: Typography?.text70?.lineHeight
  },
  floatingPlaceholder: {...Typography.text70}
});

export default {
  enableErrors: true,
  validateOnBlur: true,
  floatingPlaceholderColor: colorByState,
  labelColor: colorByState,
  fieldStyle: styles.field,
  style: styles.input,
  floatingPlaceholderStyle: styles.floatingPlaceholder
};
