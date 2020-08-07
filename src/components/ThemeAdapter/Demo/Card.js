import React from 'react';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';

export default function RecipeReviewCard() {
    return (
        <Card>
            <CardHeader title="商品订单" />
            <Divider />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add
                    1 cup of frozen peas along with the mussels, if you like.
                </Typography>
            </CardContent>
            <Divider />
            <CardActions>
                <Button variant="outlined" size="small">
                    再来一单
                </Button>
                <Button variant="outlined" size="small">
                    申请售后
                </Button>
            </CardActions>
        </Card>
    );
}
