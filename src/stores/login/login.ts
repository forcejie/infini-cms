import { defineStore } from "pinia"
import { accountLoginRequest } from "@/service/login/login"
import type { IAccount } from "@/types"
import { localCache } from "@/utils/cache"
import router from "@/router"
const LOGIN_TOKEN = "login/token"
interface ILoginState {
  token: string
  userInfo: any
}
const useLoginStore = defineStore("login", {
  state: (): ILoginState => ({
    token: localCache.getCache(LOGIN_TOKEN) ?? "",
    userInfo: localCache.getCache("userInfo") ?? {}
  }),
  actions: {
    async loginAccountAction(account: IAccount) {
      const loginResult = await accountLoginRequest(account)
      const id = loginResult.data.id
      this.token = loginResult.data.token
      // console.log(loginResult)

      localCache.setCache(LOGIN_TOKEN, this.token)

      // const userInfoResult = await

      router.push("/main")
    }
  }
})
export default useLoginStore
