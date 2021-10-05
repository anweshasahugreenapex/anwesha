import React from "react";
import { Button, Dialog, DialogContent, DialogTitle } from "@material-ui/core";

//popup to show whrn add or edit or view is clicked
const Popup = (props) => {
  const { title, children, openPopup, setOpenPopup } = props;
  return (
    <Dialog open={openPopup}>
      <DialogTitle>
        
        <button //button to closethe popup
          style={{
            marginLeft: "95%",
            backgroundColor: "white",
            border: "none",
          }}
          onClick={() => {
            setOpenPopup(false);
          }}
        >
          X
        </button>
      </DialogTitle>

      <DialogContent dividers>{children}</DialogContent>
    </Dialog>
  );
};

export default Popup;
