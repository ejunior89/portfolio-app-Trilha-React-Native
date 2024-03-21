import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, NavigationProp } from '@react-navigation/native';

const HomeScreen = () => {
    const navigation = useNavigation<NavigationProp<any>>();

    const goToSkillsScreen = () => {
        navigation.navigate('SkillsScreen');
    };

    return (
        <View style={styles.container}>
            <Image
                source={require('C:/Users/junio/OneDrive/Documentos/projetos/react native/portfolio-app/assets/foto/360c059b-aeea-4bf6-bf8f-7a15686fef60.jpg')}
                style={styles.profileImage}
            />
            <View style={styles.socialLinks}>
                <TouchableOpacity style={styles.socialLink} onPress={() => Linking.openURL('https://github.com/ejunior89')}>
                    <Ionicons name="logo-github" size={24} color="purple" />
                    <Text style={styles.linkText}>Github</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialLink} onPress={() => Linking.openURL('https://www.linkedin.com/in/ejunior89')}>
                    <Ionicons name="logo-linkedin" size={24} color="blue" />
                    <Text style={styles.linkText}>LinkedIn</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.button} onPress={goToSkillsScreen}>
                <Text style={styles.buttonText}>Ver Habilidades</Text>
            </TouchableOpacity>
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
    profileImage: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginBottom: 20,
    },
    socialLinks: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    socialLink: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    linkText: {
        marginLeft: 5,
        fontSize: 16,
    },
    button: {
        backgroundColor: 'blue',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default HomeScreen;
