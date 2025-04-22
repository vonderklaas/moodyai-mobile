import { StyleSheet, ScrollView, View, TouchableOpacity, TextInput } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
    return (
        <ThemedView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                
                <ThemedText style={styles.headerTitle}>
                    Tap the emoji that best describes your mood
                </ThemedText>
                
                <View style={styles.emojiRow}>
                    <TouchableOpacity style={[styles.emojiCircle, { backgroundColor: '#F47C7C' }]}>
                        <ThemedText style={styles.emoji}>😠</ThemedText>
                    </TouchableOpacity> 
                    
                    <TouchableOpacity style={[styles.emojiCircle, { backgroundColor: '#FDB777' }]}>
                        <ThemedText style={styles.emoji}>🙁</ThemedText>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={[styles.emojiCircle, { backgroundColor: '#FFDF6B' }]}>
                        <ThemedText style={styles.emoji}>🙂</ThemedText>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={[styles.emojiCircle, { backgroundColor: '#ADE792' }]}>
                        <ThemedText style={styles.emoji}>😊</ThemedText>
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
        padding: 32,
        alignItems: 'center',
    },
    headerTitle: {
        fontSize: 26,
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: 40,
        marginTop: 60,
        lineHeight: 36,
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
