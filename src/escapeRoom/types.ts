export interface EscapeRoom {
  id: string;
  title: string;
  date: Date;
  rating: number;
  smallImage: string;
  bigImage: string;
  alternativeText: string;
  place: string;
  description: string;
}

export interface EscapeRoomDto extends EscapeRoom {
  _id: string;
}
