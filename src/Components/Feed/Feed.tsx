import { useEffect, useState } from "react";
import Box from "@mui/material/Box"

import { getFeeds } from "../../Helpers/backend";
import { Card, Container, TextField, Typography } from "@mui/material";

function Feed(){
    const [data, setData] = useState<any>([]);
  const [filteredData, setFilteredData] = useState<any>([]);
  const [filterText, setFilterText] = useState("");
  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_API}feeds`
    )
      .then((resp) => resp.json())
      .then(setData) as any
  }, []);

  useEffect(() => {
    if (data) {
      setFilteredData(
        data.filter((item: any) =>
          item.content.toLowerCase().includes(filterText.toLowerCase())
        )
      );
    } else {
      setFilteredData([]);
    }
  }, [filterText, data]);

return(
    <Box display="flex" height="100%" alignItems="stretch">
        <Container maxWidth="sm">
        <Typography variant="h3" component="div" margin={2}>
    
    <p>Feed</p>
    </Typography>
        <TextField
        autoFocus
        label="Filtro"
        margin="normal"
        type={"text"}
        value={filterText}
        onChange={(event: any) => setFilterText(event.target.value)}
        fullWidth
        variant="outlined"
      />
        </Container>
        
        {filteredData.map((item: any) => (
        <Container maxWidth="sm">
          <Card>
            <div key={item.content}>
            <Typography variant="h3" component="div" margin={2}>
    
                <p>{item.content}</p>
                </Typography>
            </div>
          </Card>
        </Container>))}
        
    </Box>
)
}

export default Feed