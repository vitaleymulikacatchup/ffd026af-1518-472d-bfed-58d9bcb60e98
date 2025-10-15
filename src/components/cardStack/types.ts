import type { LucideIcon } from "lucide-react";
import type { CTAButtonVariant, ButtonPropsForVariant } from "@/components/button/types";

export interface ButtonConfig {
    text: string;
    onClick?: () => void;
    href?: string;
    props?: Partial<ButtonPropsForVariant<CTAButtonVariant>>;
}

export interface TextBoxProps {
    title?: string;
    description?: string;
    tag?: string;
    tagIcon?: LucideIcon;
    buttons?: ButtonConfig[];
    layout?: "default" | "split";
    textBoxClassName?: string;
    titleClassName?: string;
    descriptionClassName?: string;
    tagClassName?: string;
    buttonContainerClassName?: string;
    buttonClassName?: string;
    buttonTextClassName?: string;
}

export interface CardStackProps extends TextBoxProps {
    children: React.ReactNode;
    mode?: "auto" | "buttons";
    className?: string;
    containerClassName?: string;
    gridClassName?: string;
    carouselClassName?: string;
    controlsClassName?: string;
    ariaLabel?: string;
}

export interface GridLayoutProps extends TextBoxProps {
    children: React.ReactNode;
    itemCount: number;
    className?: string;
    containerClassName?: string;
    gridClassName?: string;
    ariaLabel: string;
}

export interface AutoCarouselProps extends TextBoxProps {
    children: React.ReactNode;
    className?: string;
    containerClassName?: string;
    carouselClassName?: string;
    ariaLabel: string;
}

export interface ButtonCarouselProps extends TextBoxProps {
    children: React.ReactNode;
    className?: string;
    containerClassName?: string;
    carouselClassName?: string;
    controlsClassName?: string;
    ariaLabel: string;
}
