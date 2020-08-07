import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Icon from '../../IconCaec';

export default function ListSecondary() {
    const handleClick = () => () => {
        alert('跳转到...');
    };

    return (
        <>
            <List>
                <h4>图文列表</h4>
                {[0, 1, 2].map((value) => {
                    const labelId = `checkbox-list-secondary-label-${value}`;
                    return (
                        <ListItem key={value}>
                            <ListItemAvatar style={{ marginRight: 10 }}>
                                <Avatar
                                    variant="square"
                                    alt={`Avatar n°${value + 1}`}
                                    src={`/static/images/avatar/${value + 1}.jpg`}
                                    style={{ width: '70px', height: '70px' }}
                                />
                            </ListItemAvatar>
                            <ListItemText
                                id={labelId}
                                primary={
                                    <span
                                        style={{ display: 'flex', minWidth: '100%', justifyContent: 'space-between' }}
                                    >
                                        <Typography
                                            variant="body1"
                                            component="span"
                                            gutterBottom
                                            style={{ maxWidth: '14em' }}
                                        >
                                            强生豪享陶瓷单强生豪享陶瓷单车膜（深/浅）
                                        </Typography>
                                        <Typography variant="body1" component="span">
                                            x1
                                        </Typography>
                                    </span>
                                }
                                secondary={
                                    <span style={{ display: 'flex', flexDirection: 'column' }}>
                                        <Typography variant="body2" component="span" style={{ maxWidth: '14em' }}>
                                            邮费：全国包邮；型号：常规；规格：1件装
                                        </Typography>
                                        <Typography variant="body2" component="span" color="primary">
                                            <Icon icon="icon-coin" size={9} />
                                            <span> 260000（¥2600.00）</span>
                                        </Typography>
                                    </span>
                                }
                            />
                        </ListItem>
                    );
                })}
            </List>

            <List>
                <h4>文字列表</h4>
                <ListItem>
                    <ListItemText
                        primary={
                            <Typography variant="body1" gutterBottom>
                                订单支付完成
                            </Typography>
                        }
                        secondary={'2020-06-22 09:44:28'}
                    />
                    <ListItemSecondaryAction>
                        <IconButton onClick={handleClick()}>
                            <Icon icon="arrow-right" size={11} />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemText
                        primary={
                            <>
                                <Typography variant="body1" style={{ marginBottom: '4px' }}>
                                    张花花 13889999666
                                </Typography>
                                <Typography variant="body1">重庆市江北区全区金融街·融景中心</Typography>
                            </>
                        }
                    />
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemText
                        primary={
                            <>
                                <div style={{ marginBottom: '4px' }}>张花花 13889999666</div>
                                <div variant="body1">
                                    重庆市重庆市重庆市重庆市重庆市重庆市重庆市江北区全区金融街·融景中心
                                </div>
                            </>
                        }
                    />
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemText
                        primary={
                            <Input
                                placeholder="买家留言：文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字"
                                disableUnderline
                                multiline
                                fullWidth
                                inputProps={{ 'aria-label': '买家留言' }}
                            />
                        }
                    />
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemText primary={<Typography variant="h3">已选 全国包邮 1件</Typography>} />
                    <ListItemSecondaryAction>
                        <IconButton onClick={handleClick()}>
                            <Icon icon="arrow-right" size={11} />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemText
                        primary={
                            <>
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        marginBottom: '3px',
                                    }}
                                >
                                    <span style={{ marginRight: '15px' }}>张花花</span>
                                    <div>
                                        <span style={{ marginRight: '5px' }}>13889999666</span>
                                        <Typography variant="body2" component="span" color="primary">
                                            默认
                                        </Typography>
                                    </div>
                                </div>
                                <Typography variant="caption">
                                    收货地址：重庆市重庆市江北区全区金融街·融景中心B 座23楼 400000
                                </Typography>
                            </>
                        }
                    />
                    <ListItemSecondaryAction>
                        <IconButton onClick={handleClick()}>
                            <Icon icon="arrow-right" size={11} />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemText
                        primary={
                            <div
                                style={{
                                    height: '16px',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}
                            >
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        flexWrap: 'nowrap',
                                    }}
                                >
                                    <span style={{ flexShrink: 0, marginRight: '15px' }}>短信验证码</span>
                                    <Input
                                        placeholder="请输入验证码"
                                        disableUnderline
                                        inputProps={{ 'aria-label': '短信验证码' }}
                                    />
                                </div>
                                <Button variant="outlined" size="small">
                                    发送验证码
                                </Button>
                            </div>
                        }
                    />
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemText
                        primary={
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div>
                                    <span> 支付积分：</span>
                                    <Icon icon="icon-coin" size={9} />
                                    <span> 260000</span>
                                </div>
                                <div>U币支付</div>
                            </div>
                        }
                        secondary={'2020-06-22 09:44:28'}
                    />
                </ListItem>
            </List>
        </>
    );
}
