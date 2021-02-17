import axios from "axios";
import { token } from "../context/Auth.Context"
import { AppDataInterface } from "../context/Tabs.Context";
import { BASE_URL, BASE_URL_ECS } from "./profile";

interface saveDataInterface {
    recordingUrl: string | null;
    agentName: string | null;
    firstName: string | null;
    lastName: string | null;
    contactNumber: string | null;
    altContactNumber: string | null;
    isCellphone?: boolean;
    gender: string | null;
    city: string | null;
    state: string | null;
    zip: string | null;
    address: string | null;
    address2: string | null;
    email: string | null;
    nursingHome: boolean;
    birthDate: string | null;
    alzheimerorDementia: boolean;
    medicareId: string | null;
    extendedMedicareLeadData: any;
    salivaSwabTest: boolean;
    height: string | null;
    weight: string | null;
    ethnicity: string | null;
    diabetesInformation: {
        diagnostics: Array<string | null>;
        bmi: string | null;
        familyMembers: Array<{
            relationship: string | null;
            name: string | null;
            gender: string | null;
            diagnostic: string | null;
            birthDate: string | null;
            age: string | null;
        }>;
        transfer: boolean
    };
    cancerInformation: {
        indication: string | null;
        diagnosticCancer: boolean;
        treatment: string | null;
        medications: string | null;
        familyMembers: Array<{
            relationship: string | null;
            from: string | null;
            type: string | null;
            birthDate: string | null;
            ageOfDiagnostic: string | null;
        }>;
        transfer: boolean
    };
    cardiacInformation: {
        diagnostics: Array<string | null>;
        prescribedMedicationsNitratesRenaxaNitrostat: boolean;
        prescribedMedications: string | null;
        diabetes: boolean;
        diabetesType: string | null;
        familyMembers: [
        {
            relationship: string | null;
            from: string | null;
            toAge: string | null;
            diagnostics: Array<string | null>;
            birthDate: string | null;
            diabetes: boolean;
            diabetesType: string | null;
        }
        ];
        transfer: boolean
    };
    physicianInformation: {
        doctorFullName: string | null;
        contactPhone: string | null;
        address: string | null;
        address2: string | null;
        city: string | null;
        state: string | null;
        zip: string | null;
    }     
}



export const submitForm = (AppData: any) => {
    const axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Authorization": `Bearer ${token}`
        }
    };
    debugger
    const postData: saveDataInterface = {
        recordingUrl: AppData.Agent.tabs.Info.data.url,
        agentName: AppData.Agent.tabs.Info.data.name,
        firstName: AppData.Profile.tabs.PersonalInfo.data.firstName,
        lastName: AppData.Profile.tabs.PersonalInfo.data.lastName,
        contactNumber: `${AppData.Profile.tabs.PersonalInfo.data.phoneCode}${AppData.Profile.tabs.PersonalInfo.data.phone}`,
        altContactNumber: `${AppData.Profile.tabs.PersonalInfo.data.altPhoneCode}${AppData.Profile.tabs.PersonalInfo.data.altPhoneCode}`,
        isCellphone:false,
        gender: AppData.Profile.tabs.PersonalInfo.data.gender,
        city: AppData.Profile.tabs.Address.data.city,
        state: AppData.Profile.tabs.Address.data.streetLine,
        zip: AppData.Profile.tabs.Address.data.postalCode,
        address: AppData.Profile.tabs.Address.data.streetLine,
        address2: AppData.Profile.tabs.Address.data.streetLine2,
        email: AppData.Profile.tabs.PersonalInfo.data.email,
        nursingHome:false,
        birthDate: AppData.Profile.tabs.PersonalInfo.data.birthDate,
        alzheimerorDementia:false,
        medicareId: AppData.Profile.tabs.Medicare.data.memberID,
        extendedMedicareLeadData: "",
        salivaSwabTest:false,
        height: "",
        weight: "",
        ethnicity: AppData.Profile.tabs.PersonalInfo.data.ethnicity,
        diabetesInformation: {
            diagnostics: AppData.Diabetes.tabs.Diagnostic.data.list,
            bmi: AppData.Diabetes.tabs.BMI.data.value,
            familyMembers: [],
            transfer: AppData.Diabetes.tabs.Diagnostic.data.isRCEDiabetesTransfer
        },
        cancerInformation: {
            indication: AppData.Cancer.tabs.Diagnostic.data.indicationTest,
            diagnosticCancer:  false,//`${AppData.Cancer.Diagnostic.isDiagnosed}`,
            treatment: AppData.Cancer.tabs.Diagnostic.data.treatment,
            medications: AppData.Cancer.tabs.Diagnostic.data.OTC,
            familyMembers: [],
            transfer: AppData.Cancer.tabs.Diagnostic.data.isRCECancerTransfer
        },
        cardiacInformation: {
            diagnostics: AppData.Cardiac.tabs.Diagnostic.data.typeOfCardiac,
            prescribedMedicationsNitratesRenaxaNitrostat:false,
            prescribedMedications: AppData.Cardiac.tabs.Diagnostic.data.prescribedMedications,
            diabetes: (AppData.Cardiac.tabs.Diagnostic.data.diabetesType !== "No"),
            diabetesType: AppData.Cardiac.tabs.Diagnostic.data.diabetesType,
            familyMembers: [
            {
                relationship: "",
                from: "",
                toAge: "",
                diagnostics: [],
                birthDate: "",
                diabetes:false,
                diabetesType: "",
            }
            ],
            transfer: AppData.Cardiac.tabs.Diagnostic.data.isRCECardioTransfer
        },
        physicianInformation: {
            doctorFullName: AppData.Profile.tabs.PrimaryCare.data.fullName,
            contactPhone: AppData.Profile.tabs.PrimaryCare.data.phone,
            address: "",
            address2: "",
            city: "",
            state: "",
            zip: "",
        }     
    };
      
    return axios.post(`${BASE_URL_ECS}/medicare`, postData, axiosConfig)
    .then((res: any) => res.json() )
}
