export default class Configuration {
  urlEndpoint: string;
  rgbColor: string;
  timeout: {
    general: number,
    element: number,
    toastMessage: number
  };
  
  constructor() {
    this.urlEndpoint = "/*";
    this.rgbColor = "rgb(0, 0, 0)";
    this.timeout = {
      general: 30,
      element: 10,
      toastMessage: 10

    }
  }
}
