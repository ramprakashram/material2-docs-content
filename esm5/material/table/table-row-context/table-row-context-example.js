import { Component } from '@angular/core';
/**
 * @title Table showing each row context properties.
 */
var TableRowContextExample = /** @class */ (function () {
    function TableRowContextExample() {
        this.displayedColumns = ['$implicit', 'index', 'count', 'first', 'last', 'even', 'odd'];
        this.data = ['one', 'two', 'three', 'four', 'five'];
    }
    TableRowContextExample.decorators = [
        { type: Component, args: [{
                    selector: 'table-row-context-example',
                    template: "<table mat-table [dataSource]=\"data\" class=\"mat-elevation-z8\">\n  <!-- Index Column -->\n  <ng-container matColumnDef=\"$implicit\">\n    <th mat-header-cell *matHeaderCellDef> $implicit </th>\n    <td mat-cell *matCellDef=\"let data\"> {{data}} </td>\n  </ng-container>\n\n  <!-- Index Column -->\n  <ng-container matColumnDef=\"index\">\n    <th mat-header-cell *matHeaderCellDef> index </th>\n    <td mat-cell *matCellDef=\"let index = index\"> {{index}} </td>\n  </ng-container>\n\n  <!-- Index Column -->\n  <ng-container matColumnDef=\"count\">\n    <th mat-header-cell *matHeaderCellDef> count </th>\n    <td mat-cell *matCellDef=\"let count = count\"> {{count}} </td>\n  </ng-container>\n\n  <!-- Index Column -->\n  <ng-container matColumnDef=\"first\">\n    <th mat-header-cell *matHeaderCellDef> first </th>\n    <td mat-cell *matCellDef=\"let first = first\"> {{first}} </td>\n  </ng-container>\n\n  <!-- Index Column -->\n  <ng-container matColumnDef=\"last\">\n    <th mat-header-cell *matHeaderCellDef> last </th>\n    <td mat-cell *matCellDef=\"let last = last\"> {{last}} </td>\n  </ng-container>\n\n  <!-- Index Column -->\n  <ng-container matColumnDef=\"even\">\n    <th mat-header-cell *matHeaderCellDef> even </th>\n    <td mat-cell *matCellDef=\"let even = even\"> {{even}} </td>\n  </ng-container>\n\n  <!-- Index Column -->\n  <ng-container matColumnDef=\"odd\">\n    <th mat-header-cell *matHeaderCellDef> odd </th>\n    <td mat-cell *matCellDef=\"let odd = odd\"> {{odd}} </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n",
                    styles: ["table {\n  width: 100%;\n}\n"]
                }] }
    ];
    return TableRowContextExample;
}());
export { TableRowContextExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtcm93LWNvbnRleHQtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9tYXRlcmlhbC90YWJsZS90YWJsZS1yb3ctY29udGV4dC90YWJsZS1yb3ctY29udGV4dC1leGFtcGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFeEM7O0dBRUc7QUFDSDtJQUFBO1FBTUUscUJBQWdCLEdBQWEsQ0FBQyxXQUFXLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM3RixTQUFJLEdBQWEsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7Z0JBUkEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwyQkFBMkI7b0JBRXJDLDBwREFBNkM7O2lCQUM5Qzs7SUFJRCw2QkFBQztDQUFBLEFBUkQsSUFRQztTQUhZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgVGFibGUgc2hvd2luZyBlYWNoIHJvdyBjb250ZXh0IHByb3BlcnRpZXMuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhYmxlLXJvdy1jb250ZXh0LWV4YW1wbGUnLFxuICBzdHlsZVVybHM6IFsndGFibGUtcm93LWNvbnRleHQtZXhhbXBsZS5jc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICd0YWJsZS1yb3ctY29udGV4dC1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZVJvd0NvbnRleHRFeGFtcGxlIHtcbiAgZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW10gPSBbJyRpbXBsaWNpdCcsICdpbmRleCcsICdjb3VudCcsICdmaXJzdCcsICdsYXN0JywgJ2V2ZW4nLCAnb2RkJ107XG4gIGRhdGE6IHN0cmluZ1tdID0gWydvbmUnLCAndHdvJywgJ3RocmVlJywgJ2ZvdXInLCAnZml2ZSddO1xufVxuIl19