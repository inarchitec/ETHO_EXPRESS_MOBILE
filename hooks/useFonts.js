import * as Font from "expo-font";

export default useFonts = async () => {
   await Font.loadAsync({
    "Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    });
};