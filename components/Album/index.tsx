import { 
  View, 
  Image, 
  Text, 
  TouchableWithoutFeedback 
} from 'react-native'

import React from 'react';
import styles from './styles';
import { AlbumTypes } from '../../types';
import { useNavigation } from '@react-navigation/native';

export type AlbumProps = {
    album: AlbumTypes,
    }
    


const Album = (props: AlbumProps) => {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('AlbumScreen', { id: props.album.id })
  }

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image source={{ url: props.album.imageUrl }} style={styles.image} />
        <Text style={styles.text}>{props.album.artistsHeadline}</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default Album;