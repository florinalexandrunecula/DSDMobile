import { StyleSheet, View, Text, Pressable, Button } from 'react-native';
import Animated, { LightSpeedOutLeft } from 'react-native-reanimated';

function MovieItem(props) {
    return (
        <Animated.View
            style={styles.container}
            exiting={LightSpeedOutLeft}
        >
            <View style={styles.movieItem}>
                {/* <Pressable
                onPress={props.onDeleteItem.bind(this, props.id)}
                style={({ pressed }) => pressed && styles.pressedItem}
            >
                <Text style={styles.movieText}>{props.text}</Text>
            </Pressable> */}
                <Pressable
                    onPress={props.showItem.bind(this, props.title, props.link)}
                    style={({ pressed }) => pressed && styles.pressedItem}
                >
                    <Text style={styles.movieText} >{props.title}</Text>
                </Pressable>
            </View>
            <View style={styles.buttonView}>
                <Button title="Delete" onPress={props.onDeleteItem.bind(this, props.id)} />
            </View>
        </Animated.View>
    );
}

export default MovieItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },
    buttonView: {
        backgroundColor: '#f31282',
        borderRadius: 6,
        flex: 1,
        margin: 8,
    },
    movieItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
        flex: 3,
    },
    pressedItem: {
        opacity: 0.5,
    },
    movieText: {
        color: 'white',
        padding: 8,
    },
});