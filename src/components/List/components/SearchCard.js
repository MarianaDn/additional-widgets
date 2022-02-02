import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";

export const SearchCard = ({ title, content, pageid }) => (
  <Card sx={{ mb: 2 }}>
    <CardContent>
      <Typography variant="h2" sx={{ fontSize: 24, fontWeight: "bold" }}>
        {title}
      </Typography>
      <Typography>
        <span dangerouslySetInnerHTML={{ __html: content }}></span>
      </Typography>
    </CardContent>
    <CardActions>
      <Button
        size="small"
        variant="contained"
        href={`https://en.wikipedia.org?curid=${pageid}`}
        color="secondary"
      >
        Go
      </Button>
    </CardActions>
  </Card>
);
