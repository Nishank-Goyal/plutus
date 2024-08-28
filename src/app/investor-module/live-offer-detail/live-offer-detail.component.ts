import { Component } from '@angular/core';
import { TABLE_HEADERS } from 'src/app/common-module/table/table.headers';

@Component({
  selector: 'app-live-offer-detail',
  templateUrl: './live-offer-detail.component.html',
  styleUrls: ['./live-offer-detail.component.scss']
})
export class LiveOfferDetailComponent {
  headers = TABLE_HEADERS.COMPANY_EARNING;
  header = 'Company Revinew'
  records = [{fiscalDateEnding:"About "},{fiscalDateEnding:"Cash Flow"},{fiscalDateEnding:"Balance Sheet"},{fiscalDateEnding:"Price Trend"}]
}
