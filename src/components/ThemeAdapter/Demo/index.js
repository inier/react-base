import React from 'react';
import styled from 'styled-components';
import { Container } from '@material-ui/core';
import { Page, View, Title } from './Base';
import AppBar from './AppBar';
import TypographyDemo from './Typography';
import ButtonDemo from './Button';
import CardDemo from './Card';
import ListDemo from './List';

export default function MUIThemeDemo() {
    return (
        <Page>
            <AppBar />
            <View>
                <Title>多级文字</Title>
                <Container>
                    <TypographyDemo />
                </Container>
            </View>
            <View>
                <Title>按钮</Title>
                <Container>
                    <ButtonDemo />
                </Container>
            </View>
            <View>
                <Title>卡片</Title>
                <CardDemo />
            </View>
            <View>
                <Title>列表</Title>
                <ListDemo />
            </View>
        </Page>
    );
}
