import { TabItemInterface, TabHeaderInterface } from '../components/TabHeader'
import InfoComponent from "../components/Agent/Info"
import { guidGenerator } from '../utils'


export interface AgentDataInterface {
   name: string;
   url: string;
}

export const AgentInfoData: AgentDataInterface = {
   name: "",
   url: ""
}

const AgentItemsTab: Array<TabItemInterface> = [
   {
      id: guidGenerator(),
      index: 0,
      label: "Info",
      slug: "Info",
      component: (props:any) => <InfoComponent {...props} />,
      data: AgentInfoData
   },
]

export const AgentTab: TabHeaderInterface = {
   id: guidGenerator(),
   index: 0,
   label: "Agent",
   slug: "Agent",
   tabs: AgentItemsTab,
}

