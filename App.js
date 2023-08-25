import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import { store } from "./store";
import Home from "./screens/home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Map from "./screens/map";
import Food from "./screens/food";
{
	/* We need to use SafeAreaProvider for react-native-elements, react-native-vector-icons */
}

export default function App() {
	const Stack = createNativeStackNavigator();

	return (
		<SafeAreaProvider>
			<Provider store={store}>
				<NavigationContainer>
					<Stack.Navigator>
						<Stack.Screen
							name="Home"
							component={Home}
							options={{ headerShown: false }}
						/>
						<Stack.Screen
							name="Map"
							component={Map}
							options={{ headerShown: false }}
						/>
                        <Stack.Screen
							name="Food"
							component={Food}
							options={{ headerShown: false }}
						/>
					</Stack.Navigator>
					<StatusBar
						barStyle={"dark-content"}
						backgroundColor={"white"}
						animated={true}
					/>
				</NavigationContainer>
			</Provider>
		</SafeAreaProvider>
	);
}
