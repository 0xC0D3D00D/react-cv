import { StyleSheet } from 'aphrodite';

import { colors, fontSizes, lineHeights, pageMargins } from '../../Global.styles';

export const styles = StyleSheet.create({
  container: {
      backgroundColor: colors.grayBackground,
      marginTop: '0.5cm',
  },
  innerContainer: {
      display: 'flex',
      flexFlow: 'row wrap',
      justifyContent: 'flex-start',
      marginTop: '0.5cm',
      marginLeft: pageMargins.left,
      ':after': {
        content: '""',
        flex: 'auto',
      },
  },
});
