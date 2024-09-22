export interface EscapeRoomData {
  name: string;
  alternativeText: string;
  smallImageUrl: string;
  detailImageUrl: string;
  rating: string;
  location: string;
  content: string;
}

export interface EscapeRoom extends EscapeRoomData {
  id: string;
  date: Date;
}

export interface EscapeRoomApi extends EscapeRoomData {
  _id: string;
  createdAt: Date;
}
