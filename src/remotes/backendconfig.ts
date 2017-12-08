import { Injectable } from "@angular/core";


@Injectable()
export class BackendConfig{

    public Server: string;

    public ApiUrl: string;

    public ServerWithApiUrl = this.Server + this.ApiUrl;

}