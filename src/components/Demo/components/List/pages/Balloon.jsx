import React from 'react';
import 'balloon-css';
import { DemoShow, Section, Block } from '@ozo/demo';

export default () => (
    <DemoShow>
        <Section title="示例：">
            <Block flex style={{ padding: '80px' }}>
                <button aria-label="Whats up!" data-balloon-pos="up">
                    Hover me!
                </button>
                <button aria-label="Whats up!" data-balloon-pos="left">
                    Hover me!
                </button>
                <button aria-label="Whats up!" data-balloon-pos="right">
                    Hover me!
                </button>
                <button aria-label="Whats up!" data-balloon-pos="down">
                    Hover me!
                </button>
                <button aria-label="Whats up!" data-balloon-pos="up-left">
                    Hover me!
                </button>
                <button aria-label="Whats up!" data-balloon-pos="up-right">
                    Hover me!
                </button>
                <button aria-label="Whats up!" data-balloon-pos="down-left">
                    Hover me!
                </button>
                <button aria-label="Whats up!" data-balloon-pos="down-right">
                    Hover me!
                </button>
            </Block>
        </Section>
    </DemoShow>
);
