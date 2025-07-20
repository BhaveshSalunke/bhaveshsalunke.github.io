import { configs } from "shared/content/Content";

export const open = (link: string) => window.open(link, "_blank");

export const onResumeOpen = () => {
    if (typeof window !== "undefined" && window.dataLayer) {
        window.dataLayer.push({ event: "resume_click" });
    }
    open(configs.common.resume);
};

export const onMailTo = () => {
    open("mailto:" + configs.common.email);
};
