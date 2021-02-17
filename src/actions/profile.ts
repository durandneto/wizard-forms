import axios from "axios"
import { token } from "../context/Auth.Context"
import { ProfileAddressDataInterface, ProfileMedicareDataInterface, ProfileUserDataInterface } from "../context/Profile.Contex"

// export const BASE_URL = "https://services.oberholtzermedia.com"
export const BASE_URL = "http://ec2co-ecsel-uixxpxra75ed-1580772910.us-west-2.elb.amazonaws.com"
export const BASE_URL_ECS = "http://ec2co-ecsel-uixxpxra75ed-1580772910.us-west-2.elb.amazonaws.com"

export const validateAddress = (Address: ProfileAddressDataInterface) => {
    const axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Authorization": `Bearer ${token}`
        }
    };
    const data = `?street=${Address.streetLine}&street2=${Address.streetLine2}&city=${Address.city}&state=${Address.state}&zipcode=${Address.postalCode}`
    return axios.get(`${BASE_URL}/address-validation/${data}`, axiosConfig)
        .then((r: any) => r.json())
}

export const checkMedicare = (User: ProfileUserDataInterface, Medicare: ProfileMedicareDataInterface) => {
    const axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Authorization": `Bearer ${token}`
        }
    };
    if (User.birthDate) {

        const DOB = User.birthDate.split("-")
        const dt = `${DOB[1]}/${DOB[2]}/${DOB[0]}`
        // ?memberID=9dx2tp7pc18&Patient_DOB=1%2F22%2F1938&Patient_First=Rodolfo&Patient_Last=Gaytan&payerCode=00007&Provider_LastName=Fastflow%20Marketing&Provider_NPI=1609388842
        const data = `?memberID=${Medicare.memberID}&Patient_DOB=${dt}&Patient_First=${User.firstName}&Patient_Last=${User.lastName}&payerCode=${Medicare.payerCode}&Provider_LastName=${Medicare.Provider_LastName}&Provider_NPI=${Medicare.Provider_NPI}`
        return axios.get(`${BASE_URL}/medicare/${data}`, axiosConfig)
        .then((r: any) => r.data)
    } else {
        // eslint-disable-next-line no-throw-literal
        throw "Invalid DOB"
    }

}