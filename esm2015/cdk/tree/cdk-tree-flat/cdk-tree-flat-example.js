/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ArrayDataSource } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/tree";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/icon";
function CdkTreeFlatExample_cdk_tree_node_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "cdk-tree-node", 3);
    i0.ɵɵelement(1, "button", 4);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const node_r2 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("display", ctx_r0.shouldRender(node_r2) ? "flex" : "none");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", node_r2.name, " ");
} }
function CdkTreeFlatExample_cdk_tree_node_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "cdk-tree-node", 3);
    i0.ɵɵelementStart(1, "button", 5);
    i0.ɵɵlistener("click", function CdkTreeFlatExample_cdk_tree_node_2_Template_button_click_1_listener($event) { const node_r3 = ctx.$implicit; return node_r3.isExpanded = !node_r3.isExpanded; });
    i0.ɵɵelementStart(2, "mat-icon", 6);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const node_r3 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵstyleProp("display", ctx_r1.shouldRender(node_r3) ? "flex" : "none");
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("visibility", node_r3.expandable ? "visible" : "hidden");
    i0.ɵɵattribute("aria-label", "toggle " + node_r3.filename);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.treeControl.isExpanded(node_r3) ? "expand_more" : "chevron_right", " ");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", node_r3.name, " ");
} }
/** @type {?} */
const TREE_DATA = [
    {
        name: 'Fruit',
        expandable: true,
        level: 0,
    }, {
        name: 'Apple',
        expandable: false,
        level: 1,
    }, {
        name: 'Banana',
        expandable: false,
        level: 1,
    }, {
        name: 'Fruit loops',
        expandable: false,
        level: 1,
    }, {
        name: 'Vegetables',
        expandable: true,
        level: 0,
    }, {
        name: 'Green',
        expandable: true,
        level: 1,
    }, {
        name: 'Broccoli',
        expandable: false,
        level: 2,
    }, {
        name: 'Brussel sprouts',
        expandable: false,
        level: 2,
    }, {
        name: 'Orange',
        expandable: true,
        level: 1,
    }, {
        name: 'Pumpkins',
        expandable: false,
        level: 2,
    }, {
        name: 'Carrots',
        expandable: false,
        level: 2,
    }
];
/**
 * Flat node with expandable and level information
 * @record
 */
function ExampleFlatNode() { }
if (false) {
    /** @type {?} */
    ExampleFlatNode.prototype.expandable;
    /** @type {?} */
    ExampleFlatNode.prototype.name;
    /** @type {?} */
    ExampleFlatNode.prototype.level;
    /** @type {?|undefined} */
    ExampleFlatNode.prototype.isExpanded;
}
/**
 * \@title Tree with flat nodes
 */
export class CdkTreeFlatExample {
    constructor() {
        this.treeControl = new FlatTreeControl((/**
         * @param {?} node
         * @return {?}
         */
        node => node.level), (/**
         * @param {?} node
         * @return {?}
         */
        node => node.expandable));
        this.dataSource = new ArrayDataSource(TREE_DATA);
        this.hasChild = (/**
         * @param {?} _
         * @param {?} node
         * @return {?}
         */
        (_, node) => node.expandable);
    }
    /**
     * @param {?} node
     * @return {?}
     */
    getParentNode(node) {
        /** @type {?} */
        const nodeIndex = TREE_DATA.indexOf(node);
        for (let i = nodeIndex - 1; i >= 0; i--) {
            if (TREE_DATA[i].level === node.level - 1) {
                return TREE_DATA[i];
            }
        }
        return null;
    }
    /**
     * @param {?} node
     * @return {?}
     */
    shouldRender(node) {
        /** @type {?} */
        const parent = this.getParentNode(node);
        return !parent || parent.isExpanded;
    }
}
CdkTreeFlatExample.decorators = [
    { type: Component, args: [{
                selector: 'cdk-tree-flat-example',
                templateUrl: 'cdk-tree-flat-example.html',
                styleUrls: ['cdk-tree-flat-example.css'],
            },] },
];
/** @nocollapse */ CdkTreeFlatExample.ɵfac = function CdkTreeFlatExample_Factory(t) { return new (t || CdkTreeFlatExample)(); };
/** @nocollapse */ CdkTreeFlatExample.ɵcmp = i0.ɵɵdefineComponent({ type: CdkTreeFlatExample, selectors: [["cdk-tree-flat-example"]], decls: 3, vars: 3, consts: [[3, "dataSource", "treeControl"], ["cdkTreeNodePadding", "", "class", "example-tree-node", 3, "display", 4, "cdkTreeNodeDef"], ["cdkTreeNodePadding", "", "class", "example-tree-node", 3, "display", 4, "cdkTreeNodeDef", "cdkTreeNodeDefWhen"], ["cdkTreeNodePadding", "", 1, "example-tree-node"], ["mat-icon-button", "", "disabled", ""], ["mat-icon-button", "", "cdkTreeNodeToggle", "", 3, "click"], [1, "mat-icon-rtl-mirror"]], template: function CdkTreeFlatExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "cdk-tree", 0);
        i0.ɵɵtemplate(1, CdkTreeFlatExample_cdk_tree_node_1_Template, 3, 2, "cdk-tree-node", 1);
        i0.ɵɵtemplate(2, CdkTreeFlatExample_cdk_tree_node_2_Template, 5, 5, "cdk-tree-node", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("cdkTreeNodeDefWhen", ctx.hasChild);
    } }, directives: [i1.CdkTree, i1.CdkTreeNodeDef, i1.CdkTreeNode, i1.CdkTreeNodePadding, i2.MatButton, i1.CdkTreeNodeToggle, i3.MatIcon], styles: [".example-tree-node[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}"] });
