import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { colors } from '../utils/colors';
import { fontSizes, spacing } from '../utils/sizes';

export const FocusHistory = ({ history }) => {
  if(!history || !history.length) return <Text style={styles.empty}>We haven't focused on anything yet.</Text>;
  const renderItem = ({ item }) => <Text style={styles.item}>- {item}</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things we've focused on:</Text>
      <FlatList data={history} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.s,
    flex: 1
  },
  item: {
    fontSize: 12,
    color: colors.white,
    paddingTop: spacing.s
  },
  title: {
    color: colors.white,
    fontSizes: fontSizes.l,
    textAlign: 'start',
    fontWeight: 'bold'
  },
  empty: {
      paddingHorizontal: spacing.s,
      color: colors.white
  }
});
