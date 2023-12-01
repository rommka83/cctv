export interface ISession {
  id: number;
  name: string;
  metadata: string;
  created: string;
  ended: unknown;
  recording: boolean;
  frozen: boolean;
  videos: [];
}
