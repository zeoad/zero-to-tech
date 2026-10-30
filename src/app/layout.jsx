import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";

export const metadata = { title: { default: "MySpace | 个人作品集", template: "%s | MySpace" }, description: "记录前端开发、人工智能学习与个人成长。", keywords: ["个人作品集","前端开发","人工智能"] };

export default function RootLayout({ children }) {
  return <html lang="zh-CN" suppressHydrationWarning><body><ThemeProvider><Navbar /><main className="site-main">{children}</main><Footer /></ThemeProvider></body></html>;
}
