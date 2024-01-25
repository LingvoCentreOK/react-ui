export type TeamCarouselProps = {
  deviceType?: string;
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
