export interface ICamera {
  entityId: number;
  videoDeviceId2: number;
  name: string;
  dron?: string;
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
}

export interface IVideoDevice {
  id: number;
  name: string;
  uri: string;
  cameraSystem: ICamera[];
  activate: boolean;
  selected: boolean;
}
