import React from 'react'
import { TouchableOpacity, View, FlatList, StyleSheet } from 'react-native'



const buttonsItem = ({ item }) => (
<View style={styles.buttons_item}>
<TouchableOpacity>
    <View style={styles.button}>{'Button'}</View>
</TouchableOpacity>
</View>
  );

const Buttons = ({ item }) => (
<FlatList
    horizontal={true}
    style={styles.buttons}
    data={item}
    renderItem={buttonsItem}
    keyExtractor={item => item.id}
    showsHorizontalScrollIndicator={false}
    pagingEnabled={true}
    />
);

export default Buttons;

const styles = StyleSheet.create({
    'button': {
        'flex': 1,
        'padding': 10,
        'margin': 5,
        'textAlign': 'center',
        'backgroundColor': '#1ACDA5',
        'color': 'white'
    }
});