import { StyleSheet, Text, View } from "react-native";
import tw from "twrnc";
import Map from "../components/map";
import { StatusBar } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigateCard from "../components/navigate-card";
import RideOptionsCard from "../components/ride-options-card";

const MapScreen = () => {
	const Stack = createNativeStackNavigator();

	return (
		<View style={tw`w-full h-full bg-white`}>
			<View style={tw`w-full h-1/2`}>
				<Map />
			</View>
			<View style={tw`w-full h-1/2`}>
				<Stack.Navigator>
					<Stack.Screen
						name="NavigateCard"
						component={NavigateCard}
						options={{ headerShown: false }}
					/>
					<Stack.Screen
						name="RideOptionsCard"
						component={RideOptionsCard}
						options={{ headerShown: false }}
					/>
				</Stack.Navigator>
			</View>
			<StatusBar
				barStyle={"dark-content"}
				backgroundColor={"transparent"}
				translucent
				animated={true}
			/>
		</View>
	);
};

export default MapScreen;

const styles = StyleSheet.create({});
