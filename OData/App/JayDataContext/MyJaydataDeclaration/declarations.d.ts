declare module $data {
    export interface EntityContext {
        trackChanges: boolean;
        attach(item: Entity, mode?: EntityAttachMode): void;
        batchExecuteQuery(queries: Array<$data.Queryable<$data.Entity>>): Promise<Array<Array<$data.Entity> | any>>;
    }

    export interface Base extends Object {
        memberDefinitions: any[];
    }

    export interface Entity extends Base {
        create(): Entity;
        create(initData: {}): Entity;
        resetChanges: () => void;
        refresh(): () => Promise<void>;
        save(): () => Promise<void>;
    }

    export enum EntityState {
        Added,
        Deleted,
        Detached,
        Modified,
        Unchanged
    }

    export enum EntityAttachMode {
        AllChanged,
        Default,
        KeepChanges
    }

    export interface EntitySet<T extends Entity> extends Queryable<T> {
        createNew(item: T): T;
        createNew(initData: {}): T;
    }

    export interface Queryable<T extends Entity> {
        find(...ids: Array<any>): $data.IPromise<T>;
        first(predicate: (it: T, ...args: Array<any>) => boolean, params?: any): $data.IPromise<T>;
        filter(predicate: (it: T, ...args: Array<any>) => boolean, params?: any): Queryable<T>;
        first(): $data.IPromise<T>;
        single(): $data.IPromise<T>;
        count(): $data.IPromise<number>;
        orderBy(predicate: (it: T) => any): Queryable<T>;
        include(selector: (it: T) => any): Queryable<T>;
        some(): boolean;
        every(): boolean;
        withInlineCount(): Queryable<T>;
    }
}
