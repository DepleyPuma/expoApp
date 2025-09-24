import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Form from '../../src/components/Form';
import { s } from 'react-native-size-matters';

const AddNoteScreen = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.header}>Create New Note</Text>
			<Form />
			<StatusBar style='auto' />
		</View>
	);
};

export default AddNoteScreen;

const styles = StyleSheet.create({
	container: {
		margin: s(16),
		padding: s(16),
		backgroundColor: '#fff',
		borderRadius: s(12),
		justifyContent: 'flex-start',
	},

	header: {
		fontFamily: 'Inter_700Bold',
		fontSize: s(18),
	},
});
