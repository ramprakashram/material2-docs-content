import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
/**
 * @title Tooltip with a show and hide delay
 */
var TooltipDelayExample = /** @class */ (function () {
    function TooltipDelayExample() {
        this.showDelay = new FormControl(1000);
        this.hideDelay = new FormControl(2000);
    }
    TooltipDelayExample.decorators = [
        { type: Component, args: [{
                    selector: 'tooltip-delay-example',
                    template: "<mat-form-field class=\"example-user-input\">\n  <input matInput placeholder=\"Show delay (milliseconds)\"\n         type=\"number\"\n         aria-label=\"Adds a delay between hovering over the button and displaying the tooltip\"\n         [formControl]=\"showDelay\">\n</mat-form-field>\n\n<mat-form-field class=\"example-user-input\">\n  <input matInput placeholder=\"Hide delay (milliseconds)\"\n         type=\"number\"\n         aria-label=\"Adds a delay between hovering away from the button and hiding the tooltip\"\n         [formControl]=\"hideDelay\">\n</mat-form-field>\n\n<button mat-raised-button\n        matTooltip=\"Info about the action\"\n        [matTooltipShowDelay]=\"showDelay.value\"\n        [matTooltipHideDelay]=\"hideDelay.value\"\n        aria-label=\"Button that displays a tooltip with a customized delay in showing and hiding\">\n  Action\n</button>\n",
                    styles: [".example-user-input {\n  display: block;\n  width: 150px;\n}\n"]
                }] }
    ];
    return TooltipDelayExample;
}());
export { TooltipDelayExample };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC1kZWxheS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21hdGVyaWFsLWV4YW1wbGVzL21hdGVyaWFsL3Rvb2x0aXAvdG9vbHRpcC1kZWxheS90b29sdGlwLWRlbGF5LWV4YW1wbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0M7O0dBRUc7QUFDSDtJQUFBO1FBTUUsY0FBUyxHQUFHLElBQUksV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xDLGNBQVMsR0FBRyxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDOztnQkFSQSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtvQkFDakMsKzNCQUF5Qzs7aUJBRTFDOztJQUlELDBCQUFDO0NBQUEsQUFSRCxJQVFDO1NBSFksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQ29udHJvbH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vKipcbiAqIEB0aXRsZSBUb29sdGlwIHdpdGggYSBzaG93IGFuZCBoaWRlIGRlbGF5XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Rvb2x0aXAtZGVsYXktZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAndG9vbHRpcC1kZWxheS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsndG9vbHRpcC1kZWxheS1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBUb29sdGlwRGVsYXlFeGFtcGxlIHtcbiAgc2hvd0RlbGF5ID0gbmV3IEZvcm1Db250cm9sKDEwMDApO1xuICBoaWRlRGVsYXkgPSBuZXcgRm9ybUNvbnRyb2woMjAwMCk7XG59XG4iXX0=