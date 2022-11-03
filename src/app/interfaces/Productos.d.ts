export interface Product{
    id:string;
    site_id:string;
    title:string;
    price:number;
    currency_id:string;
    description:[]
    thumbnail_id:string;
    thumbnail:string;
    pictures:[
        {
            id:string;
            url:string;
        },
        {
            id:string;
            url:string;
        },
        {
            id:string;
            url:string;
        },
        {
            id:string;
            url:string;
        },
        {
            id:string;
            url:string;
        },
        {
            id:string;
            url:string;
        }
    ];
}


export interface ResponseProduct{
    site_id:string;
    query:string;
    results:Product[]

}
