import { StyleSheet } from 'aphrodite';

import { colors, fontSizes, lineHeights } from '../../Global.styles';

export const styles = StyleSheet.create({
  container: {
      backgroundColor: colors.grayBackground,
      marginTop: '0.5cm',
  },
  innerContainer: {
      display: 'flex',
      flexFlow: 'row wrap',
      justifyContent: 'flex-start',
      margin: '0.5cm',
      ':after': {
        content: '""',
        flex: 'auto',
      },
  },
});
