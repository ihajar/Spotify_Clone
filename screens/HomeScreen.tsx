import { StyleSheet , Text, View } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';

import { RootTabScreenProps } from '../types';
import AlbumCategory from '../components/AlbumCategory';

const albumCategory = {
  id: '1',
  title: 'Happy Vibes',
  albums: [
    {
      id: '1',
      imageUrl: 'https://s.abcnews.com/images/Entertainment/ABC_taylor_swift_jef_140818_4x3t_992.jpg',
      artistsHeadline: 'Taylor Swift',
    }, {
      id: '2',
      imageUrl: 'https://i.guim.co.uk/img/media/5379a82db33fa94d0468a6f2a568e2defb057683/0_1337_5575_3345/master/5575.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=f22b6bcf12fccf40844adac75f55e34d',
      artistsHeadline: 'Dua Lipa',
    }, {
      id: '3',
      imageUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/99c08eac-1777-4459-81b0-341be2da5190/dbnzq1q-7a603463-13e2-4671-98c2-097bfd2b435c.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzk5YzA4ZWFjLTE3NzctNDQ1OS04MWIwLTM0MWJlMmRhNTE5MFwvZGJuenExcS03YTYwMzQ2My0xM2UyLTQ2NzEtOThjMi0wOTdiZmQyYjQzNWMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.iBoNEJZ6Memf8Pl_r7un1tTrvueQRUv3hhwBtdnb2Uc',
      artistsHeadline: 'Bts',
    }, {
      id: '4',
      imageUrl: 'https://bloximages.newyork1.vip.townnews.com/gonzagabulletin.com/content/tncms/assets/v3/editorial/6/1e/61e9575a-4d65-11ea-b79d-9716049e8de3/5e43a2f534670.image.jpg?resize=1200%2C1200',
      artistsHeadline: 'JP Saxe',
    },
  ]
};

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <AlbumCategory 
        title={albumCategory.title} 
        albums={albumCategory.albums} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