/*@__PURE__*/ i0.ɵsetClassMetadata(CdkTreeFlatExample, [{
        type: Component,
        args: [{
                selector: 'cdk-tree-flat-example',
                templateUrl: 'cdk-tree-flat-example.html',
                styleUrls: ['cdk-tree-flat-example.css'],
            }]
    }], null, null);
if (false) {
    /** @type {?} */
    CdkTreeFlatExample.prototype.treeControl;
    /** @type {?} */
    CdkTreeFlatExample.prototype.dataSource;
    /** @type {?} */
    CdkTreeFlatExample.prototype.hasChild;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXRyZWUtZmxhdC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL2Nkay90cmVlL2Nkay10cmVlLWZsYXQvY2RrLXRyZWUtZmxhdC1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL2Nkay90cmVlL2Nkay10cmVlLWZsYXQvY2RrLXRyZWUtZmxhdC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDbEQsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7O0lDQXRDLHdDQUdFO0lBQ0EsNEJBQTBDO0lBQzFDLFlBQ0Y7SUFBQSxpQkFBZ0I7Ozs7SUFMRCx5RUFBc0Q7SUFJbkUsZUFDRjtJQURFLDZDQUNGOzs7SUFFQSx3Q0FHRTtJQUFBLGlDQUlFO0lBRk0sZ01BQTRDO0lBRWxELG1DQUNFO0lBQUEsWUFDRjtJQUFBLGlCQUFXO0lBQ2IsaUJBQVM7SUFDVCxZQUNGO0lBQUEsaUJBQWdCOzs7O0lBWEQseUVBQXNEO0lBSzNELGVBQTJEO0lBQTNELHVFQUEyRDtJQUYzRCwwREFBNkM7SUFJakQsZUFDRjtJQURFLHlHQUNGO0lBRUYsZUFDRjtJQURFLDZDQUNGOzs7TURqQkksU0FBUyxHQUFzQjtJQUNuQztRQUNFLElBQUksRUFBRSxPQUFPO1FBQ2IsVUFBVSxFQUFFLElBQUk7UUFDaEIsS0FBSyxFQUFFLENBQUM7S0FDVCxFQUFFO1FBQ0QsSUFBSSxFQUFFLE9BQU87UUFDYixVQUFVLEVBQUUsS0FBSztRQUNqQixLQUFLLEVBQUUsQ0FBQztLQUNULEVBQUU7UUFDRCxJQUFJLEVBQUUsUUFBUTtRQUNk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b3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FycmF5RGF0YVNvdXJjZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvbGxlY3Rpb25zJztcbmltcG9ydCB7RmxhdFRyZWVDb250cm9sfSBmcm9tICdAYW5ndWxhci9jZGsvdHJlZSc7XG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cblxuY29uc3QgVFJFRV9EQVRBOiBFeGFtcGxlRmxhdE5vZGVbXSA9IFtcbiAge1xuICAgIG5hbWU6ICdGcnVpdCcsXG4gICAgZXhwYW5kYWJsZTogdHJ1ZSxcbiAgICBsZXZlbDogMCxcbiAgfSwge1xuICAgIG5hbWU6ICdBcHBsZScsXG4gICAgZXhwYW5kYWJsZTogZmFsc2UsXG4gICAgbGV2ZWw6IDEsXG4gIH0sIHtcbiAgICBuYW1lOiAnQmFuYW5hJyxcbiAgICBleHBhbmRhYmxlOiBmYWxzZSxcbiAgICBsZXZlbDogMSxcbiAgfSwge1xuICAgIG5hbWU6ICdGcnVpdCBsb29wcycsXG4gICAgZXhwYW5kYWJsZTogZmFsc2UsXG4gICAgbGV2ZWw6IDEsXG4gIH0sIHtcbiAgICBuYW1lOiAnVmVnZXRhYmxlcycsXG4gICAgZXhwYW5kYWJsZTogdHJ1ZSxcbiAgICBsZXZlbDogMCxcbiAgfSwge1xuICAgIG5hbWU6ICdHcmVlbicsXG4gICAgZXhwYW5kYWJsZTogdHJ1ZSxcbiAgICBsZXZlbDogMSxcbiAgfSwge1xuICAgIG5hbWU6ICdCcm9jY29saScsXG4gICAgZXhwYW5kYWJsZTogZmFsc2UsXG4gICAgbGV2ZWw6IDIsXG4gIH0sIHtcbiAgICBuYW1lOiAnQnJ1c3NlbCBzcHJvdXRzJyxcbiAgICBleHBhbmRhYmxlOiBmYWxzZSxcbiAgICBsZXZlbDogMixcbiAgfSwge1xuICAgIG5hbWU6ICdPcmFuZ2UnLFxuICAgIGV4cGFuZGFibGU6IHRydWUsXG4gICAgbGV2ZWw6IDEsXG4gIH0sIHtcbiAgICBuYW1lOiAnUHVtcGtpbnMnLFxuICAgIGV4cGFuZGFibGU6IGZhbHNlLFxuICAgIGxldmVsOiAyLFxuICB9LCB7XG4gICAgbmFtZTogJ0NhcnJvdHMnLFxuICAgIGV4cGFuZGFibGU6IGZhbHNlLFxuICAgIGxldmVsOiAyLFxuICB9XG5dO1xuXG4vKiogRmxhdCBub2RlIHdpdGggZXhwYW5kYWJsZSBhbmQgbGV2ZWwgaW5mb3JtYXRpb24gKi9cbmludGVyZmFjZSBFeGFtcGxlRmxhdE5vZGUge1xuICBleHBhbmRhYmxlOiBib29sZWFuO1xuICBuYW1lOiBzdHJpbmc7XG4gIGxldmVsOiBudW1iZXI7XG4gIGlzRXhwYW5kZWQ/OiBib29sZWFuO1xufVxuXG4vKipcbiAqIEB0aXRsZSBUcmVlIHdpdGggZmxhdCBub2Rlc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstdHJlZS1mbGF0LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2Nkay10cmVlLWZsYXQtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2Nkay10cmVlLWZsYXQtZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrVHJlZUZsYXRFeGFtcGxlIHtcbiAgdHJlZUNvbnRyb2wgPSBuZXcgRmxhdFRyZWVDb250cm9sPEV4YW1wbGVGbGF0Tm9kZT4oXG4gICAgICBub2RlID0+IG5vZGUubGV2ZWwsIG5vZGUgPT4gbm9kZS5leHBhbmRhYmxlKTtcblxuICBkYXRhU291cmNlID0gbmV3IEFycmF5RGF0YVNvdXJjZShUUkVFX0RBVEEpO1xuXG4gIGhhc0NoaWxkID0gKF86IG51bWJlciwgbm9kZTogRXhhbXBsZUZsYXROb2RlKSA9PiBub2RlLmV4cGFuZGFibGU7XG5cbiAgZ2V0UGFyZW50Tm9kZShub2RlOiBFeGFtcGxlRmxhdE5vZGUpIHtcbiAgICBjb25zdCBub2RlSW5kZXggPSBUUkVFX0RBVEEuaW5kZXhPZihub2RlKTtcblxuICAgIGZvciAobGV0IGkgPSBub2RlSW5kZXggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgaWYgKFRSRUVfREFUQVtpXS5sZXZlbCA9PT0gbm9kZS5sZXZlbCAtIDEpIHtcbiAgICAgICAgcmV0dXJuIFRSRUVfREFUQVtpXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHNob3VsZFJlbmRlcihub2RlOiBFeGFtcGxlRmxhdE5vZGUpIHtcbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLmdldFBhcmVudE5vZGUobm9kZSk7XG4gICAgcmV0dXJuICFwYXJlbnQgfHwgcGFyZW50LmlzRXhwYW5kZWQ7XG4gIH1cbn1cbiIsIjxjZGstdHJlZSBbZGF0YVNvdXJjZV09XCJkYXRhU291cmNlXCIgW3RyZWVDb250cm9sXT1cInRyZWVDb250cm9sXCI+XG4gIDwhLS0gVGhpcyBpcyB0aGUgdHJlZSBub2RlIHRlbXBsYXRlIGZvciBsZWFmIG5vZGVzIC0tPlxuICA8Y2RrLXRyZWUtbm9kZSAqY2RrVHJlZU5vZGVEZWY9XCJsZXQgbm9kZVwiIGNka1RyZWVOb2RlUGFkZGluZ1xuICAgICAgICAgICAgICAgICBbc3R5bGUuZGlzcGxheV09XCJzaG91bGRSZW5kZXIobm9kZSkgPyAnZmxleCcgOiAnbm9uZSdcIlxuICAgICAgICAgICAgICAgICBjbGFzcz1cImV4YW1wbGUtdHJlZS1ub2RlXCI+XG4gICAgPCEtLSB1c2UgYSBkaXNhYmxlZCBidXR0b24gdG8gcHJvdmlkZSBwYWRkaW5nIGZvciB0cmVlIGxlYWYgLS0+XG4gICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gZGlzYWJsZWQ+PC9idXR0b24+XG4gICAge3tub2RlLm5hbWV9fVxuICA8L2Nkay10cmVlLW5vZGU+XG4gIDwhLS0gVGhpcyBpcyB0aGUgdHJlZSBub2RlIHRlbXBsYXRlIGZvciBleHBhbmRhYmxlIG5vZGVzIC0tPlxuICA8Y2RrLXRyZWUtbm9kZSAqY2RrVHJlZU5vZGVEZWY9XCJsZXQgbm9kZTsgd2hlbjogaGFzQ2hpbGRcIiBjZGtUcmVlTm9kZVBhZGRpbmdcbiAgICAgICAgICAgICAgICAgW3N0eWxlLmRpc3BsYXldPVwic2hvdWxkUmVuZGVyKG5vZGUpID8gJ2ZsZXgnIDogJ25vbmUnXCJcbiAgICAgICAgICAgICAgICAgY2xhc3M9XCJleGFtcGxlLXRyZWUtbm9kZVwiPlxuICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGNka1RyZWVOb2RlVG9nZ2xlXG4gICAgICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cIid0b2dnbGUgJyArIG5vZGUuZmlsZW5hbWVcIlxuICAgICAgICAgICAgKGNsaWNrKT1cIm5vZGUuaXNFeHBhbmRlZCA9ICFub2RlLmlzRXhwYW5kZWRcIlxuICAgICAgICAgICAgW3N0eWxlLnZpc2liaWxpdHldPVwibm9kZS5leHBhbmRhYmxlID8gJ3Zpc2libGUnIDogJ2hpZGRlbidcIj5cbiAgICAgIDxtYXQtaWNvbiBjbGFzcz1cIm1hdC1pY29uLXJ0bC1taXJyb3JcIj5cbiAgICAgICAge3t0cmVlQ29udHJvbC5pc0V4cGFuZGVkKG5vZGUpID8gJ2V4cGFuZF9tb3JlJyA6ICdjaGV2cm9uX3JpZ2h0J319XG4gICAgICA8L21hdC1pY29uPlxuICAgIDwvYnV0dG9uPlxuICAgIHt7bm9kZS5uYW1lfX1cbiAgPC9jZGstdHJlZS1ub2RlPlxuPC9jZGstdHJlZT5cbiJdfQ==