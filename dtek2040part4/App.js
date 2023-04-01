import * as React from 'react';
import { useState } from 'react';
import {Text, View, Button, TextInput, ScrollView, StyleSheet, Alert} from 'react-native';


const Note = ({text}) => {
  return (
    <Text style={styles.textStyle}>{text}</Text>
    )
  }

/** for adding notes, checks if note already exists */
function HandleNotes ({notes, setNotes}) {
  const [text, setText] = useState("");

  const addNote = () => {
    const newNote = {
      id:notes.length+1,
      text: text
    }
    if(notes.some(note => note.text === newNote.text)) {
      Alert.alert(
        "can't add note",
        "note already exists.",
        [
          {
            text: "OK",
          },
        ]
      );
    }
    else {
      setNotes(notes => [...notes, newNote])
      setText("")
      console.log(notes)
    }
  }

  return (
    <View>
      <TextInput style={styles.textInput}
      placeholder="WRITE NOTE HERE"
      onChangeText={newText => setText(newText)}
      value={text}
    />
      <Button 
        color="#841584" 
        title="Add note"
        onPress={addNote}>
      </Button>
    </View>
  );
}

function App() {
  const [notes, setNotes] = useState([]);
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.header}> Notes </Text>
        <ScrollView style={styles.noteContainer}>
          {notes.map((note) => (
            <Note key={note.id} text={note.text} />
          ))}
        </ScrollView>
      </View>
      <HandleNotes notes={notes} setNotes={setNotes} style={styles.textInput} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 500,
    backgroundColor: "blue"
  },
  header: {
    fontSize: 60,
    color: "mediumseagreen",
    marginVertical: 10,
    textAlign: "center"
  },
  noteContainer: {
    height: 500,
    backgroundColor: "aliceblue",
  },
  textStyle: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
    textAlign: "center"
  },
  textInput: {
    height: 50,
    backgroundColor: "yellow",
    textAlign: "center"
  },
  buttonStyle: {
    backgroundColor: "#841584"
  }
});

export default App;
