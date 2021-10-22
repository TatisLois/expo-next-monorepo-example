import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import useBreakpoints from './useBreakpoint'

export default function BreakpointsDemo() {
  const xLarge = useBreakpoints("xLarge");
  const large = useBreakpoints("large");
  const medium = useBreakpoints("medium");
  const small = useBreakpoints("small");

  return (
    <View style={styles.container}>
      <Text>useBreakpoints Example !ok</Text>
      {xLarge ? <Text style={[styles.xLarge, styles.display]}> XLarge Display </Text> : null}
      {large ? <Text style={[styles.large, styles.display]}> Large Display </Text> : null}
      {medium ? <Text style={[styles.medium, styles.display]}> Medium Display </Text> : null}
      {small ? <Text style={[styles.small, styles.display]}> Small Display </Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  display: {
    height: "300px",
    borderRadius: 25,
    width: "300px"
  },
  xLarge: {
    backgroundColor: "cadetblue",
  },
  large: {
    backgroundColor: "gold",
  },
  medium: {
    backgroundColor: "green",
  },
  small: {
    backgroundColor: "crimson",
  },
});
