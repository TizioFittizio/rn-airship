import * as React from 'react';
import { Text, Container, Content, Item, Input, View, Button } from 'native-base';
import { StyleSheet, KeyboardAvoidingView, ScrollView } from 'react-native';

class LoginScreen extends React.Component<{}>{

    render() {
        return (
            <Container>
                <Content padder contentContainerStyle={styles.containerStyle}>

                    <View style={styles.containerViewStyle}>
                        <Text style={styles.titleStyle}>React Native Airship</Text>
                    </View>

                    <View style={styles.containerViewStyle}>
                        <View style={styles.formStyle}>
                            <Item rounded style={styles.itemStyle}>
                                <Input style={styles.inputStyle} keyboardType='email-address' placeholder="Email" />
                            </Item>
                            <Item rounded style={styles.itemStyle}>
                                <Input style={styles.inputStyle} placeholder="Password" blurOnSubmit secureTextEntry />
                            </Item>
                            <Button bordered rounded warning style={styles.buttonStyle}>
                                <Text>Login</Text>
                            </Button>
                        </View>
                    </View>

                    <View style={styles.containerViewStyle}>
                    </View>

                </Content>
            </Container>

        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flexDirection: 'column',
        flex: 1,
        backgroundColor: 'black'
    },
    containerViewStyle: {
        justifyContent: 'space-around',
        flexDirection: 'column',
        flex: 1
    },
    titleStyle: {
        flexDirection: 'row',
        alignSelf: 'center',
        fontSize: 30,
        color: 'white'
    },
    formStyle: {
        paddingRight: 10,
        paddingLeft: 10
    },
    itemStyle: {
        margin: 5,
        paddingLeft: 15
    },
    inputStyle: {
        textDecorationColor: 'white',
        color: 'white'
    },
    buttonStyle: {
        marginTop: 5,
        flexDirection: 'row',
        alignSelf: 'center'
    }
})

export default LoginScreen;