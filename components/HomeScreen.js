import { StyleSheet, View, Image, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {

  return (
    <View style={styles.appContainer}>
      <Image
        style={styles.image}
        source={require('../assets/images/video.png')}
      />
      <Text style={styles.title} >Your Movie Queue</Text>
      <View style={styles.button} >
        <Button
          title="Get started!"
          color="red"
          onPress={() => navigation.navigate('MovieList')}
        />
      </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    margin: 30,
    tintColor: "white",
  },
  appContainer: {
    flex: 1,
    backgroundColor: '#1e085a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 5,
  },
  button: {
    backgroundColor: "#1d05aa",
    borderRadius: 6,
  }
});
