import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderColor: "green",
    borderWidth: 1,
    width: "100%",
    height: "100%"
  },
  textContainer: {
    alignSelf: "stretch",
    position: "relative",
    height: "100%",
    paddingHorizontal: 10,
    // paddingVertical: 5
  },
  input: {
    fontSize: 16,
    color: "#000",
    // fontWeight: "400",
    marginVertical: 10,
    paddingTop: 2,
    minHeight: 40,
    position: "absolute",
    top: 0,
    color: "transparent",
    alignSelf: "stretch",
    width: "100%",
    fontFamily: Platform.OS === 'android' ? 'Poppins-Regular' : null
  },
  formmatedTextWrapper: {
    position: "absolute",
    top: 0,
    paddingHorizontal: 0,
    paddingVertical: 0,
    marginVertical: 10,
    width: "100%",
    height: "100%",
    fontFamily: 'Poppins-Regular'
  },
  androidInput: {
    fontSize: 16,
    color: "#000",
    // fontWeight: "400",
    fontFamily: 'Poppins-Regular',
    paddingHorizontal: 10,
    minHeight: 40,
    position: "absolute",
    top: 0,
    color: "transparent",
    alignSelf: "stretch",
    width: "100%",
    textAlignVertical: "top"
  },
  androidFormmatedTextWrapper: {
    position: "absolute",
    top: 0,
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: "100%",
    height: "100%",
    fontFamily: 'Poppins-Regular'
  },
  formmatedText: {
    fontSize: 16,
    fontFamily: Platform.OS === 'android' ? 'Poppins-Regular' : null
    // fontWeight: "400"
  },
  mention: {
    fontSize: 16,
    // fontWeight: "400",
    backgroundColor: "rgba(36, 77, 201, 0.05)",
    color: "#244dc9"
  },
  placeholderText: {
    color: "rgba(0, 0, 0, 0.1)",
    fontSize: 16
  }
});
