// Import libraries

import React from 'react';
import { Text, View } from 'react-native';

// Make Component
const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>

  )
}

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    position: 'relative',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.2
  },
  textStyle: {
    fontSize: 20,

  }
}

// Export
export { Header };
