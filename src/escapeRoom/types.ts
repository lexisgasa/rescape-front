export interface EscapeRoomData {
  name: string;
  date: Date;
  rating: number;
  alternativeText: string;
  smallImageUrl: string;
  detailImageUrl: string;
  location: string;
  content: string;
}

export interface EscapeRoom extends EscapeRoomData {
  id: string;
}

export interface EscapeRoomApi extends EscapeRoomData {
  _id: string;
}
