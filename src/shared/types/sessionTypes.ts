export interface IVideo {
  entityId: number;
  videoDeviceId2: number;
  videoDeviceId: number;
  cameraSystemId: number;
  cameraId: number;
  sessionId: number;
  created: string;
  ended: string;
  recording: boolean;
  metadata: string;
  format: string;
  id: number;
  indexInSchema: number;
}

export interface ISession {
  id: number;
  name: string;
  metadata: string;
  created: string;
  ended: string;
  recording: boolean;
  frozen: boolean;
  lastUpdatedMillis: string;
  videos: IVideo[];
}
