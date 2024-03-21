import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const SkillsScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Minhas Habilidades</Text>
            <Text style={styles.skill}>
                <Ionicons name="logo-javascript" size={32} color="black" /></Text>
                <Text style={styles.skill}>
                <Ionicons name="logo-html5" size={32} color="orange" /></Text>
                <Text style={styles.skill}>
                <Ionicons name="logo-css3" size={32} color="blue" /></Text>
                <Text style={styles.skill}>
                <Ionicons name="logo-react" size={32} color="red" /></Text>
                <Text style={styles.skill}>
                <Ionicons name="logo-nodejs" size={32} color="purple" /></Text>
                <Text style={styles.skill}>
                <Ionicons name="logo-python" size={32} color="green" /></Text>
                <Text style={styles.skill}>
                <Ionicons name="logo-angular" size={32} color="red" /></Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    skill: {
        fontSize: 18,
        marginBottom: 10,
    },
});

export default SkillsScreen;
