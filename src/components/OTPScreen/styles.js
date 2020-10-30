const {StyleSheet} = require('react-native');
const {
  responsiveWidth,
  responsiveHeight,
  moderateScale,
  responsiveFontSize,
} = require('../../common');

const rad = 20;
export default StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    marginHorizontal: responsiveWidth(5),
    height: responsiveHeight(20),
  },
  codeInputFieldStyle: {
    width: moderateScale(rad),
    height: moderateScale(rad),
    borderWidth: 0,
    fontWeight: 'bold',
    color: 'black',
    borderBottomWidth: moderateScale(0.5),
    borderBottomColor: '#D4D4D4',
    fontSize: responsiveFontSize(8),
  },

  codeInputHighlightStyle: {
    backgroundColor: 'white',
    borderColor: '#5BC4F1',
  },
});
