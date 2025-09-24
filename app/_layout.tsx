import { Stack } from 'expo-router';
import { Platform } from 'react-native';

export default function RootLayout() {
	return (
		<Stack>
			<Stack.Screen name='index' options={{ headerTitle: 'Home', headerShown: false }} />
			<Stack.Screen
				name='add-note/index'
				options={{
					headerTitle: 'Task Manager',
					headerTitleAlign: 'center',
					headerBackVisible: Platform.OS === 'ios' ? false : true,
					headerStyle: {
						backgroundColor: '#ff784b',
					},
					headerTitleStyle: {
						color: '#fff',
						fontWeight: 'bold',
					},
				}}
			/>
		</Stack>
	);
}
