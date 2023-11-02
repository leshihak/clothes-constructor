import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { KeyboardEvent, MouseEvent } from "react";

interface SizeDrawerProps {
  open: boolean;
  onClose: (event: KeyboardEvent | MouseEvent) => void;
}

const SizeDrawer = ({ open, onClose }: SizeDrawerProps) => {
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box
        sx={{ width: 500 }}
        p={3}
        role="presentation"
        onClick={onClose}
        onKeyDown={onClose}
      >
        <Typography variant="h5" textAlign="center">
          Select size
        </Typography>

        <List>
          {["XS", "S", "M", "L"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>2</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Divider />

        <List>
          {["XS", "S", "M", "L"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>1</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default SizeDrawer;
