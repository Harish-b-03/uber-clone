import { Provider } from "react-redux";
import { store } from "./store";
import HomeScreen from "./screens/home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import FoodScreen from "./screens/food";
import MapScreen from "./screens/map";
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
							component={HomeScreen}
							options={{ headerShown: false }}
						/>
						<Stack.Screen
							name="Map"
							component={MapScreen}
							options={{ headerShown: false }}
						/>
                        <Stack.Screen
							name="Food"
							component={FoodScreen}
							options={{ headerShown: false }}
						/>
					</Stack.Navigator>
				</NavigationContainer>
			</Provider>
		</SafeAreaProvider>
	);
}
