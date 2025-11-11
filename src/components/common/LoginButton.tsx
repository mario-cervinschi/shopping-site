import {
  useState,
  useRef,
  useEffect,
  FC,
} from "react";
import {
  Button,
  Menu,
  MenuItem,
  Avatar,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Alert,
} from "@mui/material";
import { useAuth } from "../../context/AuthContext";
import { userService } from "../../services/userService";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";

export const LoginButton: FC = () => {
  const { isAuthenticated, login, logout } = useAuth();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openLoginDialog, setOpenLoginDialog] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentUser, setCurrentUser] = useState(userService.getCurrentUser());

  useEffect(() => {
    // Update user when auth state changes
    setCurrentUser(userService.getCurrentUser());
  }, [isAuthenticated]);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLoginClick = () => {
    setOpenLoginDialog(true);
    handleMenuClose();
    setError(null);
    setPassword("");
  };

  const handleDialogClose = () => {
    setOpenLoginDialog(false);
    setEmail("");
    setPassword("");
    setError(null);
  };

  const handleLogin = async () => {
    setError(null);
    setLoading(true);

    try {
      if (!email || !password) {
        setError("Please enter both email and password");
        setLoading(false);
        return;
      }

      await userService.login({ email, password });
      login(() => {
        setCurrentUser(userService.getCurrentUser());
        handleDialogClose();
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    setLoading(true);
    try {
      await userService.logout();
      logout(() => {
        setCurrentUser(null);
        handleMenuClose();
      });
    } finally {
      setLoading(false);
    }
  };

  if (isAuthenticated && currentUser) {
    return (
      <>
        <Button
          onClick={handleMenuOpen}
          className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300"
          startIcon={
            currentUser.avatar ? (
              <Avatar
                alt={currentUser.name}
                src={currentUser.avatar}
                sx={{ width: 32, height: 32 }}
              />
            ) : (
              <AccountCircleIcon />
            )
          }
        >
          {currentUser.name}
        </Button>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <MenuItem disabled>
            <span className="text-xs text-neutral-500">{currentUser.email}</span>
          </MenuItem>
          <MenuItem onClick={handleLogout} disabled={loading}>
            <LogoutIcon fontSize="small" className="mr-2" />
            Logout
          </MenuItem>
        </Menu>
      </>
    );
  }

  return (
    <>
      <Button
        onClick={handleLoginClick}
        variant="contained"
        className="bg-brand-500 hover:bg-brand-600 text-white"
        startIcon={<LoginIcon />}
        size="small"
      >
        Login
      </Button>

      <Dialog
        open={openLoginDialog}
        onClose={handleDialogClose}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          className: "bg-white dark:bg-neutral-800",
        }}
      >
        <DialogTitle className="text-neutral-900 dark:text-neutral-100 border-b border-neutral-200 dark:border-neutral-700">
          Sign In
        </DialogTitle>

        <DialogContent className="pt-6">
          {error && (
            <Alert severity="error" className="mb-4">
              {error}
            </Alert>
          )}

          <div className="space-y-4">
            <TextField
              fullWidth
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="user@example.com"
              disabled={loading}
              variant="outlined"
              size="small"
              InputLabelProps={{
                className: "dark:text-neutral-400",
              }}
              InputProps={{
                className: "dark:text-neutral-100",
              }}
            />

            <TextField
              fullWidth
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              disabled={loading}
              variant="outlined"
              size="small"
              InputLabelProps={{
                className: "dark:text-neutral-400",
              }}
              InputProps={{
                className: "dark:text-neutral-100",
              }}
            />

            <div className="bg-brand-50 dark:bg-brand-900/20 border border-brand-200 dark:border-brand-800 rounded p-3 text-sm">
              <p className="text-neutral-700 dark:text-neutral-300 font-medium mb-2">
                Demo Credentials:
              </p>
              <ul className="text-neutral-600 dark:text-neutral-400 space-y-1">
                <li>user@example.com / password123</li>
                <li>demo@example.com / demo123</li>
              </ul>
            </div>
          </div>
        </DialogContent>

        <DialogActions className="border-t border-neutral-200 dark:border-neutral-700 p-4">
          <Button onClick={handleDialogClose} disabled={loading}>
            Cancel
          </Button>
          <Button
            onClick={handleLogin}
            disabled={loading}
            variant="contained"
            className="bg-brand-500 hover:bg-brand-600 text-white"
          >
            {loading ? "Signing in..." : "Sign In"}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
