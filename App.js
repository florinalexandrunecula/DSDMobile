import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import MovieItem from './components/MovieItem';
import MovieInput from './components/MovieInput';
import MovieDetails from './components/MovieDetails';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [showModalIsVisible, setShowModalIsVisible] = useState(false);
  const [moviesList, setMoviesList] = useState([]);
  const [currentMovie, setCurrentMovie] = useState({
    title: "",
    link: "",
  });

  function startAddMovieHandler() {
    setModalIsVisible(true);
  }

  function endAddMovieHandler() {
    setModalIsVisible(false);
  }

  function startShowMovieHandler() {
    setShowModalIsVisible(true);
  }

  function endShowMovieHandler() {
    setShowModalIsVisible(false);
  }

  function showMovieDetails(title, link) {
    setCurrentMovie({
      title: title,
      link: link,
    });
    startShowMovieHandler();
  }

  function addMovieHandler(enteredMovie) {
    setMoviesList((currentMoviesList) => [
      ...currentMoviesList,
      { title: enteredMovie.title,
        link: enteredMovie.link,
        id: Math.random().toString() 
      },
    ]);
    endAddMovieHandler();
  }

  function deleteMovieHandler(id) {
    setMoviesList((currentMoviesList) => {
      return currentMoviesList.filter((movie) => movie.id !== id);
    });
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Movie"
          color="#a065ec"
          onPress={startAddMovieHandler}
        />
        <MovieInput
          visible={modalIsVisible}
          onAddMovie={addMovieHandler}
          onCancel={endAddMovieHandler}
        />
        <MovieDetails
          visible={showModalIsVisible}
          title={currentMovie.title}
          link={currentMovie.link}
          exitDetails={endShowMovieHandler}
        />
        <View style={styles.moviesContainer}>
          <FlatList
            data={moviesList}
            renderItem={(itemData) => {
              return (
                <MovieItem
                  title={itemData.item.title}
                  link={itemData.item.link}
                  id={itemData.item.id}
                  showItem={showMovieDetails}
                  onDeleteItem={deleteMovieHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#1e085a",
  },
  moviesContainer: {
    flex: 5,
  },
});
