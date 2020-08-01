import React, { Component } from 'react';
import { DemoShow, Section } from '@ozo/demo'
import { Placeholder } from '@/components';
import { DemoListWithApi } from '@/components/Demo';

class Doc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // activeKey: 0,
        };
    }

    render() {
        return (
            <DemoShow>
                <Section>
                    <DemoListWithApi />
                </Section>
                <Placeholder msg="没有更多了！" />                
            </DemoShow>
        );
    }
}

export default Doc;
