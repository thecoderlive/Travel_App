import React from 'react'
import { Image, View, FlatList, StyleSheet } from 'react-native'



const imageFeedItem = ({ item }) => (
<View style={styles.image_feed_item}>
<Image
    style={styles.art_photo}
    source={{uri: item.art_photo}}
    />
</View>
  );

const ImageFeed = ({ item }) => (
<FlatList
    horizontal={true}
    style={styles.image_feed}
    data={item}
    renderItem={imageFeedItem}
    keyExtractor={item => item.id}
    showsHorizontalScrollIndicator={false}
    pagingEnabled={true}
    />
);

export default ImageFeed;

const styles = StyleSheet.create({
    'art_photo': {
        'width': '100vw',
        'height': '100vw',
        'marginTop': 5
    }
});