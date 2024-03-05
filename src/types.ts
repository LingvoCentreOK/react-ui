///// Types for "rootslice.ts" file /////

export type ComponentsTitles = {
  homePageTitles: {
    title: string;
    subtitle: string;
    buttonTitle: string;
  };
  organizationInfoBlockInfos: {
    firstInfo: string;
    secondInfo: string;
  };
  teamCarouselTitle: string;
  achievementBlockTitles: {
    title: string;
    infos: string[];
  };
  newsBlockTitle: string;
};

export type TeamMember = {
  id: string;
  name: { name1: string; name2?: string | undefined };
  info: {
    position1: string;
    position2?: string | undefined;
  };
  images: { image1: string; image2?: string | undefined };
};

export type CardBoxFontStylesProps = {
  newsBlockStyles: {
    dateStyles: {
      xlgBreakpoints: {
        fontSize: string;
        letterSpacing: string;
      };
      smBreakpoints: {
        fontSize: string;
        letterSpacing: string;
      };
    };
    newsStyles: {
      xlgBreakpoints: {
        fontSize: string;
        letterSpacing: string;
      };
      smBreakpoints: {
        fontSize: string;
        letterSpacing: string;
      };
    };
  };
  newsPageStyles: {
    dateStyles: {
      xlgBreakpoints: {
        fontSize: string;
        letterSpacing: string;
      };
      smBreakpoints: {
        fontSize: string;
        letterSpacing: string;
      };
    };
    newsStyles: {
      xlgBreakpoints: {
        fontSize: string;
        letterSpacing: string;
      };
      smBreakpoints: {
        fontSize: string;
        letterSpacing: string;
      };
    };
  };
  singleCardPageStyles: {
    dateStyles: {
      xlgBreakpoints: {
        fontSize: string;
        letterSpacing: string;
      };
      smBreakpoints: {
        fontSize: string;
        letterSpacing: string;
      };
    };
    newsStyles: {
      xlgBreakpoints: {
        fontSize: string;
        letterSpacing: string;
      };
      smBreakpoints: {
        fontSize: string;
        letterSpacing: string;
      };
    };
  };
};

export type SeparateNewsStylesProps = {
  dateStyles: {
    xlgBreakpoints: {
      fontSize: string;
      letterSpacing: string;
    };
    smBreakpoints: {
      fontSize: string;
      letterSpacing: string;
    };
  };
  newsStyles: {
    xlgBreakpoints: {
      fontSize: string;
      letterSpacing: string;
    };
    smBreakpoints: {
      fontSize: string;
      letterSpacing: string;
    };
  };
};

export type BreakpointStyles = {
  fontSize: string;
  letterSpacing: string;
};

export type TreeDotsStyleProps = {
  display: string;
  whiteSpace: string;
  overflow: string;
  textOverflow: string;
};

///// Types for other files /////

export type TeamCarouselProps = {
  deviceType?: string;
};

export type CarouselProps = {
  deviceType?: string | undefined;
  responsiveItems: Array<number>;
  isDraggable: boolean;
  children: React.ReactNode;
};

export type TeamMemberProps = {
  id?: string;
  name: string;
  info: string;
  image: string;
};

export type CustomArrowProps = {
  onClick: () => void;
  retreatFromLeftSide: string | null;
  retreatFromRightSide: string | null;
  arrowIcon: string;
};

export type OneNewsProps = {
  by?: string;
  descendants?: number;
  id: number;
  score?: number;
  time: number;
  title: string;
  type?: string;
  url?: string;
};

export type languagesAndColors = string[];

export type AvailableLanguagesBlockTitlesProps = {
  title: string;
  languagesAndStylesArray: languagesAndColors[];
};

export type InnerSquareContentProps = {
  title: string;
  priceServicesInfos: string[];
};

export type ContactInfo = {
  contactIcon: string;
  сontactInfoContext: React.ReactNode;
  linkToImplementContact: string;
};

export type ContactInformationProps = {
  title: string;
  infos: ContactInfo[];
};
