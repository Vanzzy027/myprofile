import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export default function Layout({ children, theme, toggleTheme }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-base-100 text-base-content">
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}