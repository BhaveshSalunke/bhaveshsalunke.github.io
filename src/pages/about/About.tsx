import { FC } from "react";
import { useBreakpointValue } from "@chakra-ui/react";
import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";

import { configs, Content, MarkdownFile, useContent } from "shared/content/Content";
import { Education } from "pages/about/education/Education";
import { Experience } from "pages/about/experience/Experience";

export const About: FC = () => {
    const content = useContent(MarkdownFile.About);

    const imageSrc = useBreakpointValue({
        base: process.env.PUBLIC_URL + configs.common.mainPictureMobile,
        lg: process.env.PUBLIC_URL + configs.common.mainPicture,
    });


    return (
        <Box>
            <Flex pt="8" gap={{ base: 6, md: 6, lg: 12 }} direction={{ base: "column", md: "row" }}>
                <Box flex="0.35" data-aos="fade-up">
                    <picture>
                        <source type="image/webp" srcSet={process.env.PUBLIC_URL + configs.common.mainPicture}></source>
                        <source type="image/jpeg"
                                srcSet={process.env.PUBLIC_URL + configs.common.mainPictureJPG}></source>
                        <Image
                            borderRadius="xl"
                            src={imageSrc}
                            alt="face-cover-image"
                            boxSize={{ base: "120px", md: "220px", lg: "320px" }} // scale image size responsively
                            objectFit="cover"
                        />
                    </picture>
                </Box>
                <Box flex="0.85">
                    <Heading data-aos="fade-down">{configs.common.name}</Heading>
                    <Flex alignItems="center">
                        <Text fontWeight="bold" opacity="0.5" data-aos="fade" data-aos-delay="200">
                            {configs.common.pronunciation}
                        </Text>

                    </Flex>
                    <Box pt="4" data-aos="fade-up" data-aos-delay="400">
                        <Content fontSize="lg">{content.about}</Content>
                    </Box>
                </Box>
            </Flex>
            <Flex
                direction={{ base: "column", md: "row" }}
                gap={{ base: 16, md: 6, lg: 12 }}
                mt="16"
                justifyContent="space-between"
            >
                <Box flex="0.6" overflow="hidden">
                    <Education />
                </Box>
                <Box flex="0.6" overflow="hidden">
                    <Experience />
                </Box>
            </Flex>
        </Box>
    );
};
