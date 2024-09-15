export interface EscapeRoomData {
  date: Date;
  rating: number;
  alternativeText: string;
}

export interface EscapeRoom extends EscapeRoomData {
  id: string;
  title: string;
  smallImage: string;
  bigImage: string;
  place: string;
  description: string;
}

export interface EscapeRoomApi extends EscapeRoomData {
  _id: string;
  name: string;
  smallImageUrl: string;
  detailImageUrl: string;
  location: string;
  content: string;
}
