// Module
// ---------------------------------------------------------------------
//
// CSS modules prevent name conflicts

// Styling
// ---------------------------------------------------------------------

// Composing Classes
//
// You can use `composes: my-class;` to inherit styles from .my-class

// Global Classes
//
// :global(.my-class) skips hashing .my-class

import styles from "./Module.module.css";

// ---------------------------------------------------------------------

export function Module() {
  return (
    <div className={styles.div}>
      <h2 className={styles.heading}>Heading (Module)</h2>

      <p>Paragraph (Module)</p>
    </div>
  );
}

// ---------------------------------------------------------------------

export default Module;
