import { ProxyState } from "../AppState.js"
import { api } from "./TriviaAPI.js"

class TriviaService {
  async Console() {
    console.log('Service Added')
    ProxyState.Console()
    newAPI = await api
    console.log(newAPI)
    afterwards
  }
}

export const triviaService = new TriviaService()