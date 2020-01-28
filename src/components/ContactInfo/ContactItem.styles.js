import { StyleSheet } from 'aphrodite';

import { colors, fontSizes, lineHeights } from '../../Global.styles';

export const styles = StyleSheet.create({
  container: {
    flex: '0 0 30%',
    color: colors.blackText,
    fontSize: fontSizes.xsmall,
    marginBottom: '15px',
  },
  link: {
      color: colors.blackText,
      textDecoration: 'none',
  }
});
