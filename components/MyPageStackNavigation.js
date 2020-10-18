import {createStackNavigator} from "react-navigation-stack";
import MyPageScreen from "./NavigationComponents/MyPageScreen";


/*Her har vi stack navigationen*/

const MyPageStack = createStackNavigator({
        /*Fra venstre er det side navnet og screen er vores View / component*/
        MyPage:
            { screen: MyPageScreen},

    },
    {
        /*Hvilket View skal starte*/
        initialRouteName:'MyPage',
        navigationOptions:{
            title:'Main'
        }
    }
);
/*Skyd det afsted så App.js kan bruge componenet*/
export default MyPageStack;
