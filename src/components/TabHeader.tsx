export interface  TabItemInterface {
    id: string;
    index: number;
    label: string;
    slug: string;
    error?: string | number | boolean;
    success?:  string | boolean;
    component?: any;
    data?: any;
}
export interface TabHeaderInterface extends TabItemInterface{
    tabs: Array<TabItemInterface>;
    activeTab?: TabItemInterface;
}
