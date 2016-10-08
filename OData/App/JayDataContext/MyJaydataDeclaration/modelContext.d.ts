declare type JSDate = Date;
declare module Edm {
    type Boolean = boolean;
    type Binary = Uint8Array;
    type DateTime = JSDate;
    type DateTimeOffset = JSDate;
    type Duration = string;
    type TimeOfDay = string;
    type Date = string;
    type Time = string;
    type Decimal = string;
    type Single = number;
    type Float = number;
    type Double = number;
    type Guid = string;
    type Int16 = number;
    type Int32 = number;
    type Int64 = string;
    type Byte = number;
    type SByte = number;
    type String = string;
    type GeographyPoint = $data.Geography;
    type GeographyLineString = $data.GeographyLineString;
    type GeographyPolygon = $data.GeographyPolygon;
    type GeographyMultiPoint = $data.GeographyMultiPoint;
    type GeographyMultiPolygon = $data.GeographyMultiPolygon;
    type GeographyMultiLineString = $data.GeographyMultiLineString;
    type GeographyCollection = $data.GeographyCollection;
    type GeometryPoint = $data.Geometry;
    type GeometryLineString = $data.GeometryLineString;
    type GeometryPolygon = $data.GeometryPolygon;
    type GeometryMultiPoint = $data.GeometryMultiPoint;
    type GeometryMultiPolygon = $data.GeometryMultiPolygon;
    type GeometryMultiLineString = $data.GeometryMultiLineString;
    type GeometryCollection = $data.GeometryCollection;
    type Primitive =
        Boolean | Binary | Guid | DateTime | DateTimeOffset | Duration | TimeOfDay | Date | Time |
        Decimal | Single | Float | Double | Int16 | Int32 | Int64 | Byte | SByte | String |
        GeographyPoint | GeographyLineString | GeographyPolygon | GeographyMultiPoint | GeographyMultiLineString | GeographyMultiPolygon | GeographyCollection |
        GeometryPoint | GeometryLineString | GeometryPolygon | GeometryMultiPoint | GeometryMultiLineString | GeometryMultiPolygon | GeometryCollection;
}

interface IJaydataContextConfig {
    name: string;
    oDataServiceHost: string;
    withCredentials: boolean;
    maxDataServiceVersion: string;
}

declare module Models {
    export class Supplier extends $data.Entity {
        constructor();
        constructor(initData: { Id?: Edm.Int32; Name?: Edm.String; Products?: Models.Product[] });

        Id: Edm.Int32;
        Name: Edm.String;
        Products: Models.Product[];
    }

    export class Category extends $data.Entity {
        constructor();
        constructor(initData: { Id?: Edm.Int32; Name?: Edm.String; Products?: Models.Product[] });

        Id: Edm.Int32;
        Name: Edm.String;
        Products: Models.Product[];
    }

    export class Product extends $data.Entity {
        constructor();
        constructor(initData: { Id?: Edm.Int32; Name?: Edm.String; Price?: Edm.Decimal; SupplierId?: Edm.Int32; CategoryId?: Edm.Int32; CreatedOn?: Edm.DateTimeOffset; Supplier?: Models.Supplier; Category?: Models.Category });

        Id: Edm.Int32;
        Name: Edm.String;
        Price: Edm.Decimal;
        SupplierId: Edm.Int32;
        CategoryId: Edm.Int32;
        CreatedOn: Edm.DateTimeOffset;
        Supplier: Models.Supplier;
        Category: Models.Category;
    }
}



declare class MyJaydataContext extends $data.EntityContext {
    //onReady(): Promise<Container>;

    Products: $data.EntitySet<Models.Product>;
    Categories: $data.EntitySet<Models.Category>;
    Suppliers: $data.EntitySet<Models.Supplier>;
}
