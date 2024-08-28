import { CONSTANTS } from "src/constants";
import { HttpService } from "./https.service";
import { Injectable } from "@angular/core";
@Injectable({ providedIn: 'root' })
export class MainService {
  constructor(private httpService: HttpService) { }

  logout() {
    return this.httpService.post(CONSTANTS.APIS.MAIN_API.LOGOUT, {});
  }

  getUserProfile(data: any) {
    return this.httpService.get(CONSTANTS.APIS.MAIN_API.GET_USER_PROFILE, data)
  }

  sendEmailVerification(data: any) {
    return this.httpService.post(CONSTANTS.APIS.MAIN_API.SEND_COMPANY_EMAIL_VERIFICATION, data)
  }

  uploadFile(data: any) {
    return this.httpService.postFormData(CONSTANTS.APIS.MAIN_API.UPLOAD_FILE, data);
  }

  getUsersCompanyList(data = {}) {
    return this.httpService.get(CONSTANTS.APIS.MAIN_API.GET_COMPANY_LIST, data);
  }

  submitCompanyForVerification(data: any) {
    return this.httpService.post(CONSTANTS.APIS.MAIN_API.CREATE_NEW_COMPANY, data)
  }

  verifyUserCompany(data: any) {
    return this.httpService.put(CONSTANTS.APIS.MAIN_API.VERIFY_COMPANY, data);
  }

  getCompanyListForInvestor(data = {}) {
    return this.httpService.get(CONSTANTS.APIS.MAIN_API.GET_COMPANY_LIST_FOR_INVESTOR, data);
  }

  getInvestorProfile(data:any) {
    return this.httpService.get(CONSTANTS.APIS.MAIN_API.GET_INVESTOR_PROFILE, data);
  }

  createInvestorProfile(data:any){
    return this.httpService.post(CONSTANTS.APIS.MAIN_API.CREATE_INVESTOR,data);
  }
  getInvestorList(data:any = {}){
    return this.httpService.get(CONSTANTS.APIS.MAIN_API.GET_INVESTOR_LIST,data);
  }

  getMessageList(data:any){
    return this.httpService.get(CONSTANTS.APIS.MAIN_API.GET_MESSAGE_LIST,data)
  }

  sendCompanyInvestment(data:any){
    return this.httpService.post(CONSTANTS.APIS.MAIN_API.SEND_INVESTMENT_REQUEST,data);
  }

  getInvestorListForCompany(data:any){
    return this.httpService.get(CONSTANTS.APIS.MAIN_API.GET_INVESTOR_LIST_FOR_COMPANY,data);
  }

  acceptInvestorRequest(data:any){
    return this.httpService.put(CONSTANTS.APIS.MAIN_API.ACCEPT_REQUEST,data)
  }
}

