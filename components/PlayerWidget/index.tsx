import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import styles from './styles'
import { Song } from '../../types'
import { AntDesign, FontAwesome } from '@expo/vector-icons'
import { Sound } from 'expo-av/build/Audio/Sound'


const song = {
    id: '1',
    uri: 'https://soundcloud.com/taylormusic2019/18-dont-blame-me-live-2018?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    imageUrl: 'https://s.abcnews.com/images/Entertainment/ABC_taylor_swift_jef_140818_4x3t_992.jpg',
    title: 'Blank Space',
    artist: 'Taylor Swift',
}

const PlayerWidget = () => {

    const [sound, setSound] = useState<Sound|null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(true);
    const [duration, setDuration] = useState<number|null>(null);
    const [position, setPosition] = useState<number|null>(null);



    const onPlaybackStatusUpdate = (status) => {
        setIsPlaying(status.isPlaying);
        setDuration(status.durationMillis);
        setPosition(status.positionMillis);
    }
    const playCurrentSong = async () => {
        if (sound) {
            await sound.unloadAsync();
        }

        const { sound: newSound } = await Sound.createAsync(
             { uri: song.uri },
             { shouldPlay: isPlaying },
             onPlaybackStatusUpdate
        )
        setSound(newSound)
    }
    useEffect(() => {
        if (song) {
            playCurrentSong();
        }
        
    }, [song])

    const onPlayPausePress = async () => {
        if (!sound) {
            return;
        }
        if (isPlaying) {
            await sound.stopAsync();
        } else {
            await sound.playAsync();
        }
    }
    
    const getProgress = () => {
        if (sound === null || duration === null || position === null) {
            return 0;
        }
        return (position / duration) * 100;
    }

    return (
        <View style={styles.container}>
            <View style={[styles.progress, {width: `${getProgress()}%`}]}></View>
            <View style={styles.row}>
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
                        <TouchableOpacity onPress={onPlayPausePress}>
                            <FontAwesome name={isPlaying ? 'pause' : 'play'} size={30} color={'white'} />
                        </TouchableOpacity>
                        
                    </View>       
                </View>
            </View>
        </View>
  )
}

export default PlayerWidget