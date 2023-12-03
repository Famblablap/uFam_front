import { Dialog, DialogContent, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const FullScreen = ({ selectedImage, onClose }) => {
    return (
      <Dialog
        open={!!selectedImage}
        onClose={onClose}
        maxWidth="md"
        fullWidth
      >
        <DialogContent>
          <IconButton
            edge="end"
            color="inherit"
            onClick={onClose}
            aria-label="close"
            sx={{ position: "absolute", top: 0, right: 0 }}
          >
            <CloseIcon />
          </IconButton>
          <img
            src={selectedImage?.content_url}
            alt="Full Screen"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </DialogContent>
      </Dialog>
    );
  };

export default FullScreen