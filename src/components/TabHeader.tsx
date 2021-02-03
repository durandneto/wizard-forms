export interface  TabItemInterface {
    id: number;
    label: string;
    error?: boolean;
    success?: boolean;
    component: any;
}
export interface TabHeaderInterface {
    tabs: Array<TabItemInterface>;
    activeTab: TabItemInterface;
    onClickTab: (TabItem: TabItemInterface) => void;
}

const TabHeader = ({ activeTab, tabs, onClickTab }: TabHeaderInterface) => (
    <header>
        <nav className="main_nav">
            <ul className="nav nav-tabs">
                {
                    tabs?.map((tab: TabItemInterface, index: number ) => (
                        <li
                            className={tab.error ? "error" : ""}
                            key={`tab-index-${tab.id}`} onClick={() => {
                            onClickTab(tab)
                        }}>
                            <a href="#" className={tab.id === activeTab.id ? "active show" : ""}>
                                {tab.label}
                                {
                                    tab.error && <i  style={{color: "#dc3545"}}  className="icon-attention-filled"></i>
                                }
                                {
                                    tab.success && <i style={{color: "#155724"}} className="icon-ok-1"></i>
                                }
                            </a>
                        </li>
                    ))
                }
                <li><button type="button" className="forward">Submit form</button></li>
            </ul>
        </nav>
  </header>
)


export default TabHeader