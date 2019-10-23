import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/table";
function TableTextColumnAdvancedExample_tr_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 7);
} }
function TableTextColumnAdvancedExample_tr_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 8);
} }
var ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
/**
 * @title Use of 'mat-text-column' with various configurations of the interface.
 */
var TableTextColumnAdvancedExample = /** @class */ (function () {
    function TableTextColumnAdvancedExample() {
        var _this = this;
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new MatTableDataSource(ELEMENT_DATA);
        this.decimalPipe = new DecimalPipe('en-US');
        /** Data accessor function that transforms the weight value to have at most 2 decimal digits. */
        this.getWeight = function (data) {
            var result = _this.decimalPipe.transform(data.weight, '1.0-2');
            return result === null ? '' : result;
        };
    }
    TableTextColumnAdvancedExample.decorators = [
        { type: Component, args: [{
                    selector: 'table-text-column-advanced-example',
                    styleUrls: ['table-text-column-advanced-example.css'],
                    templateUrl: 'table-text-column-advanced-example.html',
                },] },
    ];
    TableTextColumnAdvancedExample.ɵfac = function TableTextColumnAdvancedExample_Factory(t) { return new (t || TableTextColumnAdvancedExample)(); };
    TableTextColumnAdvancedExample.ɵcmp = i0.ɵɵdefineComponent({ type: TableTextColumnAdvancedExample, selectors: [["table-text-column-advanced-example"]], decls: 7, vars: 5, consts: [["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["name", "position", 3, "headerText"], ["name", "name", "headerText", "Element"], ["name", "weight", 3, "dataAccessor"], ["name", "symbol", "justify", "end"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-row", ""], ["mat-row", ""]], template: function TableTextColumnAdvancedExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "table", 0);
            i0.ɵɵelement(1, "mat-text-column", 1);
            i0.ɵɵelement(2, "mat-text-column", 2);
            i0.ɵɵelement(3, "mat-text-column", 3);
            i0.ɵɵelement(4, "mat-text-column", 4);
            i0.ɵɵtemplate(5, TableTextColumnAdvancedExample_tr_5_Template, 1, 0, "tr", 5);
            i0.ɵɵtemplate(6, TableTextColumnAdvancedExample_tr_6_Template, 1, 0, "tr", 6);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("dataSource", ctx.dataSource);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("headerText", ctx.headerText);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("dataAccessor", ctx.getWeight);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
        } }, directives: [i1.MatTable, i1.MatTextColumn, i1.MatHeaderRowDef, i1.MatRowDef, i1.MatHeaderRow, i1.MatRow], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}"] });
    return TableTextColumnAdvancedExample;
}());
export { TableTextColumnAdvancedExample };
/*@__PURE__*/ i0.ɵsetClassMetadata(TableTextColumnAdvancedExample, [{
        type: Component,
        args: [{
                selector: 'table-text-column-advanced-example',
                styleUrls: ['table-text-column-advanced-example.css'],
                templateUrl: 'table-text-column-advanced-example.html',
            }]
    }], null, null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtdGV4dC1jb2x1bW4tYWR2YW5jZWQtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9tYXRlcmlhbC90YWJsZS90YWJsZS10ZXh0LWNvbHVtbi1hZHZhbmNlZC90YWJsZS10ZXh0LWNvbHVtbi1hZHZhbmNlZC1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL3RhYmxlL3RhYmxlLXRleHQtY29sdW1uLWFkdmFuY2VkL3RhYmxlLXRleHQtY29sdW1uLWFkdmFuY2VkLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM1QyxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQzs7OztJQ1V6RCx3QkFBNEQ7OztJQUM1RCx3QkFBa0U7O0FERnBFLElBQU0sWUFBWSxHQUFzQjtJQUN0QyxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDNUQsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0lBQzNELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztJQUMzRCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7SUFDOUQsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQ3pELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUMzRCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDN0QsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQzNELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUM3RCxFQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7Q0FDNUQsQ0FBQztBQUVGOztHQUVHO0FBQ0g7SUFBQTtRQUFBLGlCQWtCQztRQVpDLHFCQUFnQixHQUFhLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDdEUsZUFBVSxHQUFHLElBQUksa0JBQWtCLENBQUMsWUFBWSxDQUFDLENBQUM7UUFJbEQsZ0JBQVcsR0FBRyxJQUFJLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUV2QyxnR0FBZ0c7UUFDaEcsY0FBUyxHQUFHLFVBQUMsSUFBcUI7WUFDaEMsSUFBTSxNQUFNLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztZQUNoRSxPQUFPLE1BQU0sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQ3ZDLENBQUMsQ0FBQTtLQUNGOztnQkFsQkEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxvQ0FBb0M7b0JBQzlDLFNBQVMsRUFBRSxDQUFDLHdDQUF3QyxDQUFDO29CQUNyRCxXQUFXLEVBQUUseUNBQXlDO2lCQUN2RDs7Z0hBQ1ksOEJBQThCO3VFQUE5Qiw4QkFBOEI7WUNoQzNDLGdDQUNFO1lBQUEscUNBQTZFO1lBRzdFLHFDQUFvRTtZQUdwRSxxQ0FBNEU7WUFHNUUscUNBQStEO1lBRS9ELDZFQUF1RDtZQUN2RCw2RUFBNkQ7WUFDL0QsaUJBQVE7O1lBZFMsMkNBQXlCO1lBQ1AsZUFBeUI7WUFBekIsMkNBQXlCO1lBTTNCLGVBQTBCO1lBQTFCLDRDQUEwQjtZQUt0QyxlQUFtQztZQUFuQyxzREFBbUM7WUFDMUMsZUFBZ0Q7WUFBaEQsdURBQWdEOzt5Q0RiOUQ7Q0E2Q0MsQUFsQkQsSUFrQkM7U0FiWSw4QkFBOEI7bUNBQTlCLDhCQUE4QjtjQUwxQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9DQUFvQztnQkFDOUMsU0FBUyxFQUFFLENBQUMsd0NBQXdDLENBQUM7Z0JBQ3JELFdBQVcsRUFBRSx5Q0FBeUM7YUFDdkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RlY2ltYWxQaXBlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtNYXRUYWJsZURhdGFTb3VyY2V9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYmxlJztcblxuZXhwb3J0IGludGVyZmFjZSBQZXJpb2RpY0VsZW1lbnQge1xuICBuYW1lOiBzdHJpbmc7XG4gIHBvc2l0aW9uOiBudW1iZXI7XG4gIHdlaWdodDogbnVtYmVyO1xuICBzeW1ib2w6IHN0cmluZztcbn1cblxuY29uc3QgRUxFTUVOVF9EQVRBOiBQZXJpb2RpY0VsZW1lbnRbXSA9IFtcbiAge3Bvc2l0aW9uOiAxLCBuYW1lOiAnSHlkcm9nZW4nLCB3ZWlnaHQ6IDEuMDA3OSwgc3ltYm9sOiAnSCd9LFxuICB7cG9zaXRpb246IDIsIG5hbWU6ICdIZWxpdW0nLCB3ZWlnaHQ6IDQuMDAyNiwgc3ltYm9sOiAnSGUnfSxcbiAge3Bvc2l0aW9uOiAzLCBuYW1lOiAnTGl0aGl1bScsIHdlaWdodDogNi45NDEsIHN5bWJvbDogJ0xpJ30sXG4gIHtwb3NpdGlvbjogNCwgbmFtZTogJ0JlcnlsbGl1bScsIHdlaWdodDogOS4wMTIyLCBzeW1ib2w6ICdCZSd9LFxuICB7cG9zaXRpb246IDUsIG5hbWU6ICdCb3JvbicsIHdlaWdodDogMTAuODExLCBzeW1ib2w6ICdCJ30sXG4gIHtwb3NpdGlvbjogNiwgbmFtZTogJ0NhcmJvbicsIHdlaWdodDogMTIuMDEwNywgc3ltYm9sOiAnQyd9LFxuICB7cG9zaXRpb246IDcsIG5hbWU6ICdOaXRyb2dlbicsIHdlaWdodDogMTQuMDA2Nywgc3ltYm9sOiAnTid9LFxuICB7cG9zaXRpb246IDgsIG5hbWU6ICdPeHlnZW4nLCB3ZWlnaHQ6IDE1Ljk5OTQsIHN5bWJvbDogJ08nfSxcbiAge3Bvc2l0aW9uOiA5LCBuYW1lOiAnRmx1b3JpbmUnLCB3ZWlnaHQ6IDE4Ljk5ODQsIHN5bWJvbDogJ0YnfSxcbiAge3Bvc2l0aW9uOiAxMCwgbmFtZTogJ05lb24nLCB3ZWlnaHQ6IDIwLjE3OTcsIHN5bWJvbDogJ05lJ30sXG5dO1xuXG4vKipcbiAqIEB0aXRsZSBVc2Ugb2YgJ21hdC10ZXh0LWNvbHVtbicgd2l0aCB2YXJpb3VzIGNvbmZpZ3VyYXRpb25zIG9mIHRoZSBpbnRlcmZhY2UuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhYmxlLXRleHQtY29sdW1uLWFkdmFuY2VkLWV4YW1wbGUnLFxuICBzdHlsZVVybHM6IFsndGFibGUtdGV4dC1jb2x1bW4tYWR2YW5jZWQtZXhhbXBsZS5jc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICd0YWJsZS10ZXh0LWNvbHVtbi1hZHZhbmNlZC1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZVRleHRDb2x1bW5BZHZhbmNlZEV4YW1wbGUge1xuICBkaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXSA9IFsncG9zaXRpb24nLCAnbmFtZScsICd3ZWlnaHQnLCAnc3ltYm9sJ107XG4gIGRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKEVMRU1FTlRfREFUQSk7XG5cbiAgaGVhZGVyVGV4dDogc3RyaW5nO1xuXG4gIGRlY2ltYWxQaXBlID0gbmV3IERlY2ltYWxQaXBlKCdlbi1VUycpO1xuXG4gIC8qKiBEYXRhIGFjY2Vzc29yIGZ1bmN0aW9uIHRoYXQgdHJhbnNmb3JtcyB0aGUgd2VpZ2h0IHZhbHVlIHRvIGhhdmUgYXQgbW9zdCAyIGRlY2ltYWwgZGlnaXRzLiAqL1xuICBnZXRXZWlnaHQgPSAoZGF0YTogUGVyaW9kaWNFbGVtZW50KTogc3RyaW5nID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLmRlY2ltYWxQaXBlLnRyYW5zZm9ybShkYXRhLndlaWdodCwgJzEuMC0yJyk7XG4gICAgcmV0dXJuIHJlc3VsdCA9PT0gbnVsbCA/ICcnIDogcmVzdWx0O1xuICB9XG59XG4iLCI8dGFibGUgbWF0LXRhYmxlIFtkYXRhU291cmNlXT1cImRhdGFTb3VyY2VcIiBjbGFzcz1cIm1hdC1lbGV2YXRpb24tejhcIj5cbiAgPG1hdC10ZXh0LWNvbHVtbiBuYW1lPVwicG9zaXRpb25cIiBbaGVhZGVyVGV4dF09XCJoZWFkZXJUZXh0XCI+PC9tYXQtdGV4dC1jb2x1bW4+XG5cbiAgPCEtLSBDaGFuZ2UgdGhlIGhlYWRlciB0ZXh0LiAtLT5cbiAgPG1hdC10ZXh0LWNvbHVtbiBuYW1lPVwibmFtZVwiIGhlYWRlclRleHQ9XCJFbGVtZW50XCI+PC9tYXQtdGV4dC1jb2x1bW4+XG5cbiAgPCEtLSBQcm92aWRlIGEgZGF0YSBhY2Nlc3NvciBmb3IgZ2V0dGluZyB0aGUgY2VsbCB0ZXh0IHZhbHVlcy4gLS0+XG4gIDxtYXQtdGV4dC1jb2x1bW4gbmFtZT1cIndlaWdodFwiIFtkYXRhQWNjZXNzb3JdPVwiZ2V0V2VpZ2h0XCI+PC9tYXQtdGV4dC1jb2x1bW4+XG5cbiAgPCEtLSBKdXN0aWZ5IHRoZSBjb250ZW50IG9mIHRoZSBjZWxscyB0byB0aGUgY2VsbCBlbmQuIC0tPlxuICA8bWF0LXRleHQtY29sdW1uIG5hbWU9XCJzeW1ib2xcIiBqdXN0aWZ5PVwiZW5kXCI+PC9tYXQtdGV4dC1jb2x1bW4+XG5cbiAgPHRyIG1hdC1oZWFkZXItcm93ICptYXRIZWFkZXJSb3dEZWY9XCJkaXNwbGF5ZWRDb2x1bW5zXCI+PC90cj5cbiAgPHRyIG1hdC1yb3cgKm1hdFJvd0RlZj1cImxldCByb3c7IGNvbHVtbnM6IGRpc3BsYXllZENvbHVtbnM7XCI+PC90cj5cbjwvdGFibGU+XG4iXX0=