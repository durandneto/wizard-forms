import { TabHeaderInterface } from '../components/TabHeader'

import { ProfileInterface, ProfileTab } from "./Profile.Contex"
import { DiabetesInterface, DiabetesTab } from "./Diabetes.Contex"
import { CardiacDataInterface, CardiacTab } from "./Cardiac.Contex"
import { CancerDataInterface, CancerTab } from "./Cancer.Contex"
import { AgentDataInterface, AgentTab } from './Agent.Contex'

export const TabsContext: Array<TabHeaderInterface> = [
    AgentTab,
    ProfileTab,
    CancerTab,
    CardiacTab,
    DiabetesTab,
]

export interface AppDataInterface {
    Agent: AgentDataInterface,
    Profile: ProfileInterface,
    Cancer: CancerDataInterface,
    Cardiac: CardiacDataInterface,
    Diabets: DiabetesInterface
}