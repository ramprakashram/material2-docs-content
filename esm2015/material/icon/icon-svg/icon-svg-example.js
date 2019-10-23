/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/icon";
import * as i2 from "@angular/platform-browser";
/**
 * \@title SVG icons
 */
export class IconSvgExample {
    /**
     * @param {?} iconRegistry
     * @param {?} sanitizer
     */
    constructor(iconRegistry, sanitizer) {
        iconRegistry.addSvgIcon('thumbs-up', sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/thumbup-icon.svg'));
    }
}
IconSvgExample.decorators = [
    { type: Component, args: [{
                selector: 'icon-svg-example',
                templateUrl: 'icon-svg-example.html',
                styleUrls: ['icon-svg-example.css'],
            },] },
];
/** @nocollapse */
IconSvgExample.ctorParameters = () => [
    { type: MatIconRegistry },
    { type: DomSanitizer }
];
/** @nocollapse */ IconSvgExample.ɵfac = function IconSvgExample_Factory(t) { return new (t || IconSvgExample)(i0.ɵɵdirectiveInject(i1.MatIconRegistry), i0.ɵɵdirectiveInject(i2.DomSanitizer)); };
/** @nocollapse */ IconSvgExample.ɵcmp = i0.ɵɵdefineComponent({ type: IconSvgExample, selectors: [["icon-svg-example"]], decls: 1, vars: 0, consts: [["svgIcon", "thumbs-up", "aria-hidden", "false", "aria-label", "Example thumbs up SVG icon"]], template: function IconSvgExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "mat-icon", 0);
    } }, directives: [i1.MatIcon], styles: [""] });
/*@__PURE__*/ i0.ɵsetClassMetadata(IconSvgExample, [{
        type: Component,
        args: [{
                selector: 'icon-svg-example',
                templateUrl: 'icon-svg-example.html',
                styleUrls: ['icon-svg-example.css'],
            }]
    }], function () { return [{ type: i1.MatIconRegistry }, { type: i2.DomSanitizer }]; }, null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi1zdmctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tYXRlcmlhbC1leGFtcGxlcy9tYXRlcmlhbC9pY29uL2ljb24tc3ZnL2ljb24tc3ZnLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvbWF0ZXJpYWwtZXhhbXBsZXMvbWF0ZXJpYWwvaWNvbi9pY29uLXN2Zy9pY29uLXN2Zy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7OztBQVV2RCxNQUFNLE9BQU8sY0FBYzs7Ozs7SUFDekIsWUFBWSxZQUE2QixFQUFFLFNBQXVCO1FBQ2hFLFlBQVksQ0FBQyxVQUFVLENBQ25CLFdBQVcsRUFDWCxTQUFTLENBQUMsOEJBQThCLENBQUMsc0NBQXNDLENBQUMsQ0FBQyxDQUFDO0lBQ3hGLENBQUM7OztZQVZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixXQUFXLEVBQUUsdUJBQXVCO2dCQUNwQyxTQUFTLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQzthQUNwQzs7OztZQVRPLGVBQWU7WUFEZixZQUFZOzs0RUFXUCxjQUFjO21EQUFkLGNBQWM7UUNaM0IsOEJBQXFHOzttQ0RZeEYsY0FBYztjQUwxQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsV0FBVyxFQUFFLHVCQUF1QjtnQkFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7YUFDcEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0RvbVNhbml0aXplcn0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQge01hdEljb25SZWdpc3RyeX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5cbi8qKlxuICogQHRpdGxlIFNWRyBpY29uc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpY29uLXN2Zy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdpY29uLXN2Zy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnaWNvbi1zdmctZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgSWNvblN2Z0V4YW1wbGUge1xuICBjb25zdHJ1Y3RvcihpY29uUmVnaXN0cnk6IE1hdEljb25SZWdpc3RyeSwgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHtcbiAgICBpY29uUmVnaXN0cnkuYWRkU3ZnSWNvbihcbiAgICAgICAgJ3RodW1icy11cCcsXG4gICAgICAgIHNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0UmVzb3VyY2VVcmwoJ2Fzc2V0cy9pbWcvZXhhbXBsZXMvdGh1bWJ1cC1pY29uLnN2ZycpKTtcbiAgfVxufVxuIiwiPG1hdC1pY29uIHN2Z0ljb249XCJ0aHVtYnMtdXBcIiBhcmlhLWhpZGRlbj1cImZhbHNlXCIgYXJpYS1sYWJlbD1cIkV4YW1wbGUgdGh1bWJzIHVwIFNWRyBpY29uXCI+PC9tYXQtaWNvbj5cbiJdfQ==