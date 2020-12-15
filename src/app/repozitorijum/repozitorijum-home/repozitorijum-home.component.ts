import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ColumnApi, GridApi, GridOptions } from 'ag-grid-community';
import { RepozitorijumService } from '../services/repozitorijum.service';
import { DisertacijaPdfCellRendererComponent } from './disertacija-pdf-cell-renderer/disertacija-pdf-cell-renderer.component';
import { IzvestajKomisijePdfCellRendererComponent } from './izvestaj-komisije-pdf-cell-renderer/izvestaj-komisije-pdf-cell-renderer.component';

@Component({
  selector: 'app-repozitorijum-home',
  templateUrl: './repozitorijum-home.component.html',
  styleUrls: ['./repozitorijum-home.component.scss']
})
export class RepozitorijumHomeComponent implements OnInit {
  gridOptions_Grid1: GridOptions = {
    localeText: {
      equals: 'Jednako',
      contains: 'Sadrzi',
      notContains: 'Ne sadrzi',
      startsWith: 'Pocinje sa',
      endsWith: 'Zavrsava se sa',
      notEqual: 'Nije jednako',
    },
    // Important for Cell Renderers referencing parent component
    context: {
      componentParent: this,
    },

    rowDragManaged: true,
    floatingFilter: true,
    rowGroupPanelShow: 'always',
    pivotPanelShow: 'always',
    animateRows: true,
  };

  gridApi_Grid1: GridApi;
  columnApi_Grid1: ColumnApi;
  columnDefs_Grid1 = [
    {
      headerName: 'Ime',
      field: 'imeDisertanta',
      filter: 'agTextColumnFilter',
      filterParams: { filterOptions: ['contains', 'notContains', 'equals'] },
      width: 120,
      suppressSizeToFit: false,
    },
    {
      headerName: 'Prezime',
      field: 'prezimeDisertanta',
      filter: 'agTextColumnFilter',
      filterParams: { filterOptions: ['contains', 'notContains', 'equals'] },
      width: 120,
      suppressSizeToFit: false,
    },
    {
      headerName: 'Datum',
      field: 'datumObjave',
      filter: 'agTextColumnFilter',
      filterParams: { filterOptions: ['contains', 'notContains', 'equals'] },
      width: 120,
      suppressSizeToFit: false,
    },
    {
      headerName: 'Naziv disertacije',
      field: 'nazivDisertacije',
      filter: 'agTextColumnFilter',
      filterParams: { filterOptions: ['contains', 'notContains', 'equals'] },
      wrapText: true,
      width: 700,
    },
    {
      headerName: 'Disertacija',
      cellRendererFramework: DisertacijaPdfCellRendererComponent,
      width: 120,
      suppressSizeToFit: false,
    },
    {
      headerName: 'Izvestaj komisije',
      cellRendererFramework: IzvestajKomisijePdfCellRendererComponent,
      width: 120,
      suppressSizeToFit: false,
    },
  ];

  defaultColDef: any;
  maxConcurrentDatasourceRequests__Grid1 = 3;
  frameworkComponents: any;
  domLayout_Grid1 = 'autoHeight';
  paginationPageSize_Grid1 = 10;
  pagination_Grid1 = true;
  dataSourceInitial: any[];
  rowsData_Grid1: any[];
  displayGrid1 = false;
  rowSelection = 'single';
  enableCellTextSelection = true;

  constructor(private repozitorijumService: RepozitorijumService) {}

  ngOnInit(): void {
    this.repozitorijumService
      .getRepozitorijumRows()
      .subscribe((result: any) => {
        this.dataSourceInitial = result['repozitorijum'];

        this.defaultColDef = {
          autoHeight: true,
          sortable: true,

          suppressNavigable: true,
          editable: false,

          cellClass: 'cell-wrap-text',
        };

        this.displayGrid1 = true;
      });
  }

  // to get pdf among other columns
  // gets called from disertacija cell renderer
  on_open_PDF(id: number, doc: string) {
    this.repozitorijumService
      .getRepozitorijumRow(id, doc)
      .subscribe((result: any) => {
        var byteCharacters = atob(result['repozitorijum']['pdfBytes']);
        var byteNumbers = new Array(byteCharacters.length);
        for (var i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        var byteArray = new Uint8Array(byteNumbers);
        var blob = new Blob([byteArray], { type: 'application/pdf' });
        var fileURL = URL.createObjectURL(blob);
        window.open(fileURL, '_blank');
      });
  }

  headerHeightSetter($event) {
    var padding = 10;
    var height = headerHeightGetter() + padding;
    $event.api.setHeaderHeight(height);
    $event.api.resetRowHeights();
  }

  onGridSizeChanged($event) {
    // $event.api.sizeColumnsToFit(false);
    this.resizeColumnsToFit();
  }

  resizeColumnsToFit(allowShrink = false) {
    if (this.gridApi_Grid1) {
      if (allowShrink) {
        this.gridApi_Grid1.sizeColumnsToFit();
      } else {
        /**
         * this is a "hacK" - there is no way to check if there is "empty" space in the grid using the
         * public grid api - we have to use the internal tools here.
         * it could be that some of this apis will change in future releases
         */
        const panel = this.gridApi_Grid1['gridPanel'];
        const availableWidth = this.gridApi_Grid1['gridPanel'].eBodyViewport
          .clientWidth;
        const columns = this.gridApi_Grid1['gridPanel'][
          'columnController'
        ].getAllDisplayedColumns();
        const usedWidth = this.gridApi_Grid1['gridPanel'][
          'columnController'
        ].getWidthOfColsInList(columns);

        if (usedWidth < availableWidth) {
          this.gridApi_Grid1.sizeColumnsToFit();
        }
      }
    }
  }

  onPaginationChanged(event: any) {}

  onGridReady_Grid1($event) {
    this.gridApi_Grid1 = $event.api;
    this.columnApi_Grid1 = $event.columnApi;
    this.rowsData_Grid1 = this.dataSourceInitial;
    this.gridApi_Grid1.sizeColumnsToFit();
  }
}

function headerHeightGetter() {
  var columnHeaderTexts = document.querySelectorAll('.ag-cell-value');

  var columnHeaderTextsArray = [];

  columnHeaderTexts.forEach((node) => columnHeaderTextsArray.push(node));

  var clientHeights = columnHeaderTextsArray.map(
    (headerText) => headerText.clientHeight
  );
  var tallestHeaderTextHeight = Math.max(...clientHeights);
  return tallestHeaderTextHeight;
}
