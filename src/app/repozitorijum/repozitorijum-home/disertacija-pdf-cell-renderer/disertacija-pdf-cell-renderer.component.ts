import { Component, OnDestroy, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-disertacija-pdf-cell-renderer',
  templateUrl: './disertacija-pdf-cell-renderer.component.html',
  styleUrls: ['./disertacija-pdf-cell-renderer.component.scss'],
})
export class DisertacijaPdfCellRendererComponent {
  private params: any;

  agInit(params: any): void {
    this.params = params;
  }

  onClickHandler() {
    // sending params - id, doc
    this.params.context.componentParent.on_open_PDF(
      this.params.data.id,
      'disertacija'
    );
  }
}
