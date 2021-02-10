export interface  TabItemInterface {
    id: number;
    index: number;
    label: string;
    error?: string | number;
    success?: boolean;
    component: any;
    data?: any;
}
export interface TabHeaderInterface extends TabItemInterface{
    tabs: Array<TabItemInterface>;
    activeTab: TabItemInterface;
}
