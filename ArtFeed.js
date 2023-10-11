import React from 'react'
import { Image, Text, View, FlatList, StyleSheet } from 'react-native'



const artFeedItem = ({ item }) => (
<View style={styles.art_feed_item}>
<Image
    style={styles.art_photo}
    source={{uri: item.art_photo}}
    />
<Text style={styles.art_caption}>{item.art_caption}</Text>
<Text style={styles.location}>{item.location}</Text>
</View>
  );

const ArtFeed = ({ item }) => (
<FlatList
    horizontal={true}
    style={styles.art_feed}
    data={item}
    renderItem={artFeedItem}
    keyExtractor={item => item.id}
    showsHorizontalScrollIndicator={false}
    pagingEnabled={true}
    />
);

export default ArtFeed;

const styles = StyleSheet.create({
    'art_photo': {
        'width': '100vw',
        'height': '50vw',
        'marginTop': 5
    },
    'art_caption': {
        'color': 'hsl(274,100%,60%)',
        'fontSize': 15,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5
    },
    'location': {
        'color': 'hsl(274,100%,60%)',
        'fontSize': 15,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5
    }
});