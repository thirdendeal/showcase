// Portals
// ---------------------------------------------------------------------

import { createPortal } from "react-dom";

// ---------------------------------------------------------------------

export function PortalModal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  const background = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const foreground = {
    background: "white",
    padding: "20px",
    borderRadius: "8px",
  };

  return createPortal(
    <div style={background}>
      <div style={foreground}>
        {children}

        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.body
  );
}

// ---------------------------------------------------------------------

export function PortalButton({ onClick, children }) {
  const button = {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    padding: "10px",
    background: "blue",
    color: "white",
  };

  return createPortal(
    <button onClick={onClick} style={button}>
      {children}
    </button>,
    document.body
  );
}
