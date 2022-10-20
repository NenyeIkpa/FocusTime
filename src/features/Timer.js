import React, {useState} from 'react';
import { View, Text, StyleSheet, Vibration } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { useKeepAwake } from 'expo-keep-awake';
import {Countdown} from '../components/Countdown'
import {RoundedButton} from '../components/RoundedButton';
import {Timing} from './Timing';
import {spacing} from '../utils/sizes';
import {colors} from '../utils/colors';



  const ONE_SECOND_IN_MS = 1000;

  const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    2 * ONE_SECOND_IN_MS,
    3 * ONE_SECOND_IN_MS,
    4 * ONE_SECOND_IN_MS,
    5 * ONE_SECOND_IN_MS
  ];

 

export const Timer = ({focusSubject, clearSubject, onTimerEnd}) => {
  useKeepAwake();
  const[isStarted, setIsStarted] = useState(false);
  const[progress, setProgress] = useState(1)
  const[minutes, setMinutes] = useState(0.1)

const onEnd = (reset) => {
  Vibration.vibrate(PATTERN);
  setIsStarted(false);
  setProgress(1);
  reset();
  onTimerEnd(focusSubject)

}


  return (
  <View style={styles.container}> 
    <View style={styles.countdown}>
      <Countdown 
      minutes={minutes}
      isPaused={!isStarted}
      onProgress={setProgress}
      onEnd={onEnd}/>
      <View style={styles.focus}>
      <Text style={styles.title}>Focusing on:</Text>
      <Text style={styles.task}>{focusSubject}</Text>
    </View>
    </View>
    <View style={{paddingBottom: spacing.s}}>
        <ProgressBar color={colors.progressColor} height={spacing.s} progress={progress}/>
      </View>
      <View style={styles.timingWrapper}>
    <Timing onChangeTime={setMinutes} />
    </View>
    <View style={styles.buttonWrapper}>
    {!isStarted && <RoundedButton style={styles.button} title='start' onPress={() => {setIsStarted(true)}}/>}
    {isStarted && <RoundedButton style={styles.button} title='pause' onPress={()=> {setIsStarted(false)}}/>}
    </View>
    <View  style={styles.clearSubjectWrapper}>
    <RoundedButton size={50} title='-' onPress={() => clearSubject()} />
    </View>
  </View>
  )}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timingWrapper: {
    flex: 0.1,
    flexDirection: 'row',
    paddingTop: spacing.xxl
  },
  buttonWrapper: {
    flex: 0.4,
    flexDirection: 'row',
    padding: spacing.m,
    justifyContent: 'center',
    alignItems:'center'
  },
  clearSubjectWrapper: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  focus: {
    paddingTop: spacing.xxl,
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  task: {
    color: colors.white,
    textAlign: 'center'

  }
})