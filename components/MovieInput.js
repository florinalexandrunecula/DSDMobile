import { useState } from 'react';
import {
    View,
    TextInput,
    Button,
    StyleSheet,
    Modal,
    Image,
} from 'react-native';

function MovieInput(props) {
    const [enteredMovieText, setEnteredMovieText] = useState('');
    const [enteredMovieLink, setEnteredMovieLink] = useState('');

    function movieInputHandler(enteredText) {
        setEnteredMovieText(enteredText);
    }

    function movieLinkHandler(enteredLink) {
        setEnteredMovieLink(enteredLink);
    }

    function addMovieHandler() {
        props.onAddMovie({
            title: enteredMovieText, 
            link: enteredMovieLink
        });
        setEnteredMovieText('');
        setEnteredMovieLink('');
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image
                    style={styles.image}
                    source={require('../assets/images/video.png')}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Add a new movie!"
                    onChangeText={movieInputHandler}
                    value={enteredMovieText}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Youtube trailer link!"
                    onChangeText={movieLinkHandler}
                    value={enteredMovieLink}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={props.onCancel} color="#f31282" />
                    </View>
                    <View style={styles.button}>
                        <Button title="Add Movie" onPress={addMovieHandler} color="#b180f0" />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

export default MovieInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b',
    },
    image: {
        width: 100,
        height: 100,
        margin: 20,
        tintColor: "white",
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderRadius: 6,
        width: '100%',
        padding: 16,
        margin: 5,
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row',
    },
    button: {
        width: 105,
        marginHorizontal: 8,
    },
});