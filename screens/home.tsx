import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "twrnc";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_API_KEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination, setStartLocation } from "../slices/nav-slice";

const Home = () => {
	const dispatch = useDispatch();

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
		</SafeAreaView>
	);
};

export default Home;

const styles = StyleSheet.create({});
