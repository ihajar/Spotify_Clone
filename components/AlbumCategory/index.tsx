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
    <View>
      {/* Title of category */}
      <Text style={styles.title}>{props.title}</Text>
      {/* List of albums */}
      <FlatList
        data={props.albums}
        renderItem={({ item }) => <Album album={item} />}
        keyExtractor={( item ) => item.id}
        horizontal
      />
    </View>
  )
}

export default AlbumCategory;