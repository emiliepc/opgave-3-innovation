import {createStackNavigator} from "react-navigation-stack";
import RegisterScreen from "./NavigationComponents/RegisterScreen";
import CameraScreen from "./NavigationComponents/CameraScreen";

/*Her har vi stack navigationen*/

const RegisterStack = createStackNavigator({
        /*Fra venstre er det side navnet og screen er vores View / component*/
        Register:
            { screen: RegisterScreen},
        Camera:
            {screen : CameraScreen}
    },
    {
        /*Hvilket View skal starte*/
        initialRouteName:'Register',
        navigationOptions:{
            title:'Main'
        }
    }
);
/*Skyd det afsted så App.js kan bruge componenet*/
export default RegisterStack;
