import { useState } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import MMKVStorage, { useMMKVStorage } from "react-native-mmkv-storage";

import MovieItem from './MovieItem';
import MovieInput from './MovieInput';
import MovieDetails from './MovieDetails';

const storage = new MMKVStorage.Loader().initialize();

function MovieList() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [showModalIsVisible, setShowModalIsVisible] = useState(false);
  const [moviesList, setMoviesList] = useMMKVStorage("list", storage, []);
  const [currentMovie, setCurrentMovie] = useState({
    title: "",
    id: "",
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

  function showMovieDetails(title, id, link) {
    setCurrentMovie({
      title: title,
      id: id,
      link: link,
    });
    startShowMovieHandler();
  }

  function addMovieHandler(enteredMovie) {
    console.log(enteredMovie);
    setMoviesList((currentMoviesList) => [
      ...currentMoviesList,
      { title: enteredMovie.title,
        link: enteredMovie.link,
        id: Math.random().toString(),
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
          id={currentMovie.id}
          exitDetails={endShowMovieHandler}
        />
        <View style={styles.moviesContainer}>
          <FlatList
            data={moviesList}
            renderItem={(itemData) => {
              return (
                <MovieItem
                  title={itemData.item.title}
                  id={itemData.item.id}
                  link={itemData.item.link}
                  showItem={showMovieDetails}
                  onDeleteItem={deleteMovieHandler}
                />
              );
            }}
            keyExtractor={(item) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
      </View>
    </>
  );
}

export default MovieList;

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
