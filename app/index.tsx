import { View, Text, StyleSheet, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useCallback, useEffect, useState } from 'react';
import { useFonts } from '@expo-google-fonts/inter';
import { Inter_400Regular } from '@expo-google-fonts/inter/400Regular';
import { Inter_500Medium } from '@expo-google-fonts/inter/500Medium';
import { Inter_700Bold } from '@expo-google-fonts/inter/700Bold';
import { s } from 'react-native-size-matters';
import { getTodos } from '../src/utils/actions';
import { Todo } from '../src/utils/types';
import Note from '../src/components/Note';
import AddNoteBtn from '../src/components/AddNoteBtn';
import { useFocusEffect } from 'expo-router';

export default function HomeScreen() {
	let [fontsLoaded] = useFonts({
		Inter_400Regular,
		Inter_500Medium,
		Inter_700Bold,
	});

	const [todos, setTodos] = useState<Todo[]>([]);

	const fetchTodos = useCallback(async () => {
		try {
			console.log('Call function getTodos()');
			const data = await getTodos();
			setTodos(data);
		} catch (error) {
			console.log('Error fetching todos:', error);
		}
	}, []);

	useEffect(() => {
		fetchTodos();
	}, [fetchTodos]);

	useFocusEffect(
		useCallback(() => {
			fetchTodos();
			return () => {};
		}, [fetchTodos])
	);

	if (!fontsLoaded) {
		return null;
	}

	return (
		<View style={styles.container}>
			<FlatList
				data={todos}
				renderItem={({ item }) => (
					<Note
						id={item._id}
						title={item.title}
						active={item.active}
						description={item.description}
						type={item.type}
					/>
				)}
				numColumns={2}
				keyExtractor={item => item._id}
				contentContainerStyle={styles.notes}
			/>
			<AddNoteBtn />
			<StatusBar style='auto' />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#F2F2F2',
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: s(50),
		padding: s(10),
	},
	notes: {
		gap: s(8),
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 10,
		textAlign: 'center',
	},
	subtitle: {
		fontSize: 16,
		color: '#666',
		textAlign: 'center',
	},
});
