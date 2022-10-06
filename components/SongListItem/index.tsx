import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './styles'
import { Song } from '../../types'

export type SongListItemProps = {
    song: Song
}

const SongListItem = (props: SongListItemProps) => {
    const { song } = props;
    return (
    <View style={styles.container}>
        <Image 
            source={{ url: props.song.imageUrl }}
            style={styles.image}
        />
        <View style={styles.rightContainer}>
            <Text style={styles.title}>{song.title}</Text>
            <Text style={styles.artist}>{song.artist}</Text>
        </View>
        

    </View>
  )
}

export default SongListItem