import { FC, useEffect, lazy, Suspense } from "react";

import { Box, Container, Center, Spinner } from "@chakra-ui/react";
import AOS from "aos";

import { NavbarHeight } from "theme";
import { AboutPageId, SkillPageId } from "utils/useScroll";

import "./App.scss";
import "aos/dist/aos.css";
import { Skills } from "./pages/about/skills/Skills";
import { About } from "pages/about/About";

const Navbar = lazy(() => import("shared/navbar/Navbar").then((module) => ({ default: module.Navbar })));
const PageHeader = lazy(() =>
    import("shared/page-header/PageHeader").then((module) => ({ default: module.PageHeader })),
);
const Footer = lazy(() => import("shared/footer/Footer").then((module) => ({ default: module.Footer })));
const Loader: FC = () => (
    <Center w="100%" h="100%">
        <Spinner size="lg" color="primary.500" />
    </Center>
);

export const App: FC = () => {
    useEffect(() => {
        AOS.init({ once: true });
    }, []);

    return (
        <Suspense fallback={<Loader />}>
            <Container h="100%" px={{ base: 6, md: 6, lg: 4 }}>
                <Navbar />
                <Box mt={{ base: "96px", md: NavbarHeight }}>
                    <Box id={AboutPageId}>
                        <About />
                    </Box>
                    <Box id={SkillPageId}>
                        <PageHeader label="Skills" />
                        <Skills />
                    </Box>
                </Box>
                <Footer />
            </Container>
        </Suspense>
    );
};
