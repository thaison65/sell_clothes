import React from 'react';
import {
    Box,
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    Typography,
    useMediaQuery,
    useTheme,
} from '@mui/material';

function TodoList({ ...props }) {
    const { todoList, number } = props;

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));

    return (
        <>
            <Box sx={{ flexGrow: 1, marginTop: 2 }}>
                <Grid container spacing={3}>
                    {todoList.map((todo, index) => {
                        if (index === 8) {
                            return null;
                        } else {
                            return (
                                <Grid item xs={matches ? number[0] : number[1]} key={todo.id}>
                                    <Card sx={{ maxWidth: 300, marginX: 'auto' }} key={todo.id} elevation={0}>
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="300"
                                                image={todo.image}
                                                alt="photo product"
                                            />
                                            <CardContent>
                                                <Typography
                                                    gutterBottom
                                                    variant="h6"
                                                    component="div"
                                                    color={'rgba(0,0,0,0.5)'}
                                                >
                                                    {todo.name}
                                                </Typography>
                                                <Typography variant="body1" color="text.secondary">
                                                    {todo.price} vnđ
                                                </Typography>
                                            </CardContent>
                                            <CardActions sx={{float: 'right'}}>
                                                <Button variant='primary' size="small" color="primary">
                                                    Mua
                                                </Button>
                                                <Button variant='primary' size="small" color="primary">
                                                    Giỏ hàng
                                                </Button>
                                            </CardActions>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            );
                        }
                    })}
                </Grid>
            </Box>
        </>
    );
}

export default TodoList;
