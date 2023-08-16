import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import tw from "twrnc";

const Home = () => {
	return (
		<SafeAreaView style={tw`bg-white w-full h-full flex justify-center items-center`}>
			<Text style={tw``}>Home</Text>
		</SafeAreaView>
	);
};

export default Home;

const styles = StyleSheet.create({});
