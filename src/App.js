import React from "react";
import { Container, Pagination } from "@mui/material";
import { useEffect, useState } from "react";
import { createApi } from "unsplash-js";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import SearchAppBar from "./components/Nav/Nav";
import CustomizedCard from "./components/Card/Card";
import LoadingSkeleton from "./components/LoadingSkeleton/index"


const api = createApi({
  accessKey: "G3TuOYj8wQF6TC4fhKxRs_jPlPPtrouiilW7GPZDIqk",
  secret:"o3GIskE9GXPCLOEX6rPqdov1NkEeWO3qvlT4LSOKK3Y"
});


function App() {

  const [data, setPhotosResponse] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [searchValue, setSearchValue] = useState(null);
  const [loading, setLoading] = useState(true);

  const handlePageChange = (e, pageNum) => {
    setPageNumber(pageNum )

  }

  const fetchData = (pageNum, searchValue) => {
    
      setLoading(true)
      api.search
      .getPhotos({ query: searchValue || "random", orientation: "landscape",perPage:28, page:pageNum })
      .then((result) => {
        setPhotosResponse(result);
        setLoading(false);
      })
      .catch(() => {
        console.log("something went wrong!");
        setLoading(false)
      });
      window.scroll(0,0)
      }

  

  useEffect( () => {
    fetchData(pageNumber, searchValue)
   },[searchValue, pageNumber]);

// console.log(data.response.results)

  return (
    <React.Fragment>
    <CssBaseline />
    <Container maxWidth="xl" sx={{ background: "#fff" }}>
      <Box sx={{  minHeight: '100vh', paddingBottom:5 }} >
        <SearchAppBar  searchValue={searchValue}  setSearchValue={setSearchValue} handleSearch={setPageNumber}   />
        {loading? 
        <LoadingSkeleton />
        :<Box display={"flex"} justifyContent={"center"} alignItems={"start"} flex={4} flexWrap={"wrap"} flexDirection={"row"}>
          {
            data.response.results.map(item=><CustomizedCard {...item} />)
          }
        </Box>}
        <Box display={"flex"} justifyContent={"center"} alignItems={"start"} flex={4} flexWrap={"wrap"} flexDirection={"row"}
         marginTop={5} marginButtom={2}>
        {!loading && <Pagination count={data.response.total_pages} color="secondary" onChange={handlePageChange}
          page={pageNumber } defaultValue={pageNumber + 1}/>}
        </Box>
      </Box>
    </Container>
  </React.Fragment>

  );
}

export default App;
