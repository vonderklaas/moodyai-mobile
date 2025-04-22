import { StyleSheet, ScrollView, View, TouchableOpacity, TextInput, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
    const insets = useSafeAreaInsets();

    return (
        <ThemedView style={styles.container}>
            <View style={{
                height: insets.top + (Platform.OS === 'ios' ? 15 : 10),
                backgroundColor: 'white'
            }} />

            <ScrollView
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.titleContainer}>
                    <ThemedText style={styles.title}>Daily Tracker</ThemedText>
                </View>

                <ThemedText style={styles.headerTitle}>
                    What is your mood now?
                </ThemedText>

                <View style={styles.emojiRow}>
                    <TouchableOpacity style={[styles.emojiCircle, { backgroundColor: '#ADE792' }]}>
                        <ThemedText style={styles.emoji}>😊</ThemedText>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.emojiCircle, { backgroundColor: '#FFDF6B' }]}>
                        <ThemedText style={styles.emoji}>🙂</ThemedText>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.emojiCircle, { backgroundColor: '#FDB777' }]}>
                        <ThemedText style={styles.emoji}>🙁</ThemedText>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.emojiCircle, { backgroundColor: '#F47C7C' }]}>
                        <ThemedText style={styles.emoji}>😠</ThemedText>
                    </TouchableOpacity>
                </View>

                <View style={styles.noteContainer}>
                    <TextInput
                        placeholder="What do you think caused it?"
                        placeholderTextColor="#999"
                        style={styles.noteInput}
                    />
                </View>

                <TouchableOpacity style={styles.logButton}>
                    <ThemedText style={styles.logButtonText}>Track it</ThemedText>
                </TouchableOpacity>
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
        alignItems: 'center',
        paddingTop: 10,
    },
    titleContainer: {
        marginBottom: 50,
        alignSelf: 'flex-start',
        width: '100%',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        lineHeight: 34,
    },
    headerTitle: {
        fontSize: 22,
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: 30,
        lineHeight: 30,
    },
    emojiRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 12,
        marginBottom: 30,
    },
    emojiCircle: {
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    emoji: {
        fontSize: 28,
        lineHeight: 38,
    },
    noteContainer: {
        width: '100%',
        marginBottom: 40,
    },
    noteInput: {
        backgroundColor: '#f0f0f0',
        padding: 16,
        borderRadius: 10,
        width: '100%',
        fontSize: 16,
    },
    logButton: {
        padding: 16,
        paddingHorizontal: 32,
        borderRadius: 50,
        backgroundColor: '#000',
        alignItems: 'center',
    },
    logButtonText: {
        fontSize: 16,
        fontWeight: '700',
        color: '#fff',
    },
});
