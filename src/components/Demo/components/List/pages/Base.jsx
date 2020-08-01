import React from 'react';
import { Heading } from '@/components';
import { DemoShow, Section } from '@ozo/demo';

export default () => (
    <DemoShow>
        <Section title="Heading">
            <Heading title="Default" />
            <Heading align="center" title="Default" />
            <Heading align="end" title="Default" />
        </Section>
    </DemoShow>
);
