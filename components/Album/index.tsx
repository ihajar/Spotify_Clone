import { View, Image, Text } from 'react-native'
import React from 'react';
import styles from './styles';
import { AlbumTypes } from '../../types';

export type AlbumProps = {
    album: AlbumTypes,
    }
    


const Album = (props: AlbumProps) => {
  return (
    <View style={styles.container}>
      <Image source={{ url: props.album.imageUrl }} style={styles.image} />
      <Text style={styles.text}>{props.album.artistsHeadline}</Text>
    </View>
  )
}

export default Album;