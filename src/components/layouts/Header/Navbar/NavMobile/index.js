import React, { useState } from 'react';
import { Drawer, IconButton, List, ListItem } from '@mui/material';
import { Link } from 'react-router-dom';

function NavMobile({ ...props }) {
    const { openDrawer, titlePages } = props;

    return (
        <>
            <Drawer open={openDrawer} onClose={() => !openDrawer}>
            <IconButton>
            </IconButton>
                <List>
                    {titlePages.map((page) => {
                        return (
                            <ListItem
                                key={page.id}
                                component={Link}
                                to={`/${page.id}`}
                                sx={{ color: 'rgba(0,0,0,0.5)' }}
                                onClick={() => openDrawer(false)}
                            >
                                {page.title}
                            </ListItem>
                        );
                    })}
                </List>
            </Drawer>
        </>
    );
}

export default NavMobile;
