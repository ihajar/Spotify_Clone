import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { AlbumTypes } from '../../types'
import styles from './styles';


export type AlbumHeaderProps = {
    album: AlbumTypes;
}

const AlbumHeader = (props: AlbumHeaderProps) => {
  const { album } = props;
    return (
    <View style={styles.container}>
        <Image source={{ url: album.imageUrl }} style={styles.image} />
      {/* Name */}
      <Text style={styles.name}>{album.name}</Text>
      {/* Creator Number of Likes */}
      <View style={styles.creatorContainer}>
        <Text style={styles.creator}>By {album.by}</Text>
        <Text style={styles.likes}>{album.numberofLikes} Likes</Text>
      </View>
      {/* Play button */}
      <TouchableOpacity>
        <View style={styles.button}>
            <Text style={styles.buttonText}>PLAY</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default AlbumHeader;