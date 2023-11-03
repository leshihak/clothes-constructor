import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Box p={5}>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/product-list">Choose product</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>

      <hr /> */}

      <Outlet />
    </Box>
  );
};

export default Layout;
