import LogCard from "./LogCard/LogCard";
import AddIcon from "@mui/icons-material/Add";
import mockLogs from "../../mocks/mockLogs";
import { Log } from "../../types/exercises";
import { Fab, Typography } from "@mui/material";

const LogsOverview = () => {
  return (
    <div>
      <Typography variant="h6">Logs</Typography>
      {mockLogs.map((log: Log) => (
        <LogCard key={log.id} log={log} />
      ))}
      <div style={{ position: "sticky" }}>
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </div>
    </div>
  );
};

export default LogsOverview;
