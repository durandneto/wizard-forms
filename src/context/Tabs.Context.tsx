import { TabHeaderInterface } from '../components/TabHeader'

import { ProfileTab } from "./Profile.Contex"
import { DiabetesTab } from "./Diabetes.Contex"
import { CardiacTab } from "./Cardiac.Contex"
import { CancerTab } from "./Cancer.Contex"

export const TabsContext: Array<TabHeaderInterface> = [
  ProfileTab,
  CancerTab,
  CardiacTab,
  DiabetesTab
]