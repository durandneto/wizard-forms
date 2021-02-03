import { Fragment, useState } from "react"
import { TabItemInterface } from '../TabHeader'
import PersonalInfo from "../Profile/personal-info.component"
import Address from "../Profile/address.component"
import MedicareID from "../Profile/medical.component"

const Tabs: Array<TabItemInterface> = [
   {
      id: 1,
      label: "Diagnostic",
      component: <PersonalInfo />,
      success: true
   },
   {
      id: 2,
      label: "Medications",
      component: <Address />,
   },
   {
      id: 3,
      label: "Family Member",
      component: <MedicareID />,
   },
]

const Diabets = () => {
   const [tabIndex, setTab] = useState<number>(0)
   const activeTab: TabItemInterface = Tabs[tabIndex]
   return (
   <Fragment>
      <aside className="col-xl-3 col-lg-4">
         <h2>Diabets Section.</h2>
         <p className="lead">Little brief here to explain what is this for.</p>
         <ul className="list">
            {
               Tabs.map((tab: TabItemInterface, index: number) => 
                  <li onClick={() => setTab(index)} key={`Diabets-tab-index-${index}`} className={index === tabIndex ? "active" : ""}>
                     {tab.label}
                     {
                        tab.error && <i  style={{color: "#dc3545"}}  className="icon-attention-filled"></i>
                     }
                     {
                        tab.success && <i style={{color: "#155724"}} className="icon-ok-1"></i>
                     }
                  </li>
               )
            }
         </ul>
         
      </aside>
      <div className="col-xl-9 col-lg-8">
         <div id="wizard_container">
            <div id="top-wizard">
               <strong>{activeTab.label}</strong>
            </div>
            <div id="middle-wizard">
               {activeTab.component}
            </div>
            <div id="bottom-wizard">
               <button  type="button" className="forward" name="save">Save</button>
            </div>
         </div>
      </div>
   </Fragment>
)}


export default Diabets