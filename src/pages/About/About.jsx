import React, { Component } from 'react';
import { Tag, Button } from '@ozo/toxic-ui';
import TimeDemo from './TimerDemo';
import { logo, avatar } from '@/assets';
import styles from './About.module.scss';
import '@ozo/toxic-ui/dist/index.css';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nickName: '某某某',
            mobile: '13888888888',
            img: avatar,
        };
    }
    render() {
        const { nickName, mobile, img } = this.state;

        return (
            <div className={styles.content}>
                <div className={styles.logWrap}>
                    <img src={logo} className={styles.logo} alt="logo" />
                </div>

                <div className={styles.text}>
                    <div>{nickName}</div>
                    <div>{mobile}</div>
                    <div>
                        <img src={img} alt="" />
                    </div>
                </div>

                <div style={{ marginTop: '10px', padding: '10px' }}>
                    <TimeDemo />
                </div>
                <div style={{ marginTop: '10px', padding: '10px' }}>
                    <Tag text="Default tag" type="default" />
                    <Tag text="Primary tag" type="primary" />
                    <Tag text="Info tag" type="info" />
                    <Tag text="Warning tag" type="warning" />
                    <Tag text="Danger tag" type="danger" />
                </div>
                <div style={{ marginTop: '10px', padding: '10px' }}>
                    <Button>toxic-ui测试</Button>
                    <Button type="primary">toxic-ui测试</Button>
                </div>
            </div>
        );
    }
}
export default About;
