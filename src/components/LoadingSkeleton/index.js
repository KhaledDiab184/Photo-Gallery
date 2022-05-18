import { Skeleton, Stack } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function LoadingSkeleton(props){
    return(
        <Box justifyContent={"center"} alignItems={"start"} flex flexDirection={"row"}>
        <Stack spacing={1} width={"20%"} margin={"10px"}>
          <Skeleton variant="text" />
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="rectangular" width={210} height={118} />
        </Stack>
        <Stack spacing={1} width={"20%"} margin={"10px"}>
          <Skeleton variant="text" />
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="rectangular" width={210} height={118} />
        </Stack>
        <Stack spacing={1} width={"20%"} margin={"10px"}>
          <Skeleton variant="text" />
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="rectangular" width={210} height={118} />
        </Stack>
        <Stack spacing={1} width={"20%"} margin={"10px"}>
          <Skeleton variant="text" />
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="rectangular" width={210} height={118} />
        </Stack>
        </Box>
    );
}

export default LoadingSkeleton;