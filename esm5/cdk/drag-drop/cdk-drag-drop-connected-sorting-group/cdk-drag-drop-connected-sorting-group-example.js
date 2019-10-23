import { Component } from '@angular/core';
import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/drag-drop";
import * as i2 from "@angular/common";
function CdkDragDropConnectedSortingGroupExample_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var item_r2 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r2);
} }
function CdkDragDropConnectedSortingGroupExample_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var item_r3 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r3);
} }
/**
 * @title Drag&Drop connected sorting group
 */
var CdkDragDropConnectedSortingGroupExample = /** @class */ (function () {
    function CdkDragDropConnectedSortingGroupExample() {
        this.todo = [
            'Get to work',
            'Pick up groceries',
            'Go home',
            'Fall asleep'
        ];
        this.done = [
            'Get up',
            'Brush teeth',
            'Take a shower',
            'Check e-mail',
            'Walk dog'
        ];
    }
    CdkDragDropConnectedSortingGroupExample.prototype.drop = function (event) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    };
    CdkDragDropConnectedSortingGroupExample.decorators = [
        { type: Component, args: [{
                    selector: 'cdk-drag-drop-connected-sorting-group-example',
                    templateUrl: 'cdk-drag-drop-connected-sorting-group-example.html',
                    styleUrls: ['cdk-drag-drop-connected-sorting-group-example.css'],
                },] },
    ];
    CdkDragDropConnectedSortingGroupExample.ɵfac = function CdkDragDropConnectedSortingGroupExample_Factory(t) { return new (t || CdkDragDropConnectedSortingGroupExample)(); };
    CdkDragDropConnectedSortingGroupExample.ɵcmp = i0.ɵɵdefineComponent({ type: CdkDragDropConnectedSortingGroupExample, selectors: [["cdk-drag-drop-connected-sorting-group-example"]], decls: 11, vars: 4, consts: [["cdkDropListGroup", ""], [1, "example-container"], ["cdkDropList", "", 1, "example-list", 3, "cdkDropListData", "cdkDropListDropped"], ["class", "example-box", "cdkDrag", "", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 1, "example-box"]], template: function CdkDragDropConnectedSortingGroupExample_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵelementStart(2, "h2");
            i0.ɵɵtext(3, "To do");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "div", 2);
            i0.ɵɵlistener("cdkDropListDropped", function CdkDragDropConnectedSortingGroupExample_Template_div_cdkDropListDropped_4_listener($event) { return ctx.drop($event); });
            i0.ɵɵtemplate(5, CdkDragDropConnectedSortingGroupExample_div_5_Template, 2, 1, "div", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "div", 1);
            i0.ɵɵelementStart(7, "h2");
            i0.ɵɵtext(8, "Done");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(9, "div", 2);
            i0.ɵɵlistener("cdkDropListDropped", function CdkDragDropConnectedSortingGroupExample_Template_div_cdkDropListDropped_9_listener($event) { return ctx.drop($event); });
            i0.ɵɵtemplate(10, CdkDragDropConnectedSortingGroupExample_div_10_Template, 2, 1, "div", 3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("cdkDropListData", ctx.todo);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.todo);
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("cdkDropListData", ctx.done);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.done);
        } }, directives: [i1.CdkDropListGroup, i1.CdkDropList, i2.NgForOf, i1.CdkDrag], styles: [".example-container[_ngcontent-%COMP%] {\n  width: 400px;\n  max-width: 100%;\n  margin: 0 25px 25px 0;\n  display: inline-block;\n  vertical-align: top;\n}\n\n.example-list[_ngcontent-%COMP%] {\n  border: solid 1px #ccc;\n  min-height: 60px;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n  display: block;\n}\n\n.example-box[_ngcontent-%COMP%] {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.cdk-drag-animating[_ngcontent-%COMP%] {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}"] });
    return CdkDragDropConnectedSortingGroupExample;
}());
export { CdkDragDropConnectedSortingGroupExample };
/*@__PURE__*/ i0.ɵsetClassMetadata(CdkDragDropConnectedSortingGroupExample, [{
        type: Component,
        args: [{
                selector: 'cdk-drag-drop-connected-sorting-group-example',
                templateUrl: 'cdk-drag-drop-connected-sorting-group-example.html',
                styleUrls: ['cdk-drag-drop-connected-sorting-group-example.css'],
            }]
    }], null, null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRyYWctZHJvcC1jb25uZWN0ZWQtc29ydGluZy1ncm91cC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL2Nkay9kcmFnLWRyb3AvY2RrLWRyYWctZHJvcC1jb25uZWN0ZWQtc29ydGluZy1ncm91cC9jZGstZHJhZy1kcm9wLWNvbm5lY3RlZC1zb3J0aW5nLWdyb3VwLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvY2RrL2RyYWctZHJvcC9jZGstZHJhZy1kcm9wLWNvbm5lY3RlZC1zb3J0aW5nLWdyb3VwL2Nkay1kcmFnLWRyb3AtY29ubmVjdGVkLXNvcnRpbmctZ3JvdXAtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFjLGVBQWUsRUFBRSxpQkFBaUIsRUFBQyxNQUFNLHdCQUF3QixDQUFDOzs7OztJQ1FqRiw4QkFBMkQ7SUFBQSxZQUFRO0lBQUEsaUJBQU07OztJQUFkLGVBQVE7SUFBUiw2QkFBUTs7O0lBWW5FLDhCQUEyRDtJQUFBLFlBQVE7SUFBQSxpQkFBTTs7O0lBQWQsZUFBUTtJQUFSLDZCQUFROztBRGxCekU7O0dBRUc7QUFDSDtJQUFBO1FBTUUsU0FBSSxHQUFHO1lBQ0wsYUFBYTtZQUNiLG1CQUFtQjtZQUNuQixTQUFTO1lBQ1QsYUFBYTtTQUNkLENBQUM7UUFFRixTQUFJLEdBQUc7WUFDTCxRQUFRO1lBQ1IsYUFBYTtZQUNiLGVBQWU7WUFDZixjQUFjO1lBQ2QsVUFBVTtTQUNYLENBQUM7S0FZSDtJQVZDLHNEQUFJLEdBQUosVUFBSyxLQUE0QjtRQUMvQixJQUFJLEtBQUssQ0FBQyxpQkFBaUIsS0FBSyxLQUFLLENBQUMsU0FBUyxFQUFFO1lBQy9DLGVBQWUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNoRjthQUFNO1lBQ0wsaUJBQWlCLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFDNUIsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQ3BCLEtBQUssQ0FBQyxhQUFhLEVBQ25CLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUN2QztJQUNILENBQUM7O2dCQTlCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLCtDQUErQztvQkFDekQsV0FBVyxFQUFFLG9EQUFvRDtvQkFDakUsU0FBUyxFQUFFLENBQUMsbURBQW1ELENBQUM7aUJBQ2pFOztrSUFDWSx1Q0FBdUM7Z0ZBQXZDLHVDQUF1QztZQ1hwRCw4QkFDRTtZQUFBLDhCQUNFO1lBQUEsMEJBQUk7WUFBQSxxQkFBSztZQUFBLGlCQUFLO1lBRWQsOEJBS0U7WUFEQSxpSkFBc0IsZ0JBQVksSUFBQztZQUNuQyx3RkFBMkQ7WUFDN0QsaUJBQU07WUFDUixpQkFBTTtZQUVOLDhCQUNFO1lBQUEsMEJBQUk7WUFBQSxvQkFBSTtZQUFBLGlCQUFLO1lBRWIsOEJBS0U7WUFEQSxpSkFBc0IsZ0JBQVksSUFBQztZQUNuQywwRkFBMkQ7WUFDN0QsaUJBQU07WUFDUixpQkFBTTtZQUNSLGlCQUFNOztZQWxCQSxlQUF3QjtZQUF4QiwwQ0FBd0I7WUFHQyxlQUF5QjtZQUF6QixrQ0FBeUI7WUFTbEQsZUFBd0I7WUFBeEIsMENBQXdCO1lBR0MsZUFBeUI7WUFBekIsa0NBQXlCOztrRERyQnhEO0NBcUNDLEFBL0JELElBK0JDO1NBMUJZLHVDQUF1QzttQ0FBdkMsdUNBQXVDO2NBTG5ELFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsK0NBQStDO2dCQUN6RCxXQUFXLEVBQUUsb0RBQW9EO2dCQUNqRSxTQUFTLEVBQUUsQ0FBQyxtREFBbUQsQ0FBQzthQUNqRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2RrRHJhZ0Ryb3AsIG1vdmVJdGVtSW5BcnJheSwgdHJhbnNmZXJBcnJheUl0ZW19IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xuXG4vKipcbiAqIEB0aXRsZSBEcmFnJkRyb3AgY29ubmVjdGVkIHNvcnRpbmcgZ3JvdXBcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2RrLWRyYWctZHJvcC1jb25uZWN0ZWQtc29ydGluZy1ncm91cC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdjZGstZHJhZy1kcm9wLWNvbm5lY3RlZC1zb3J0aW5nLWdyb3VwLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydjZGstZHJhZy1kcm9wLWNvbm5lY3RlZC1zb3J0aW5nLWdyb3VwLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIENka0RyYWdEcm9wQ29ubmVjdGVkU29ydGluZ0dyb3VwRXhhbXBsZSB7XG4gIHRvZG8gPSBbXG4gICAgJ0dldCB0byB3b3JrJyxcbiAgICAnUGljayB1cCBncm9jZXJpZXMnLFxuICAgICdHbyBob21lJyxcbiAgICAnRmFsbCBhc2xlZXAnXG4gIF07XG5cbiAgZG9uZSA9IFtcbiAgICAnR2V0IHVwJyxcbiAgICAnQnJ1c2ggdGVldGgnLFxuICAgICdUYWtlIGEgc2hvd2VyJyxcbiAgICAnQ2hlY2sgZS1tYWlsJyxcbiAgICAnV2FsayBkb2cnXG4gIF07XG5cbiAgZHJvcChldmVudDogQ2RrRHJhZ0Ryb3A8c3RyaW5nW10+KSB7XG4gICAgaWYgKGV2ZW50LnByZXZpb3VzQ29udGFpbmVyID09PSBldmVudC5jb250YWluZXIpIHtcbiAgICAgIG1vdmVJdGVtSW5BcnJheShldmVudC5jb250YWluZXIuZGF0YSwgZXZlbnQucHJldmlvdXNJbmRleCwgZXZlbnQuY3VycmVudEluZGV4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdHJhbnNmZXJBcnJheUl0ZW0oZXZlbnQucHJldmlvdXNDb250YWluZXIuZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LmNvbnRhaW5lci5kYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmlvdXNJbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LmN1cnJlbnRJbmRleCk7XG4gICAgfVxuICB9XG59XG4iLCI8ZGl2IGNka0Ryb3BMaXN0R3JvdXA+XG4gIDxkaXYgY2xhc3M9XCJleGFtcGxlLWNvbnRhaW5lclwiPlxuICAgIDxoMj5UbyBkbzwvaDI+XG5cbiAgICA8ZGl2XG4gICAgICBjZGtEcm9wTGlzdFxuICAgICAgW2Nka0Ryb3BMaXN0RGF0YV09XCJ0b2RvXCJcbiAgICAgIGNsYXNzPVwiZXhhbXBsZS1saXN0XCJcbiAgICAgIChjZGtEcm9wTGlzdERyb3BwZWQpPVwiZHJvcCgkZXZlbnQpXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1ib3hcIiAqbmdGb3I9XCJsZXQgaXRlbSBvZiB0b2RvXCIgY2RrRHJhZz57e2l0ZW19fTwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1jb250YWluZXJcIj5cbiAgICA8aDI+RG9uZTwvaDI+XG5cbiAgICA8ZGl2XG4gICAgICBjZGtEcm9wTGlzdFxuICAgICAgW2Nka0Ryb3BMaXN0RGF0YV09XCJkb25lXCJcbiAgICAgIGNsYXNzPVwiZXhhbXBsZS1saXN0XCJcbiAgICAgIChjZGtEcm9wTGlzdERyb3BwZWQpPVwiZHJvcCgkZXZlbnQpXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1ib3hcIiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBkb25lXCIgY2RrRHJhZz57e2l0ZW19fTwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuIl19