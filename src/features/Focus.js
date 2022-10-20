import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
import { colors } from '../utils/colors'
import { RoundedButton } from '../components/RoundedButton'
import { spacing } from '../utils/sizes'




export const Focus = ({addSubject}) => {
  const [subject, setSubject] = React.useState(null)
  console.log(subject)

  return(
      <View style={styles.container}>
  <View style={styles.inputContainer} >
  <TextInput 
  style={styles.textInput} 
  onChangeText={setSubject} 
  label='What would you like to to focus on?'/>
  <View style={styles.button}>
  <RoundedButton title='+' size={50} onPress={() => addSubject(subject)} />
  </View>
  </View>
  </View>

  )};


const styles = StyleSheet.create({
  container: {
    paddingBottom: spacing.l
  },
  inputContainer: {
    marginTop: spacing.l,
    padding: spacing.s,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  textInput: {
    flex: 1,
    marginEnd: spacing.s
  },
  button: {
    justifyContent: 'center'
  }
})