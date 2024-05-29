import {
  Box,
  Card,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  styled,
} from "@mui/material";

import { BarChart, LineChart, PieChart } from "@mui/x-charts";
import PeopleIcon from "@mui/icons-material/People";
import PersonOffIcon from '@mui/icons-material/PersonOff';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

const CustomCard = styled(Card)({
  padding: "1rem",
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "10px",
  boxShadow: 3,
});

const Dashboard = () => {
  return (
    <Box>
      <h2>Dashboard</h2>
      <Stack direction="row" gap={2} sx={{ marginBlock: "2rem"}}>
        <Box flex={1}>
          <CustomCard variant="outlined">
            <Box>
              <PeopleIcon />
            </Box>
            <Box>
              <Typography variant="p">Total users</Typography>
              <Typography variant="h6">32,756</Typography>
            </Box>
          </CustomCard>
        </Box>

        <Box flex={1}>
          <CustomCard variant="outlined">
            <Box>
              <VerifiedUserIcon />
            </Box>
            <Box>
              <Typography variant="p">Total verified users</Typography>
              <Typography variant="h6">32,756</Typography>
            </Box>
          </CustomCard>
        </Box>
        <Box flex={1}>
          <CustomCard variant="outlined">
            <Box>
              <PersonOffIcon />
            </Box>
            <Box>
              <Typography variant="p">Total unverified users</Typography>
              <Typography variant="h6">32,756</Typography>
            </Box>
          </CustomCard>
        </Box>
        <Box flex={1}>
          <CustomCard variant="outlined">
            <Box>
              <PersonAddIcon />
            </Box>
            <Box>
              <Typography variant="p">Total roles</Typography>
              <Typography variant="h6">32,756</Typography>
            </Box>
          </CustomCard>
        </Box>
      </Stack>

      <Stack direction="row" spacing={2}>
        <Box flex={3}>
          <Card variant="outlined">
            <LineChart
              xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
              series={[
                {
                  data: [2, 5.5, 2, 8.5, 1.5, 5],
                },
              ]}
              sx={{ width: "100%" }}
              height={400}
            />
          </Card>
        </Box>
        <Box flex={1}>
          <Card variant="outlined">
            <BarChart
              xAxis={[
                { scaleType: "band", data: ["group A", "group B", "group C"] },
              ]}
              series={[
                { data: [4, 3, 5] },
                { data: [1, 6, 3] },
                { data: [2, 5, 6] },
              ]}
              sx={{ width: "100%" }}
              height={400}
            />
          </Card>
        </Box>
      </Stack>

      <Stack sx={{ marginBlock: "2rem" }} direction="row" spacing={2}>
        <Box flex={2}>
          <Card variant="outlined">
            <RecentUsers />
          </Card>
        </Box>

        <Box flex={1}>
          <Card
            variant="outlined"
            sx={{ height: "100%", display: "flex", alignItems: "center" }}
          >
            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: 10, label: "series A" },
                    { id: 1, value: 15, label: "series B" },
                    { id: 2, value: 20, label: "series C" },
                  ],
                },
              ]}
              width={400}
              height={200}
            />
          </Card>
        </Box>
      </Stack>
    </Box>
  );
};

export default Dashboard;

const users = [
  {
    id: 1,
    name: "Smruti",
    role: "admin",
    status: "unverfied",
  },
  {
    id: 2,
    name: "Abinash",
    role: "student",
    status: "unverfied",
  },
  {
    id: 3,
    name: "Raj",
    role: "employer",
    status: "unverfied",
  },
  {
    id: 4,
    name: "Harshit",
    role: "admin",
    status: "verified",
  },
  {
    id: 5,
    name: "Binod",
    role: "admin",
    status: "unverfied",
  },
];

function RecentUsers() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.role}</TableCell>
              <TableCell>
                <Typography
                  sx={{
                    border: "1px solid",
                    display: "inline-block",
                    padding: "0.2rem 1rem",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor:
                      row.status == "verified" ? "lightgreen" : "deeppink",
                    borderRadius: "100rem",
                  }}
                  variant="p"
                >
                  {row.status}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
