import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import styles from './styles'
import { Song } from '../../types'
import { AntDesign, FontAwesome } from '@expo/vector-icons'
import { Audio } from 'expo-av'


const song = {
    id: '1',
    uri: 'https://soundcloud.com/taylormusic2019/18-dont-blame-me-live-2018?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    imageUrl: 'https://s.abcnews.com/images/Entertainment/ABC_taylor_swift_jef_140818_4x3t_992.jpg',
    title: 'Blank Space',
    artist: 'Taylor Swift',
}

const PlayerWidget = () => {

    const onPlaybackStatusUpdate = (status) => {
        console.log(status);
    }
    const playCurrentSong = async () => {
        const { sound } = Audio.Sound.createAsync(
             { uri: song.uri },
             { shouldPlay: true },
             onPlaybackStatusUpdate
        )
    }
    useEffect(() => {
        // play the song
        playCurrentSong();
    }, [])
    
    return (
        <View style={styles.container}>
            <Image 
                source={{ url: song.imageUrl }}
                style={styles.image}
            />
            {/* Song container player tools */}
            <View style={styles.rightContainer}>
                <View style={styles.nameContainer}>
                    <Text style={styles.title}>{song.title} . </Text>
                    <Text style={styles.artist}>{song.artist}</Text>
                </View>
                <View style={styles.iconsContainer}>
                    <AntDesign color={'white'} size={30} name="hearto" />
                    <FontAwesome name='play' size={30} color={'white'} />
                </View>       
            </View>
        </View>
  )
}

export default PlayerWidget