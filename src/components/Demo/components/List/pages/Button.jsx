import React, { Component } from 'react';
import { Button } from '@/components';
import { DemoShow, Section, Block } from '@ozo/demo';

class ButtonDemo extends Component {
    render() {
        return (
            <DemoShow>
                <Section title="size">
                    <Block flex>
                        <Button size="xs">btn-xs</Button>
                        <Button size="xs" disabled>
                            btn-xs disabled
                        </Button>
                        <Button size="xs" noRadius>
                            btn-xs noRadius
                        </Button>
                        <Button size="xs" active>
                            btn-xs active
                        </Button>

                        <Button size="sm">btn-sm</Button>

                        <Button size="md">btn-md</Button>
                        <Button>btn-md(默认)</Button>

                        <Button size="lg">btn-lg</Button>

                        <Button size="xl">btn-xl</Button>
                    </Block>
                    <Block title="inline">
                        <Button size="xs">btn-xs</Button>
                        <Button size="xs" disabled>
                            btn-xs disabled
                        </Button>
                        <Button size="xs" noRadius>
                            btn-xs noRadius
                        </Button>
                        <Button size="xs" active>
                            btn-xs active
                        </Button>

                        <Button size="sm">btn-sm</Button>

                        <Button size="md">btn-md</Button>
                        <Button>btn-md(默认)</Button>

                        <Button size="lg">btn-lg</Button>

                        <Button size="xl">btn-xl</Button>
                    </Block>
                </Section>
                <Section title="type">
                    <Block flex>
                        <Button type="primary">btn-primary</Button>
                        <Button type="primary" line>
                            btn-primary line
                        </Button>

                        <Button type="secondary">btn-secondary</Button>
                        <Button type="secondary" active>
                            btn-secondary active
                        </Button>

                        <Button
                            type="success"
                            onClick={() => {
                                console.log('ok');
                            }}
                        >
                            btn-success
                        </Button>
                        <Button
                            type="success"
                            disabled
                            onClick={() => {
                                console.log('ok');
                            }}
                        >
                            btn-success
                        </Button>

                        <Button type="warning">btn-warning</Button>

                        <Button type="error">btn-error</Button>

                        <Button type="important">btn-important</Button>

                        <Button type="mono">btn-mono</Button>

                        <Button type="link">btn-link</Button>

                        <Button type="progress">btn-progress</Button>
                        <Button type="progress" value={80}>
                            <span className="txt">{50}</span>
                            <span className="btn-inner">
                                <span className="txt">{50}</span>
                            </span>
                        </Button>
                        <Button type="progress" value={80} disabled>
                            btn-progress
                        </Button>

                        <Button icon="icon-home">btn-icon</Button>
                    </Block>
                </Section>
                <Section title="status">
                    <Block flex>
                        <Button type="primary" noRadius>
                            btn-primary noRadius
                        </Button>
                        <Button type="primary" active>
                            btn-primary active
                        </Button>
                        <Button type="primary" disabled>
                            btn-primary disabled
                        </Button>

                        <Button type="secondary" line>
                            btn-secondary line
                        </Button>
                        <Button type="primary" block>
                            btn-primary block
                        </Button>
                        <Button type="secondary" full>
                            btn-secondary full
                        </Button>
                    </Block>
                </Section>
                <Section title="group">
                    <Block flex>
                        <div className="btn-group">
                            <Button type="primary" noRadius>
                                btn-primary noRadius
                            </Button>
                            <Button type="primary" active>
                                btn-primary active
                            </Button>
                        </div>

                        <div className="btn-group">
                            <Button type="primary" block>
                                btn-primary block
                            </Button>
                            <Button type="secondary" full>
                                btn-secondary full
                            </Button>
                        </div>
                    </Block>
                </Section>
            </DemoShow>
        );
    }
}

export default ButtonDemo;
