import axios from 'axios'
import moment from 'moment'
import { stateResponse, validityResponse } from '../types/externalResponses'
import {getStatusResponse} from '../types/getStatusResponse'

export default async (cardNumber: string): Promise<getStatusResponse> => {
  const [validity, state] = await Promise.all([
    axios.get<validityResponse>(`http://private-264465-litackaapi.apiary-mock.com/cards/${cardNumber}/validity`),
    axios.get<stateResponse>(`http://private-264465-litackaapi.apiary-mock.com/cards/${cardNumber}/state`)
  ])
  if (validity.status === 200 && state.status === 200) {
    const response = {
      state: state.data.state_description,
      validationEnds: moment(validity.data.validity_end).format('MM.DD.YYYY')
    }
    return response
  } else {
    console.log('Validity response status: ', validity.status)
    console.log('Stage response status: ', state.status)
    throw new Error()
  }
}
