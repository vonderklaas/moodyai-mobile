import { StyleSheet, View, ScrollView, FlatList } from 'react-native';
import { format } from 'date-fns';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

// Define mood entry interface
interface MoodEntry {
    id: string;
    date: Date;
    mood: string;
    emoji: string;
    color: string;
    note: string;
}

// Sample data - this would come from your storage in a real app
const moodHistory: MoodEntry[] = [
    { id: '1', date: new Date(2025, 3, 4), mood: 'happy', emoji: '😊', color: '#ADE792', note: 'Had a great day!' },
    { id: '2', date: new Date(2025, 3, 3), mood: 'neutral', emoji: '🙂', color: '#FFDF6B', note: 'Regular day' },
    { id: '3', date: new Date(2025, 3, 2), mood: 'sad', emoji: '🙁', color: '#FDB777', note: 'Feeling a bit down' },
    { id: '4', date: new Date(2025, 3, 1), mood: 'angry', emoji: '😠', color: '#F47C7C', note: 'Frustrated with work' },
    { id: '5', date: new Date(2025, 2, 28), mood: 'happy', emoji: '😊', color: '#ADE792', note: 'Weekend was great' },
];

export default function HistoryScreen() {
    // Render each mood entry
    const renderMoodItem = ({ item }: { item: MoodEntry }) => (
        <View style={styles.moodItem}>
            <View style={[styles.emojiCircle, { backgroundColor: item.color }]}>
                <ThemedText style={styles.emoji}>{item.emoji}</ThemedText>
            </View>
            <View style={styles.moodDetails}>
                <ThemedText style={styles.date}>{format(item.date, 'MMMM d, yyyy')}</ThemedText>
                <ThemedText style={styles.note}>{item.note}</ThemedText>
            </View>
        </View>
    );

    return (
        <ThemedView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View>
                    <ThemedText style={styles.title}>Mood History</ThemedText>
                </View>

                <FlatList
                    data={moodHistory}
                    renderItem={renderMoodItem}
                    keyExtractor={item => item.id}
                    contentContainerStyle={styles.historyList}
                    scrollEnabled={false}
                />
            </ScrollView>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContent: {
        padding: 24,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 24,
        marginTop: 100,
    },
    historyList: {
        gap: 16,
    },
    moodItem: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 12,
        padding: 16,
        backgroundColor: 'rgba(0,0,0,0.03)',
    },
    emojiCircle: {
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 16,
        paddingTop: 5,
    },
    emoji: {
        fontSize: 24,
    },
    moodDetails: {
        flex: 1,
    },
    date: {
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 4,
    },
    note: {
        fontSize: 14,
        color: '#666',
    },
}); 