import Footer from "./main/footer";
import Header from "./main/header";

interface LayoutProps {
    children: React.ReactNode;
}

export default function DefaultLayout({ children }: LayoutProps) {
    return (
        <>
            <Header />
            <div>{children}</div>
            <Footer />
        </>
    )
}