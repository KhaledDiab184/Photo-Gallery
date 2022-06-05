import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import PhotoCameraBackIcon from '@mui/icons-material/PhotoCameraBack';
import SearchIcon from '@mui/icons-material/Search';
import { Search, SearchIconWrapper, StyledInputBase } from './Styles';



export default function SearchAppBar(props) {

  const handleChange =e => {
     props.setSearchValue(e.target.value)
  }
  return (
    <Box sx={{ flexGrow: 1,  }}>
      <AppBar position="static" sx={{borderRadius:"5px", bgcolor:"rgb(190 147 147)", color:"#fff"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <PhotoCameraBackIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Photo Gallery
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              bgcolor=""
              inputProps={{ 'aria-label': 'search' }}
              onChange={handleChange}
              value={props.searchValue} onKeyPress={e=>{
                if (e.key === "Enter")
                  props.handleSearch()
              }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
