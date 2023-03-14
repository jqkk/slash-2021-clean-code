import { http } from '@/config/rest'
import { PATH } from '@/config/rest/path'

export default {
  sendQuestion: async (question: string, id?: string) => {
    const response = await http.post(PATH.QUESTION, {
      data: {
        question,
        id,
      }
    })
    return response.data
  }
}