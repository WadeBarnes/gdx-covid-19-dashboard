/**
 * BC Gov Hub API service
 * The .Net Core API for the Hub
 *
 * OpenAPI spec version: Alpha
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { Post } from '../view-models/post';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class PostsService {

    protected basePath = 'https://localhost';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * 
     * 
     * @param post 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public addPost(post?: Post, observe?: 'body', reportProgress?: boolean): Observable<Post>;
    public addPost(post?: Post, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Post>>;
    public addPost(post?: Post, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Post>>;
    public addPost(post?: Post, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


        let headers = this.defaultHeaders;

        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json-patch+json',
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.post<Post>(`${this.basePath}/api/Posts`,
            post,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param pageNumber 
     * @param pageSize 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllPosts(pageNumber?: number, pageSize?: number, observe?: 'body', reportProgress?: boolean): Observable<Array<Post>>;
    public getAllPosts(pageNumber?: number, pageSize?: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Post>>>;
    public getAllPosts(pageNumber?: number, pageSize?: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Post>>>;
    public getAllPosts(pageNumber?: number, pageSize?: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {



        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (pageNumber !== undefined && pageNumber !== null) {
            queryParameters = queryParameters.set('PageNumber', <any>pageNumber);
        }
        if (pageSize !== undefined && pageSize !== null) {
            queryParameters = queryParameters.set('PageSize', <any>pageSize);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Array<Post>>(`${this.basePath}/api/Posts`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param numDays 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getLatestPosts(numDays: number, observe?: 'body', reportProgress?: boolean): Observable<Array<Post>>;
    public getLatestPosts(numDays: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Post>>>;
    public getLatestPosts(numDays: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Post>>>;
    public getLatestPosts(numDays: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (numDays === null || numDays === undefined) {
            throw new Error('Required parameter numDays was null or undefined when calling getLatestPosts.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Array<Post>>(`${this.basePath}/api/Posts/Latest/${encodeURIComponent(String(numDays))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param key 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getPost(key: string, observe?: 'body', reportProgress?: boolean): Observable<Post>;
    public getPost(key: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Post>>;
    public getPost(key: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Post>>;
    public getPost(key: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (key === null || key === undefined) {
            throw new Error('Required parameter key was null or undefined when calling getPost.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.get<Post>(`${this.basePath}/api/Posts/${encodeURIComponent(String(key))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param key 
     * @param post 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updatePost(key: string, post?: Post, observe?: 'body', reportProgress?: boolean): Observable<Post>;
    public updatePost(key: string, post?: Post, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Post>>;
    public updatePost(key: string, post?: Post, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Post>>;
    public updatePost(key: string, post?: Post, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (key === null || key === undefined) {
            throw new Error('Required parameter key was null or undefined when calling updatePost.');
        }


        let headers = this.defaultHeaders;

        // authentication (oauth2) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json-patch+json',
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.put<Post>(`${this.basePath}/api/Posts/${encodeURIComponent(String(key))}`,
            post,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
