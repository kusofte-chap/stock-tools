import { Grid, Box, Typography, Stack, Divider, Button } from "@mui/material";
import TendChart from "./chart/tend";
import BrokenLineGraph from "./chart/brokenLineGraph";
import AreaChart from "./chart/areaChart";
import AdGridTable from "./table/ad-grid";

export default function FR() {
  return (
    <Stack sx={{ py: "38px", pb: 10, px: 4, rowGap: 3 }}>
      <Grid container columns={12} spacing={2}>
        <Grid item md={6}>
          <Box
            sx={{
              py: 3,
              borderRadius: "10px",
              boxShadow:
                "rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px",
            }}
          >
            <Box sx={{ px: 3 }}>
              <Typography component="h3">MSFT EPS Range Ratio</Typography>
            </Box>
            <Divider sx={{ my: 3 }} />
            <Box sx={{ px: 3 }}>
              <TendChart />
            </Box>
          </Box>
        </Grid>
        <Grid item md={6}>
          <Box
            sx={{
              py: 3,
              borderRadius: "10px",
              boxShadow:
                "rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px",
            }}
          >
            <Box sx={{ px: 3 }}>
              <Typography component="h3">MSFT EPS Range Ratio</Typography>
            </Box>
            <Divider sx={{ my: 3 }} />
            <Box sx={{ px: 3 }}>
              <BrokenLineGraph />
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Grid container columns={12} spacing={2}>
        <Grid item md={6}>
          <Box
            sx={{
              py: 3,
              borderRadius: "10px",
              boxShadow:
                "rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px",
            }}
          >
            <Box sx={{ px: 3 }}>
              <Typography component="h3">MSFT EPS Range Ratio</Typography>
            </Box>
            <Divider sx={{ my: 3 }} />
            <Box sx={{ px: 3 }}>
              <AreaChart />
            </Box>
          </Box>
        </Grid>
        <Grid item md={6}>
          <Box
            sx={{
              py: 3,
              borderRadius: "10px",
              boxShadow:
                "rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px",
            }}
          >
            <Box sx={{ px: 3 }}>
              <Typography component="h3">Balance Sheet</Typography>
            </Box>
            <Divider sx={{ my: 3 }} />
            <Box sx={{ px: 3 }}>
              <AdGridTable />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Stack>
  );
}
