export class PageInfo {

    endCursor: string = '';
    hasNextPage: boolean = false;

    constructor(pageInfo?: any) {
        if (pageInfo) {
            this.endCursor = pageInfo.endCursor || '';
            this.hasNextPage = pageInfo.hasNextPage || false;
        }
    }

}