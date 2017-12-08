import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import { BackendConfig } from "./backendconfig";


@Injectable()
export class ApiDataService {

    private baseApiUrl: string;
    private headers: Headers;

    constructor(private _http: Http, private _bsconfig: BackendConfig){
        this.baseApiUrl = _bsconfig.ServerWithApiUrl;
    }
}