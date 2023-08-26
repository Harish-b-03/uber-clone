import {
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import React from "react";
import tw from "twrnc";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_API_KEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination, setStartLocation } from "../slices/nav-slice";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StatusBar } from "react-native";

const HomeScreen = () => {
	const dispatch = useDispatch();
	const navigation =
		useNavigation<NativeStackNavigationProp<ParamListBase>>();

	return (
		<SafeAreaView
			style={tw`bg-white w-full h-full flex justify-center items-center`}
		>
			<Text style={tw`bg-white`}>Home</Text>
			<View style={tw`w-full`}>
				<GooglePlacesAutocomplete
					placeholder="Pickup location"
					styles={{
						container: {
							flex: 0,
						},
						textInput: {
							fontSize: 18,
						},
					}}
					fetchDetails={true}
					onPress={(data, details = null) => {
						dispatch(
							setStartLocation({
								location:
									details !== null
										? details.geometry.location
										: null,
								description: data.description,
							})
						);

						dispatch(setDestination(null));
					}}
					query={{
						key: GOOGLE_MAPS_API_KEY,
						language: "en",
					}}
					minLength={2}
					enablePoweredByContainer={false}
					nearbyPlacesAPI="GooglePlacesSearch"
					debounce={400}
				/>
			</View>
			<View>
				<View>
					<TouchableOpacity
						onPress={() => navigation.navigate("Map")}
					>
						<Text>Book a ride</Text>
					</TouchableOpacity>
				</View>
				<View>
					<TouchableOpacity
						onPress={() => navigation.navigate("Food")}
					>
						<Text>Order Food</Text>
					</TouchableOpacity>
				</View>
			</View>
			<StatusBar
				barStyle={"dark-content"}
				backgroundColor={"white"}
				animated={true}
			/>
		</SafeAreaView>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({});
