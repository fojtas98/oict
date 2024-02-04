import axios from 'axios'
// [CR] moment je deprecated https://www.npmjs.com/package/moment
import moment from 'moment'
import { stateResponse, validityResponse } from '../types/externalResponses'
import {getStatusResponse} from '../types/getStatusResponse'

export default async (cardNumber: string): Promise<getStatusResponse> => {
  const [validity, state] = await Promise.all([
    // [CR] base url by bylo vhodné mít v konfiguraci
    axios.get<validityResponse>(`http://private-264465-litackaapi.apiary-mock.com/cards/${cardNumber}/validity`),
    axios.get<stateResponse>(`http://private-264465-litackaapi.apiary-mock.com/cards/${cardNumber}/state`)
  ])
  // [CR] zbytečný if, pokud se vrátí chybový stav, tak se vyhodí vyjímka
  if (validity.status === 200 && state.status === 200) {
    // [CR] bylo by vhodné zvalidovat vstup (pokud to nedělá axios sám podle typu)
    const response = {
      state: state.data.state_description,
      validationEnds: moment(validity.data.validity_end).format('MM.DD.YYYY')
    }
    return response
  } else {
    // [CR] pokud axios vzhodí chybu, tak se tu nezachytí
    // [CR] console.log by se neměl používat pro logování chyb, ale pro debugování, v produkci by se mělo logovat nějakým logovacím nástrojem
    console.log('Validity response status: ', validity.status)
    console.log('State response status: ', state.status)
    // [CR] prázdný Error?
    throw new Error()
  }
}
