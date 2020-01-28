import { StyleSheet } from 'aphrodite';

import { colors, fontSizes, lineHeights, pageMargins } from '../../Global.styles';

export const styles = StyleSheet.create({
  headerContainer: {
      display: 'flex',
      flexDirection: 'column',
      marginTop: pageMargins.top,
      marginLeft: pageMargins.left,
  },
  name: {
      color: colors.blackText,
      fontSize: fontSizes.xxlarge,
      lineHeight: lineHeights.xxlarge,
  },
  title: {
      color: colors.grayText,
      fontSize: fontSizes.medium,
      lineHeight: lineHeights.medium,
  },
  summary: {
      color: colors.blackText,
      fontSize: fontSizes.xsmall,
      lineHeight: lineHeights.xsmall,
  },
});
