import { StyleSheet, View, Text, Pressable, Button, Share } from 'react-native';
import Animated, { LightSpeedOutLeft } from 'react-native-reanimated';

function MovieItem(props) {

    const onShare = async () => {
        try {
          const result = await Share.share({
            message:
              `Want to watch movie ${props.title} with me?`,
          });
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          alert(error.message);
        }
      };

    return (
        <Animated.View
            style={styles.container}
            exiting={LightSpeedOutLeft}
        >
            <View style={styles.movieItem}>
                <Pressable
                    onPress={props.showItem.bind(this, props.title, props.id, props.link)}
                    style={({ pressed }) => pressed && styles.pressedItem}
                >
                    <Text style={styles.movieText} >{props.title}</Text>
                </Pressable>
            </View>
            <View style={styles.buttonView}>
                <Button title="Delete" onPress={props.onDeleteItem.bind(this, props.id)} />
            </View>
            <View style={styles.shareButtonView}>
                <Button title="Share" onPress={onShare} />
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
    shareButtonView: {
        backgroundColor: 'blue',
        borderRadius: 6,
        flex: 1,
        margin: 8,
    },
    movieItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc',
        flex: 2,
    },
    pressedItem: {
        opacity: 0.5,
    },
    movieText: {
        color: 'white',
        padding: 8,
    },
});