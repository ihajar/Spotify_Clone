import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";


const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 49,
        flexDirection: 'row',
        backgroundColor: '#131313',
        width: '100%',
        borderWidth: 2,
        borderColor: 'black',
    },
    image: {
        width: 75,
        height: 75,
        marginRight: 10,
    },
    rightContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        margin: 5,
    },
    title: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    artist: {
        color: 'lightgray',
        fontSize: 16,
    },
    iconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: 85,
    },
    nameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
})
export default styles;