import React from 'react'
import { Text, ScrollView, StyleSheet } from 'react-native'

import { item } from './DATA'
import ImageFeed from './ImageFeed'
import Buttons from './Buttons'
import ArtFeed from './ArtFeed'

const Feed = () => (
<ScrollView style={styles.feed} showsVerticalScrollIndicator={false}>
<Text style={styles.intro}>{item.intro}</Text>
<ImageFeed item={item.image_feed}/>
<Buttons item={item.buttons}/>
<ArtFeed item={item.art_feed}/>
</ScrollView>
)

export default Feed;

const styles = StyleSheet.create({
    'intro': {
        'color': 'hsl(274,100%,60%)',
        'fontSize': 15,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5
    }
});