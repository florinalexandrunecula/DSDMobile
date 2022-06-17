import { View, Modal, Text, StyleSheet, Button } from "react-native";
import YoutubePlayer from 'react-native-youtube-iframe';

function MovieDetails(props) {
    let apiKey = "17a97a1f978df593776c22745ce4c2a3";

    return (
        <Modal visible={props.visible} animationType="slide" >
            <View style={styles.container} >
                <Text style={styles.title} >{props.title}</Text>
                <YoutubePlayer
                    height={300}
                    play={false}
                    videoId={props.link}
                />
                <Button title="Back" onPress={props.exitDetails} />
            </View>
        </Modal>
    );
}

export default MovieDetails;

const styles = StyleSheet.create({
    title: {
        color: "#000",
        fontSize: 40,
        fontWeight: "bold"
    },
    container: {
        flex: 1,
        padding: 40,
        backgroundColor: '#311b6b',
        alignContent: "center",
        justifyContent: "center",
    },
});