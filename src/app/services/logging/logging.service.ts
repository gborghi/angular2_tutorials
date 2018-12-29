export class LoggingService {

  constructor() { }

  logStatusChanged(status: string){
    console.log("This happened "+status);
  }
}
