export interface ISession {
  id: number;
  metadata: string;
  created: string;
  ended: unknown;
  recording: boolean;
  frozen: boolean;
  videos: [];
}
