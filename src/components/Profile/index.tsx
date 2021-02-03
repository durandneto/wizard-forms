import { Fragment, useState } from "react"
import { TabItemInterface } from '../TabHeader'
import PersonalInfo from "./personal-info.component"
import Address from "./address.component"
import MedicareID from "./medical.component"

const Tabs: Array<TabItemInterface> = [
   {
      id: 1,
      label: "Personal Information.",
      component: <PersonalInfo />,
      success: true
   },
   {
      id: 2,
      label: "Address",
      component: <Address />,
      error: true
   },
   {
      id: 3,
      label: "Medicare ID",
      component: <MedicareID />,
   },
]

const Profile = () => {
   const [tabIndex, setTab] = useState<number>(0)
   const activeTab: TabItemInterface = Tabs[tabIndex]
   return (
   <Fragment>
      <aside className="col-xl-3 col-lg-4">
         <h2>Profile Section.</h2>
         <p className="lead">Little brief here to explain what is this for.</p>
         <ul className="list">
            {
               Tabs.map((tab: TabItemInterface, index: number) => 
                  <li onClick={() => setTab(index)} key={`profile-tab-index-${index}`} className={index === tabIndex ? "active" : ""}>
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


export default Profile