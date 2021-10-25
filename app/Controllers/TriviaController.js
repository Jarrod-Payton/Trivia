import { triviaService } from "../Services/TriviaService.js"

export class TriviaController {
  Console() {
    console.log('Controller Wired Up')
    triviaService.Console()
  }
}