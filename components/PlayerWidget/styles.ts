import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";


const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 49,
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
    progress: {
        height: 3,
        backgroundColor: '#1DD05D',
    },
    row: {

        flexDirection: 'row',

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