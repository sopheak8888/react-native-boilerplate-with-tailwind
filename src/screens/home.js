import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

const data = () => {
  const items = [];
  for (let i = 0; i < 100; i++) {
    items.push({
      id: i.toString(),
      title: `Item ${i}`,
    });
  }
  return items;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  listItem: {
    padding: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  listItemText: {
    fontSize: 18,
  },
});

export default function Home() {
  return (
    <View style={styles.container}>
      <FlatList
        data={data()}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <View style={styles.listItem}>
            <Text style={styles.listItemText}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
}
