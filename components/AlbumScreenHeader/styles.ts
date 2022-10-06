import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 20,
    },
    image: {
        width: 200,
        height: 200,
        margin: 15,
    },
    name: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    },
    creatorContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
    },
    creator: {
        color: 'lightgray',
        margin: 5,
        fontSize: 20,
    },
    likes: {
        color: 'lightgray',
        margin: 5,
        fontSize: 20,

    },
    button: {
        backgroundColor: '#1DD05D',
        width: 175,
        height: 60,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',

    },
});

export default styles;