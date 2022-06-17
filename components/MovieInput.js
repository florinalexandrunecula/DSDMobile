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

    let apiKey = "17a97a1f978df593776c22745ce4c2a3";

    function movieInputHandler(enteredText) {
        setEnteredMovieText(enteredText);
    }

    function addMovieHandler() {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${encodeURIComponent(enteredMovieText + " trailer")}&page=1&include_adult=false`)
            .then(response => response.json())
            .then(data => {
                fetch(`https://api.themoviedb.org/3/movie/${data.results[0].id}/videos?api_key=${apiKey}&language=en-US`)
                    .then(response => response.json())
                    .then(data => {
                        props.onAddMovie({
                            title: enteredMovieText,
                            link: data.results[0].key,
                        });
                    });
            });
        setEnteredMovieText('');
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