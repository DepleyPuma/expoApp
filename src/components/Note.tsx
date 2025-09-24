import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { s } from 'react-native-size-matters';

type NotePropsType = {
	id: string;
	title: string;
	active: boolean;
	description: string;
	type: 'low' | 'medium' | 'high';
};

const phoneWidth = Dimensions.get('window').width;
const noteWidth = (phoneWidth - s(14) * 3) / 2;

const Note = ({ id, title, active, description, type }: NotePropsType) => {
	const setColor = () => {
		switch (type) {
			case 'low':
				return '#32BC9B';
			case 'medium':
				return '#FF784B';
			case 'high':
				return '#FF2D55';
		}
	};

	const bgColor = setColor();
	const INACTIVE_COLOR = '#7F7F7F';
	const isTooLong = description.split(' ').length > 8;
	const newDescription = isTooLong
		? description.split(' ').slice(0, 7).join(' ') + '...'
		: description;

	return (
		<View style={[styles.container, { backgroundColor: active ? bgColor : INACTIVE_COLOR }]}>
			<Text style={styles.title}>{title}</Text>
			<Text>{newDescription}</Text>
		</View>
	);
};

export default Note;

const styles = StyleSheet.create({
	container: {
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
		gap: s(8),
		padding: s(10),
		margin: s(5),
		width: noteWidth,
		height: s(130),
		borderRadius: s(12),
		overflow: 'hidden',
	},

	title: {
		fontFamily: 'Inter_700Bold ',
		fontSize: s(16),
		color: '#fff',
		fontWeight: 'bold',
	},

	description: {
		fontFamily: 'Inter_400Regular ',
		fontSize: s(14),
		color: '#fff',
	},
});
