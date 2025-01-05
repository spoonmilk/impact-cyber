import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LinkIcon from "@mui/icons-material/Link";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

interface ResourceCardProps {
  resource: {
    logo: string;
    title: string;
    description: string;
    link: string;
    extraInfo?: string;
  };
}

const ResourceCard: React.FC<ResourceCardProps> = ({ resource }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ width: 600, margin: "20px auto" }}>
      <CardHeader
        avatar={
          <img
            src={resource.logo}
            alt={`${resource.title} Logo`}
            style={{
              width: "50px",
              height: "50px",
              objectFit: "contain",
              borderRadius: "8px",
            }}
          />
        }
        title={resource.title}
        subheader="Trusted Security Resource"
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: "text.secondary", marginBottom: 2 }}>
          {resource.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Typography variant="body2" sx={{ flexGrow: 1 }}>
          Organization Details
        </Typography>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="body2" sx={{ marginBottom: 2 }}>
            {resource.extraInfo || "No additional information available."}
          </Typography>
          <Typography variant="body2" sx={{ display: "flex", alignItems: "center", color: "#007BFF" }}>
            <LinkIcon sx={{ marginRight: 1 }} />
            <a
              href={resource.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Visit {resource.title}
            </a>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default ResourceCard;
