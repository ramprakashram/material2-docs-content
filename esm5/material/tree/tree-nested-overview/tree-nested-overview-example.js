import { NestedTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
var TREE_DATA = [
    {
        name: 'Fruit',
        children: [
            { name: 'Apple' },
            { name: 'Banana' },
            { name: 'Fruit loops' },
        ]
    }, {
        name: 'Vegetables',
        children: [
            {
                name: 'Green',
                children: [
                    { name: 'Broccoli' },
                    { name: 'Brussel sprouts' },
                ]
            }, {
                name: 'Orange',
                children: [
                    { name: 'Pumpkins' },
                    { name: 'Carrots' },
                ]
            },
        ]
    },
];
/**
 * @title Tree with nested nodes
 */
var TreeNestedOverviewExample = /** @class */ (function () {
    function TreeNestedOverviewExample() {
        this.treeControl = new NestedTreeControl(function (node) { return node.children; });
        this.dataSource = new MatTreeNestedDataSource();
        this.hasChild = function (_, node) { return !!node.children && node.children.length > 0; };
        this.dataSource.data = TREE_DATA;
    }
    TreeNestedOverviewExample.decorators = [
        { type: Component, args: [{
                    selector: 'tree-nested-overview-example',
                    template: "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\" class=\"example-tree\">\n  <!-- This is the tree node template for leaf nodes -->\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodeToggle>\n    <li class=\"mat-tree-node\">\n      <!-- use a disabled button to provide padding for tree leaf -->\n      <button mat-icon-button disabled></button>\n      {{node.name}}\n    </li>\n  </mat-tree-node>\n  <!-- This is the tree node template for expandable nodes -->\n  <mat-nested-tree-node *matTreeNodeDef=\"let node; when: hasChild\">\n    <li>\n      <div class=\"mat-tree-node\">\n        <button mat-icon-button matTreeNodeToggle\n                [attr.aria-label]=\"'toggle ' + node.name\">\n          <mat-icon class=\"mat-icon-rtl-mirror\">\n            {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n          </mat-icon>\n        </button>\n        {{node.name}}\n      </div>\n      <ul [class.example-tree-invisible]=\"!treeControl.isExpanded(node)\">\n        <ng-container matTreeNodeOutlet></ng-container>\n      </ul>\n    </li>\n  </mat-nested-tree-node>\n</mat-tree>\n",
                    styles: [".example-tree-invisible {\n  display: none;\n}\n\n.example-tree ul,\n.example-tree li {\n  margin-top: 0;\n  margin-bottom: 0;\n  list-style-type: none;\n}\n"]
                }] }
    ];
    /** @nocollapse */
    TreeNestedOverviewExample.ctorParameters = function () { return []; };
    return TreeNestedOverviewExample;
}());
export { TreeNestedOverviewExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1uZXN0ZWQtb3ZlcnZpZXctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9tYXRlcmlhbC90cmVlL3RyZWUtbmVzdGVkLW92ZXJ2aWV3L3RyZWUtbmVzdGVkLW92ZXJ2aWV3LWV4YW1wbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDcEQsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsdUJBQXVCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQVcvRCxJQUFNLFNBQVMsR0FBZTtJQUM1QjtRQUNFLElBQUksRUFBRSxPQUFPO1FBQ2IsUUFBUSxFQUFFO1lBQ1IsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFDO1lBQ2YsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFDO1lBQ2hCLEVBQUMsSUFBSSxFQUFFLGFBQWEsRUFBQztTQUN0QjtLQUNGLEVBQUU7UUFDRCxJQUFJLEVBQUUsWUFBWTtRQUNsQixRQUFRLEVBQUU7WUFDUjtnQkFDRSxJQUFJLEVBQUUsT0FBTztnQkFDYixRQUFRLEVBQUU7b0JBQ1IsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFDO29CQUNsQixFQUFDLElBQUksRUFBRSxpQkFBaUIsRUFBQztpQkFDMUI7YUFDRixFQUFFO2dCQUNELElBQUksRUFBRSxRQUFRO2dCQUNkLFFBQVEsRUFBRTtvQkFDUixFQUFDLElBQUksRUFBRSxVQUFVLEVBQUM7b0JBQ2xCLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBQztpQkFDbEI7YUFDRjtTQUNGO0tBQ0Y7Q0FDRixDQUFDO0FBRUY7O0dBRUc7QUFDSDtJQVNFO1FBSEEsZ0JBQVcsR0FBRyxJQUFJLGlCQUFpQixDQUFXLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLFFBQVEsRUFBYixDQUFhLENBQUMsQ0FBQztRQUNyRSxlQUFVLEdBQUcsSUFBSSx1QkFBdUIsRUFBWSxDQUFDO1FBTXJELGFBQVEsR0FBRyxVQUFDLENBQVMsRUFBRSxJQUFjLElBQUssT0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQTNDLENBQTJDLENBQUM7UUFIcEYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO0lBQ25DLENBQUM7O2dCQVhGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsOEJBQThCO29CQUN4QyxvbkNBQWdEOztpQkFFakQ7Ozs7SUFVRCxnQ0FBQztDQUFBLEFBZEQsSUFjQztTQVRZLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmVzdGVkVHJlZUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Nkay90cmVlJztcbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0VHJlZU5lc3RlZERhdGFTb3VyY2V9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RyZWUnO1xuXG4vKipcbiAqIEZvb2QgZGF0YSB3aXRoIG5lc3RlZCBzdHJ1Y3R1cmUuXG4gKiBFYWNoIG5vZGUgaGFzIGEgbmFtZSBhbmQgYW4gb3B0aW9uYSBsaXN0IG9mIGNoaWxkcmVuLlxuICovXG5pbnRlcmZhY2UgRm9vZE5vZGUge1xuICBuYW1lOiBzdHJpbmc7XG4gIGNoaWxkcmVuPzogRm9vZE5vZGVbXTtcbn1cblxuY29uc3QgVFJFRV9EQVRBOiBGb29kTm9kZVtdID0gW1xuICB7XG4gICAgbmFtZTogJ0ZydWl0JyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge25hbWU6ICdBcHBsZSd9LFxuICAgICAge25hbWU6ICdCYW5hbmEnfSxcbiAgICAgIHtuYW1lOiAnRnJ1aXQgbG9vcHMnfSxcbiAgICBdXG4gIH0sIHtcbiAgICBuYW1lOiAnVmVnZXRhYmxlcycsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0dyZWVuJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7bmFtZTogJ0Jyb2Njb2xpJ30sXG4gICAgICAgICAge25hbWU6ICdCcnVzc2VsIHNwcm91dHMnfSxcbiAgICAgICAgXVxuICAgICAgfSwge1xuICAgICAgICBuYW1lOiAnT3JhbmdlJyxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7bmFtZTogJ1B1bXBraW5zJ30sXG4gICAgICAgICAge25hbWU6ICdDYXJyb3RzJ30sXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgXVxuICB9LFxuXTtcblxuLyoqXG4gKiBAdGl0bGUgVHJlZSB3aXRoIG5lc3RlZCBub2Rlc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0cmVlLW5lc3RlZC1vdmVydmlldy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICd0cmVlLW5lc3RlZC1vdmVydmlldy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsndHJlZS1uZXN0ZWQtb3ZlcnZpZXctZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgVHJlZU5lc3RlZE92ZXJ2aWV3RXhhbXBsZSB7XG4gIHRyZWVDb250cm9sID0gbmV3IE5lc3RlZFRyZWVDb250cm9sPEZvb2ROb2RlPihub2RlID0+IG5vZGUuY2hpbGRyZW4pO1xuICBkYXRhU291cmNlID0gbmV3IE1hdFRyZWVOZXN0ZWREYXRhU291cmNlPEZvb2ROb2RlPigpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZGF0YVNvdXJjZS5kYXRhID0gVFJFRV9EQVRBO1xuICB9XG5cbiAgaGFzQ2hpbGQgPSAoXzogbnVtYmVyLCBub2RlOiBGb29kTm9kZSkgPT4gISFub2RlLmNoaWxkcmVuICYmIG5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMDtcbn1cbiJdfQ==