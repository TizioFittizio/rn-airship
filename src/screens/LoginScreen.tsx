import * as React from 'react';
import { Text, Container, Content, Item, Input, View, Button } from 'native-base';
import { ViewStyle, TextStyle } from 'react-native';

class LoginScreen extends React.Component<{}>{

    render() {
        return (
            <Container>
                <Content padder contentContainerStyle={containerStyle}>

                    <View style={containerViewStyle}>
                        <Text style={titleStyle}>React Native Airship</Text>
                    </View>

                    <View style={containerViewStyle}>
                        <View style={formStyle}>
                            <Item rounded style={itemStyle}>
                                <Input keyboardType='email-address' placeholder="Email" />
                            </Item>
                            <Item rounded style={itemStyle}>
                                <Input placeholder="Password" blurOnSubmit secureTextEntry />
                            </Item>
                            <Button bordered rounded style={buttonStyle}>
                                <Text>Login</Text>
                            </Button>
                        </View>
                    </View>

                    <View style={containerViewStyle}>
                        <Text>Social Login Here</Text>
                    </View>

                </Content>
            </Container>

        )
    }
}


const containerStyle: ViewStyle = {
    flexDirection: 'column',
    flex: 1,
};
const containerViewStyle: ViewStyle = {
    justifyContent: 'space-around',
    flexDirection: 'column',
    flex: 1
};
const titleStyle: TextStyle = {
    flexDirection: 'row',
    alignSelf: 'center',
    fontSize: 30,
};
const formStyle = {
    paddingRight: 10,
    paddingLeft: 10
};
const itemStyle = {
    margin: 5,
    paddingLeft: 15
};
const buttonStyle: ViewStyle = {
    marginTop: 5,
    flexDirection: 'row',
    alignSelf: 'center'
}


export default LoginScreen;