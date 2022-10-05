import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { AlbumTypes } from '../../types'
import styles from './styles'
import Album from '../Album'

export type AlbumCategoryProps = {
    title: string,
    albums: [AlbumTypes]
}

const AlbumCategory = (props: AlbumCategoryProps) => {
  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>{props.title}</Text>
      
      <FlatList
        data={props.albums}
        renderItem={({ item }) => <Album album={item} />}
        keyExtractor={( item ) => item.id}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
    </View>
  )
}

export default AlbumCategory;