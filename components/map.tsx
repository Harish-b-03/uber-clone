import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useSelector } from "react-redux";
import tw from "twrnc";
import { getStartLocation } from "../slices/nav-slice";

const Map = () => {
	const startLocation = useSelector(getStartLocation);

	return (
		<View style={tw`flex-1`}>
			<MapView
				style={tw`flex-1`}
				mapType="mutedStandard"
				initialRegion={{
					latitude: startLocation.location.lat,
					longitude: startLocation.location.lng,
					latitudeDelta: 0.005,
					longitudeDelta: 0.005,
				}}
			>
				{startLocation?.location && (
					<Marker
						coordinate={{
							latitude: startLocation.location.lat,
							longitude: startLocation.location.lng,
						}}
                        title="Pick up"
                        description={startLocation.description}
                        identifier="startLocation"
					/>
				)}
			</MapView>
		</View>
	);
};

export default Map;

const styles = StyleSheet.create({});
