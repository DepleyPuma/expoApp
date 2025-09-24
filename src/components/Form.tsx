import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';
import { Picker } from '@react-native-picker/picker';
import { Controller, useForm } from 'react-hook-form';
import { postNote } from '../utils/actions';
import { NoteType, TodoBase } from '../utils/types';
import { useRouter } from 'expo-router';

const phoneHeight = Dimensions.get('window').height;
const textAreaHeight = phoneHeight / 2 - 150;

const Form = () => {
	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<TodoBase>({
		defaultValues: {
			title: '',
			type: 'low',
			description: '',
		},
	});

	const router = useRouter();

	const onSubmit = async (data: TodoBase) => {
		const newNote = {
			title: data.title,
			active: true,
			description: data.description,
			type: data.type,
		};

		console.log('FORM SUBMIT:', newNote);

		try {
			await postNote(newNote);
			router.replace('/');
		} catch (e) {
			console.log('Error creating note:', e);
		}
	};

	const onError = (e: unknown) => {
		console.log('FORM ERROR:', e);
	};

	return (
		<View style={styles.container}>
			<View>
				<Text style={styles.label}>Name of Note</Text>
				<Controller
					control={control}
					rules={{ required: true }}
					render={({ field: { onChange, onBlur, value } }) => (
						<TextInput
							placeholder='Enter note name'
							onBlur={onBlur}
							onChangeText={onChange}
							value={value}
							style={styles.input}
						/>
					)}
					name='title'
				/>
				{errors.title && (
					<Text style={styles.errorMessage}>Please enter a valid note name</Text>
				)}
			</View>

			<View>
				<Text style={styles.label}>Type of Note</Text>
				<Controller
					control={control}
					rules={{ required: true }}
					name='type'
					render={({ field: { onChange, value } }) => (
						<View style={styles.pickerContainer}>
							<Picker<NoteType>
								selectedValue={value as NoteType}
								onValueChange={(itemValue: NoteType) => onChange(itemValue)}
								style={styles.picker}
								dropdownIconColor={'#A9A9A9'}
							>
								<Picker.Item label='Low' value='low' />
								<Picker.Item label='Medium' value='medium' />
								<Picker.Item label='High' value='high' />
							</Picker>
						</View>
					)}
				/>
				{errors.type && (
					<Text style={styles.errorMessage}>Please enter a valid note type</Text>
				)}
			</View>

			<View>
				<Text style={styles.label}>Note Message</Text>
				<Controller
					control={control}
					rules={{ required: true }}
					name='description'
					render={({ field: { onChange, onBlur, value } }) => (
						<TextInput
							onBlur={onBlur}
							onChangeText={onChange}
							value={value}
							multiline={true}
							numberOfLines={10}
							style={[
								styles.input,
								{ height: textAreaHeight, textAlignVertical: 'top' },
							]}
						/>
					)}
				/>
				{errors.description && (
					<Text style={styles.errorMessage}>Please enter a valid note message</Text>
				)}
			</View>

			<TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit, onError)}>
				<Text style={styles.buttonText}>Save Note</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Form;

const styles = StyleSheet.create({
	container: {
		paddingTop: vs(20),
		gap: s(20),
	},

	label: {
		fontFamily: 'Inter_400Regular',
		fontSize: s(14),
		color: '#A9A9A9',
	},

	input: {
		padding: s(10),
		fontFamily: 'Inter_400Regular',
		fontSize: s(14),
		borderWidth: s(1),
		borderColor: '#E0E0E0',
		borderRadius: s(24),
	},

	pickerContainer: {
		borderWidth: s(1),
		borderColor: '#E0E0E0',
		borderRadius: s(24),
		paddingHorizontal: s(6),
		overflow: 'hidden',
	},

	picker: {
		height: s(44),
		color: '#000',
		fontSize: s(14),
	},

	button: {
		padding: s(10),
		width: '100%',
		backgroundColor: '#FF784B',
		borderRadius: s(100),
	},

	buttonText: {
		textAlign: 'center',
		fontFamily: 'Inter_500Medium',
		fontSize: s(16),
		color: '#fff',
	},

	errorMessage: {
		color: '#FF0000',
		fontFamily: 'Inter_400Regular',
		fontSize: s(12),
	},
});
