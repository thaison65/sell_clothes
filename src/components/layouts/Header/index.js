import React, { useState } from 'react';
import {
    AppBar,
    Badge,
    Box,
    Grid,
    IconButton,
    Paper,
    styled,
    Toolbar,
    Typography,
    useMediaQuery,
    useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import Navbar from './Navbar';
import NavMobile from './Navbar/NavMobile';

const menuId = 'primary-search-account-menu';
const mobileMenuId = 'primary-search-account-menu-mobile';

const titlePages = [
    { id: '', title: 'Trang chủ' },
    { id: 'product', title: 'Sản phẩm' },
    { id: 'giamgia', title: 'Giảm giá' },
    { id: 'bosuutap', title: 'Bộ sưu tập' },
    { id: 'bophoi', title: 'Bộ phối' },
    { id: 'lienhe', title: 'Liên hệ' },
    { id: 'chamsockhachhang', title: 'Chăm sóc khách hàng' },
];

function Header() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    const [openDrawer, setOpenDrawer] = useState(false);

    const handleProfileMenuOpen = () => {};

    const handleMobileMenuOpen = () => {};

    return (
        <React.Fragment>
            <AppBar position="sticky" color="inherit">
                <Toolbar>
                    <Grid container spacing={4}>
                        <Grid item xs>
                            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    color="inherit"
                                    onClick={() => setOpenDrawer(!openDrawer)}
                                >
                                    <MenuIcon />
                                </IconButton>
                            </Box>
                        </Grid>
                        <Grid item xs>
                            <Item elevation={0}>
                                <Typography
                                    variant="h5"
                                    noWrap
                                    component="a"
                                    href="/"
                                    sx={{
                                        mr: 2,
                                        fontFamily: 'monospace',
                                        fontWeight: 700,
                                        letterSpacing: '.3rem',
                                        color: 'inherit',
                                        textDecoration: 'none',
                                    }}
                                >
                                    NHÓM 2
                                </Typography>
                            </Item>
                        </Grid>
                        <Grid item xs>
                            <Item elevation={0} sx={{ padding: 0 }}>
                                <Box sx={{ display: { xs: 'none', md: 'flex' }, float: 'right' }}>
                                    <IconButton size="large" aria-label="show 17 new notifications" color="inherit">
                                        <Badge badgeContent={17} color="error">
                                            <NotificationsIcon />
                                        </Badge>
                                    </IconButton>
                                    <Typography
                                        variant="inherit"
                                        noWrap
                                        component="a"
                                        href="/"
                                        sx={{
                                            m: 1,
                                            fontFamily: 'monospace',
                                            fontWeight: 700,
                                            color: 'inherit',
                                            textDecoration: 'none',
                                        }}
                                    >
                                        Sản phẩm yêu thích
                                    </Typography>
                                    <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                                        <Badge badgeContent={4} color="error">
                                            <ShoppingBagIcon />
                                        </Badge>
                                    </IconButton>
                                    <IconButton
                                        size="large"
                                        edge="end"
                                        aria-label="account of current user"
                                        aria-controls={menuId}
                                        aria-haspopup="true"
                                        onClick={handleProfileMenuOpen}
                                        color="inherit"
                                    >
                                        <AccountCircle />
                                    </IconButton>
                                </Box>
                                <Box sx={{ display: { xs: 'block', md: 'none', float: 'right' } }}>
                                    <IconButton
                                        size="large"
                                        aria-label="show more"
                                        aria-controls={mobileMenuId}
                                        aria-haspopup="true"
                                        onClick={handleMobileMenuOpen}
                                        color="inherit"
                                    >
                                        <MoreIcon />
                                    </IconButton>
                                </Box>
                            </Item>
                        </Grid>
                    </Grid>
                </Toolbar>
                {matches ? <Navbar titlePages={titlePages} /> : <NavMobile titlePages={titlePages} openDrawer={openDrawer}/>}
            </AppBar>
        </React.Fragment>
    );
}

export default Header;
