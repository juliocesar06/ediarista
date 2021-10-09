import React from 'react';
import {SafeEnvironmentContainer} from './SafeEnvironment.styles';
import {Container} from '@mui/material';

const SafeEnvironment = () =>{
    return (<SafeEnvironmentContainer>
                <Container>
                    Ambiente Seguro
                </Container>
            </SafeEnvironmentContainer>);
};

export default SafeEnvironment;
