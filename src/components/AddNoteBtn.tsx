import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React from 'react';
import { s } from 'react-native-size-matters';
import { router } from 'expo-router';

const PLUS_ICON = require('../assets/plus.png');

const AddNoteBtn = () => {
	const handleClick = () => {
		console.log('You clicked add new note button!');
		router.push('/add-note');
	};

	return (
		<TouchableOpacity onPress={handleClick} style={styles.button}>
			<Image source={PLUS_ICON} style={styles.icon} />
		</TouchableOpacity>
	);
};

export default AddNoteBtn;

const styles = StyleSheet.create({
	button: {
		position: 'absolute',
		bottom: s(32),
		right: s(24),
		height: s(60),
		width: s(60),
		borderRadius: s(999),
		backgroundColor: '#FF784B',
		justifyContent: 'center',
		alignItems: 'center',
		borderWidth: s(4),
		borderColor: '#F2F2F2',
	},

	icon: {
		height: s(32),
		width: s(32),
	},
});
