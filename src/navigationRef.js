import { NavigationActions } from "react-navigation";

let navigator;

const setNavigator = nav => navigator = nav;

const navigate = (routeName, params) => { 
    navigator.dispatch(
        NavigationActions.navigate({
            routeName, 
            params
        })
    );
}
export {setNavigator, navigate}