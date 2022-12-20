import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useNavigate } from 'react-router-dom';
import MyCart from '../mycart/MyCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
// import Header from '../header/Header.css'
import headercs from '../header/headercs.css'


export default function Header(props) {
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const searching = (event) => {
    props.search(event.target.value)
  }

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <PersonOutlineOutlinedIcon />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <ShoppingCartOutlinedIcon />
        </IconButton>
        <p>Cart</p>
      </MenuItem>
    </Menu>
  );

  const openmyCart = () => {
    navigate('/mycart')
  }

  const openwishList = () => {
    navigate('/wishlist')
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#A03037' }}>
        <Toolbar>
          <Box sx={{ width: '8%' }} />
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
          >
            <img src='https://public-v2links.adobecc.com/d096df37-ca37-4026-553f-8cfa6bec09ec/component?params=component_id%3A6a559a8a-8ca5-4bf2-9f76-bb2d51e33b9f&params=version%3A0&token=1671469924_da39a3ee_1e244db0be423f4830d0b15ae0dbd6d028202462&api_key=CometServer1' />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            Bookstore
          </Typography>
          <Box sx={{ width: '30%' }} />
          {/* <Search>
            <SearchIconWrapper>
              <SearchIcon color='action' />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search> */}
          <div className="search" sx={{ height: '100%', width: '100%' }} >
            {/* <div className="searchIcon"  ><SearchOutlinedIcon sx={{width:'6%',height:'80%',border:'1px solid blue'}} /></div> */}
            <Box sx={{ width: '200%', border: '0px solid red', position: 'relative', right: '300px', bottom: '0px' }}>
              {/* <Box sx={{border:'2px solid blue',height:'60%'}} > */}

                <input placeholder='Search...' type="text" className='inputSearch' onChange={searching}  sx={{width:'120%',heigh:'100%',border:'2px solid blue'}}/>
              </Box>
          

          </div>
          <Box sx={{ width: '8%' }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="medium" color="inherit" sx={{ flexDirection: 'column', width: '6.5vw', borderLeft: '1px solid #89292f', borderRadius: '0%' }}>
              <div><PersonOutlineOutlinedIcon /></div>
              <Box sx={{ fontSize: '12px' }}>Profile</Box>
            </IconButton>
            <IconButton onClick={openwishList} size="medium" color="inherit" sx={{
              flexDirection: 'column', width: '6.5vw',
              borderLeft: '1px solid #89292f', borderRadius: '0%'
            }} >
              <div><FavoriteIcon fontSize='medium' /></div><Box sx={{ fontSize: '10px' }}>WishList</Box>
            </IconButton>
            <IconButton onClick={openmyCart}
              size="medium "
              aria-label="show 17 new notifications"
              color="inherit" sx={{ flexDirection: 'column', width: '6.5vw', borderLeft: '1px solid #89292f', borderRight: '1px solid #89292f', borderRadius: '0%' }}
            >
              <div><ShoppingCartOutlinedIcon /></div>
              <Box sx={{ fontSize: '10px' }}>Cart</Box>
            </IconButton>
          </Box>

          <Box sx={{ width: '5%' }} />
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}