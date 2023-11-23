export interface IVideoDevice {
  id: number;
  name: string;
  uri: string;
  cameraSystem: [
    {
      entityId: number;
      videoDeviceId2: number;
      name: string;
      cameras: [
        {
          entityId: number;
          videoDeviceId: number;
          id: number;
          sessionId: number;
          videoId: number;
          name: string;
          activated: boolean;
          resolution: string;
          fps: number;
          type: string;
        },
      ];
      id: number;
    },
  ];
  activate: boolean;
}
