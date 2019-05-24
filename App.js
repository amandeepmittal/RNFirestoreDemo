import React, { Component } from "react"
import { StyleSheet, SafeAreaView, Text, View, TextInput, Button } from "react-native"

export default class App extends Component {
	state = {
		title: "",
		author: ""
	}

	render() {
		const { title, author } = this.state

		return (
			<SafeAreaView style={styles.container}>
				<View style={styles.inputContainer}>
					<TextInput
						value={title}
						placeholder='Title of the book'
						style={styles.textInput}
						onChangeText={value => this.setState({ title: value })}
					/>
					<TextInput
						value={author}
						placeholder='Name of the Author'
						style={styles.textInput}
						onChangeText={value => this.setState({ author: value })}
					/>
					<Button onPress={() => alert("Add the book")} title='Add the book' color='#841584' />
				</View>
			</SafeAreaView>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#F5FCFF"
	},
	inputContainer: {
		margin: 30
	},
	textInput: {
		height: 30,
		textAlign: "center",
		color: "#333333",
		marginBottom: 10,
		fontSize: 24,
		borderWidth: 1,
		borderBottomColor: "#111111"
	}
})
