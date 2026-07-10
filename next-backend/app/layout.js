import '../src/styles.css';

export const metadata = {
  title: 'LearnSphere LMS',
  description: 'A modern, serverless Learning Management System',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
