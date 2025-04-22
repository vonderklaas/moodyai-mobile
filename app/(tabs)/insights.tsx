import { StyleSheet, View, ScrollView, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function InsightsScreen() {
    const insets = useSafeAreaInsets();
    
    return (
        <ThemedView style={styles.container}>
            {/* Add a spacer view at the top to prevent the fade effect */}
            <View style={{
                height: insets.top + (Platform.OS === 'ios' ? 15 : 10), 
                backgroundColor: 'white'
            }} />
            
            <ScrollView 
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.titleContainer}>
                    <ThemedText style={styles.title}>Insights</ThemedText>
                </View>
                
                {/* Average Mood */}
                <View style={styles.averageMoodContainer}>
                    <ThemedText style={styles.averageMoodValue}>4.2</ThemedText>
                    <ThemedText style={styles.averageMoodLabel}>Average mood</ThemedText>
                </View>
                
                {/* Recommendation */}
                <ThemedText style={styles.sectionTitle}>Recommendations</ThemedText>
                <View style={styles.recommendationsContainer}>
                    <View style={styles.recommendationItem}>
                        <ThemedText style={styles.recommendationText}>Maintain regular sleep schedule</ThemedText>
                    </View>
                    <View style={styles.recommendationItem}>
                        <ThemedText style={styles.recommendationText}>Exercise regularly to boost your mood</ThemedText>
                    </View>
                    <View style={styles.recommendationItem}>
                        <ThemedText style={styles.recommendationText}>Don't skip breakfast to avoid anxiety</ThemedText>
                    </View>
                </View>
                
                {/* Progress */}
                <ThemedText style={styles.sectionTitle}>Progress</ThemedText>
                <View style={styles.progressContainer}>
                    <View style={styles.progressBar}>
                        <View style={styles.progressFill}></View>
                    </View>
                </View>
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
        paddingTop: 10,
    },
    titleContainer: {
        marginBottom: 50,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        lineHeight: 34,
    },
    averageMoodContainer: {
        marginTop: 0,
        marginBottom: 32,
    },
    averageMoodValue: {
        fontSize: 42,
        fontWeight: 'bold',
        lineHeight: 50,
    },
    averageMoodLabel: {
        fontSize: 18,
        color: '#666',
    },
    sectionTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    recommendationsContainer: {
        marginBottom: 32,
        gap: 12,
    },
    recommendationItem: {
        backgroundColor: 'rgba(0,0,0,0.03)',
        borderRadius: 12,
        padding: 16,
    },
    recommendationText: {
        fontSize: 16,
    },
    progressContainer: {
        marginBottom: 40,
    },
    progressBar: {
        height: 10,
        backgroundColor: '#e0e0e0',
        borderRadius: 5,
        overflow: 'hidden',
    },
    progressFill: {
        width: '40%',
        height: '100%',
        backgroundColor: '#000',
        borderRadius: 5,
    },
});
