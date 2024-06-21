import { StyleSheet, Text, View, FlatList } from 'react-native';
import exercises from '../../assets/data/exercises.json'
import ExerciseListItem from '../../components/ExcerciseListItem'
export default function App() {
    return (
        <View style={styles.container}>
            <FlatList
                data={exercises}
                contentContainerStyle={{ gap: 5 }}
                renderItem={({ item }) => <ExerciseListItem item={item} />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'ghostwhite',
        padding: 10,
        justifyContent: 'center',
        paddingTop: 20,
    },
});
