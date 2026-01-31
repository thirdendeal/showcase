// The Root Layout
//
// It's required and must contain the <html> and <body> tags

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
