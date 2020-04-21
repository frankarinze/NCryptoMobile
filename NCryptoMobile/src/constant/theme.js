import colors from "./colors";
import { StyleSheet, Platform, Dimensions, StatusBar, } from 'react-native'
import PropTypes from 'prop-types';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';


const deviceWidth = Dimensions.get("screen").width;
let deviceHeight = Dimensions.get('window').height;

export default {
  input: {
    width: 35,
    height: 25,
    backgroundColor: "transparent",
    fontSize: 13,
    margin: 4,
    borderWidth: 2,
    borderColor: 'transparent',
    borderBottomColor: "grey",
    textAlign: "center",

  },
  //OTP
  otpInput: {
    width: 52,
    height:42,
    backgroundColor: "transparent",
    margin: 4,
    borderWidth: 1,
    paddingVertical: 8,
    // paddingHorizontal:20,
    borderColor: "transparent",
    borderColor:colors.otpColor,
    textAlign: "center",
    borderRadius: 2
  },
  //global container
  gContainer: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    fontSize: 50,
    paddingHorizontal: 18
  },
  // Authentication Form
  authInputText: {
    height: 48,
    width: '100%',
    // marginLeft: 16,
    // marginRight: 16,

    borderWidth: 1.5,
    borderRadius: 3,
    paddingHorizontal: 12,
    paddingTop: 0,
    color: colors.inputText,
    borderColor: colors.inputGrey,
    fontSize: 16,
    lineHeight: 20,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  platformHeight: { height: deviceHeight },
  // font sizes
  regularf: {
    fontFamily: 'nunito-regular'
  },
  medium: {
    fontFamily: 'nunito-semibold'
  },
  semibold: {
    fontFamily: 'nunito-bold'
  },
  ...Platform.select({
    ios: {
      min_height: {
        height: 49,
        padding: 10,
        paddingHorizontal: 10,
      },
      rotateimg: { transform: [{ rotate: '90deg' }] },
      headerheight: { minHeight: 40 },
      customHeight: { maxHeight: 200, minHeight: 200 },
      boardBtn: {
        backgroundColor: 'white', color: colors.white, marginVertical: 20, width: '42%', height: 55, borderRadius: 6, justifyContent: 'flex-start', borderWidth: 2, borderColor: 'white'
      },
      // getStatusBarHeight(),
      h1: {
        fontSize: 39,
        fontFamily: 'nunito-bold'
      },
      h2: {
        fontSize: 28,
        fontFamily: 'nunito-semibold'
      },
      h3: {
        fontSize: 22,
        fontFamily: 'nunito-semibold'
      },
      h4: {
        fontSize: 19,
        fontFamily: 'nunito-regular'
      },
      h4light: {
        fontSize: 19,
        fontFamily: 'nunito-regular'
      },
      h4lighter: {
        fontSize: 16,
        fontFamily: 'nunito-regular'
      },
      caption: {
        fontSize: 18,
        fontFamily: 'nunito-semibold'
      },
      Bigcaption: {
        fontSize: 28,
        fontFamily: 'nunito-regular'
      },
      m10: {
        margin: 10
      },
      small: {
        fontSize: 10,
      },
      p: {
        fontSize: 15,
        fontFamily: 'nunito-regular',
      },
      e: {
        fontSize: 13,
        fontFamily: 'nunito-regular',
      },
      regular: {
        fontSize: 18,
      },

      smOpacity: {
        opacity: 0.65,
      },
      mdOpacity: {
        opacity: 0.75,
      },
      p1: {
        color: colors.red,
      },

      /***********888
       * input icons
       */
      inputIc: {
        color: colors.grey,
      },

      smallText: {
        color: colors.grey2,
      },

      smallText2: {
        color: colors.brandPrimary,
      },
    },
    android: {
      min_height: {
        height: 45,
        paddingVertical: 8,
        paddingHorizontal: 10,
      },

      headerheight: { minHeight: 90, marginVertical: 100, justifyContent: 'center', alignItems: 'center' },
      customHeight: { maxHeight: 180, minHeight: 180 },
      boardBtn: {
        backgroundColor: 'transparent', color: colors.white, marginVertical: 20, width: '42%', borderRadius: 6, justifyContent: 'flex-start'
      },
      h1: {
        fontSize: 37,
        fontFamily: 'nunito-bold'
      },
      h2: {
        fontSize: 26,
        fontFamily: 'nunito-semibold'
      },
      h3: {
        fontSize: 20,
        fontFamily: 'nunito-semibold'
      },
      h4: {
        fontSize: 17,
        fontFamily: 'nunito-regular'
      },
      h4light: {
        fontSize: 17,
        fontFamily: 'nunito-regular'
      },
      h4lighter: {
        fontSize: 16,
        fontFamily: 'nunito-regular'
      },
      caption: {
        fontSize: 16,
        fontFamily: 'nunito-semibold'
      },
      Bigcaption: {
        fontSize: 26,
        fontFamily: 'nunito-regular'
      },
      m10: {
        margin: 10
      },
      small: {
        fontSize: 8,
      },
      p: {
        fontSize: 13,
        fontFamily: 'nunito-regular',
      },
      e: {
        fontSize: 12,
        fontFamily: 'nunito-regular',
      },
      regular: {
        fontSize: 18,
      },
      smOpacity: {
        opacity: 0.65,
      },
      mdOpacity: {
        opacity: 0.75,
      },
      p1: {
        color: colors.red,
      },

      /***********888
       * input icons
       */
      inputIc: {
        color: colors.grey,
      },

      smallText: {
        color: colors.grey2,
      },

      smallText2: {
        color: colors.brandPrimary,
      },
      headerheight: { minHeight: 28, },
      tPadding20: { padding: 20 },
      tPadding30: { padding: 30 },
      tPadding40: { padding: 40 },
      tPaddingV5: { paddingVertical: 0 },
      tPaddingV20: { paddingVertical: 20 },
      tPaddingV30: { paddingVertical: 30 },
      tPaddingV40: { paddingVertical: 40 },
      tMargin20: { margin: 20 },
      tMargin30: { margin: 30 },
      tMargin40: { margin: 40 },
      tMarginV20: { marginVertical: 20 },
      tMarginV30: { marginVertical: 30 },
      tMarginV40: { marginVertical: 40 },
      tMarginB20: { marginBottom: -10 },
      tMarginB20: { marginBottom: -20 },
      tMarginB30: { margin: -30 },
      tMargin40: { margin: 40 },
    }
  }),




  /******************
   * Reuse
   */
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    height: 60,
    padding: 10,
    marginTop: 3,
    marginBottom: 3,
  },
  cgBorderRadius: {
    borderRadius: 6,
  },
  containermain: {
    flex: 1,
    flexDirection: 'column',
    // backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'flex-start',
    // height: '100%',
  },

  button: {
    flex: 1,
    height: 45,
    backgroundColor: colors.brandPrimary,
    justifyContent: 'center',
    marginHorizontal: 0,
    marginVertical: 15,
    borderRadius: 4,
    shadowOpacity: 0.25,
    elevation: 1,
    shadowOffset: { width: 0, height: 0.5 },
  },
  picker: {
    flex: 1,
    height: 45,
    margin: 8,
    borderRadius: 4
  },
  inputField: {
    fontSize: 16,
  },

  /*****************
   * Modal
   */
  modalbutton: {
    backgroundColor: 'lightblue',
    padding: 12,
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
  },

  line: {
    borderColor: colors.black20,
    borderBottomWidth: 1
  },
  navline: {
    borderColor: colors.black20,
    borderWidth: 1
  },
  /******************
   * Withgoal-Screen
   */
  cardContainer: {
    flex: 1,
    backgroundColor: 'purple',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#999',
    width: 380,
    justifyContent: "space-around",
    alignItems: 'flex-start',
    padding: 20
  },
  cardContainer3: {
    // flex: 1,
    borderRadius: 6,
    // borderWidth: 1,
    // borderColor: '#999',
    // width: 380,
  },
  cardContent: {
    padding: 20,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  viewContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: 'center',
  },

  viewButton: {
    width: 120,
    height: 35,
    alignSelf: 'flex-end',
    backgroundColor: '#fff',
    marginTop: -5,
    marginBottom: -5,
    borderRadius: 3,
  },
  addText: {
    color: colors.brandPrimary,
    textAlign: 'center',
    paddingTop: 8,
  },
  quicktext: {
    // padding: 20,
  },
  seperator: {
    borderColor: '#000',
    borderWidth: 0.5,
    justifyContent: 'flex-start'
  },

  cardIcon: {
    width: 30,
    height: 30,
    alignSelf: 'center',
    marginBottom: 20,
  },

  cardText: {
    fontSize: 20,
  },
  textIcon: {
    textAlign: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    margin: 8,
  },


  secondCard: {
    marginTop: 50,
    flex: 1,
    backgroundColor: 'grey',
    width: 300,
    height: 180,
    borderRadius: 6,
    marginRight: 20,
  },

  // Withgoal-Screen
  horizontalCardContainer: {
    flex: 6,
    marginTop: 10,
    borderRadius: 1
  },
  /******************
 * Transactions-Screen
 */
  list: {
    backgroundColor: "#E6E6E6",
  },
  divider: {
    marginTop: 1,
  },
  card: {
    margin: 0,
    borderRadius: 2,
    height: 100,
    padding: 15,
    backgroundColor: colors.white,
  },

  /******************
  * Register-Screen
  */
  /******************
   * Login-Screen
   */
  imageContainer: {
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  /******************
   * Home-Screen
   */


  hcard: {
    marginTop: 5,
    marginBotttom: 10,
    borderRadius: 6,
    backgroundColor: "#8400F9",
    justifyContent: 'center',
    overflow: 'hidden',
    ...Platform.select({
      ios: {
        flex: 2,
      },
      android: {
        flex: 3
      }
    })
  },
  elevate: {
    ...Platform.select({
      ios: {
        // shadowOpacity: 0.02,
        // elevation: 0.03,
        // shadowOffset: { width: 0.2, height: 0.2 },
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
      },
      android: {
        //     shadowOpacity: 0.01,
        //     elevation: 5,
        shadowColor: colors.white,
        // shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2
      },
    }),
  }
  ,
  hCardRight: {
    justifyContent: 'flex-end',
    paddingTop: 20,
  },
  hCardFooter: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexShrink: 1
  },

  /******************
   * Emptycard-Screen
   */
  /******************
   * Creategoal-Screen
   */
  /******************
   * Emptycard-Screen
   */
  /******************
   * Nogoal-Screen
   */
  /******************
   * Goal Summary-Screen
   */
  GoalsummaryContainer: {
    marginHorizontal: 20,
    marginBottom: 0,
    // marginTop: window.height * 0.1,
    width: deviceWidth * 0.95,
    alignItems: "stretch",
    backgroundColor: "#fff"
  },
  /******************
   * PartialLogin-Screen
   */
  /******************
   * StartPage-Screen
   */
  /******************
   * UpdatePassword-Screen
   */
  /******************
   * Withgoal-Screen
   */

  /******************
  * Bankacct-Screen
  */

  Bankview: {
    marginBottom: 15,
    backgroundColor: '#FFF',
    borderRadius: 6,
    // borderWidth: 1,
    width: '100%',
    // marginHorizontal: 10,
  },

  Bankrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  left: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },

  right: {
    flex: 1.8,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: -20,
  },

  Bankcircle: {
    backgroundColor: colors.brandPrimary,
    borderRadius: 100,
    width: 50,
    height: 50,
  },

  bankicon: {
    width: 20,
    height: 20,
    alignSelf: 'center',
    position: 'relative',
    top: 13,
  },

  banktext: {
    flex: 3,
  },
  Padcontent: {
    padding: 8,
  },




};

