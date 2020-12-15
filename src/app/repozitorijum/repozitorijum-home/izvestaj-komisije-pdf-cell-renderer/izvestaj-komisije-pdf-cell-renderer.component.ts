import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-izvestaj-komisije-pdf-cell-renderer',
  templateUrl: './izvestaj-komisije-pdf-cell-renderer.component.html',
  styleUrls: ['./izvestaj-komisije-pdf-cell-renderer.component.scss'],
})
export class IzvestajKomisijePdfCellRendererComponent {
  private params: any;

  constructor() {}

  agInit(params: any): void {
    this.params = params;
  }

  onClickHandler() {
    // sending params - id, doc
    this.params.context.componentParent.on_open_PDF(
      this.params.data.id,
      'izvestaj_komisije'
    );
  }
}
