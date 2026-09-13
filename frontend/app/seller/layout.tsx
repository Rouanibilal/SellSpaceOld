//import Navbar from "@/components/customer/Navbar";
//import Footer from "@/components/customer/Footer";

export default function CustomerLayout({
                                         children,
                                       }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <>
        <main>{children}</main>
      </>
  );
}