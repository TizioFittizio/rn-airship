import * as React from 'react';
import { Text, Container, Content, Item, Input, View, Button } from 'native-base';
import { ViewStyle, TextStyle } from 'react-native';
import { connect } from 'react-redux';
import { ReducersState } from '../reducers';
import { loginAction, LoginActionType } from '../actions';

interface Props {
    loginAction?: LoginActionType;
    authenticating: boolean;
}

interface State {
    email: string;
    password: string;
}

class LoginScreen extends React.Component<Props, State>{

    constructor(props: Props){
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    render() {
        const { email, password } = this.state;
        return (
            <Container>
                <Content padder contentContainerStyle={containerStyle}>

                    <View style={containerViewStyle}>
                        <Text style={titleStyle}>React Native Airship</Text>
                    </View>

                    <View style={containerViewStyle}>
                        <View style={formStyle}>
                            <Item rounded style={itemStyle}>
                                <Input
                                    value={email}
                                    onChangeText={email => this.setState({email})}
                                    keyboardType='email-address' 
                                    placeholder="Email" />
                            </Item>
                            <Item rounded style={itemStyle}>
                                <Input
                                    value={password}
                                    onChangeText={password => this.setState({password})} 
                                    placeholder="Password" 
                                    blurOnSubmit 
                                    secureTextEntry />
                            </Item>
                            <Button
                                disabled={this.props.authenticating} 
                                bordered 
                                rounded 
                                style={buttonStyle} 
                                onPress={() => this.props.loginAction!()}>
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

const mapStateToProps = (state: ReducersState): Props => {
    const { authenticating } = state.auth;
    console.warn(authenticating);
    return {
        authenticating
    };
}


export default connect(mapStateToProps, {loginAction})(LoginScreen);